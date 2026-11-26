// Notesflix 101 payments Worker (Cloudflare Workers, free plan).
// Creates Razorpay orders, verifies payments, and records each student's pass in Firestore.
//
// Secrets (set in Cloudflare → Worker → Settings → Variables and Secrets, type "Secret"):
//   RAZORPAY_KEY_SECRET       Razorpay key secret (test or live, must match RAZORPAY_KEY_ID)
//   RAZORPAY_WEBHOOK_SECRET   the secret you type when creating the Razorpay webhook
//   FIREBASE_SERVICE_ACCOUNT  the whole JSON file of a Firebase service account key
// Plain variables (type "Text"):
//   RAZORPAY_KEY_ID           e.g. rzp_test_xxxxx (public)
//   FIREBASE_PROJECT_ID       notesflix101
//   ALLOWED_ORIGINS           https://notesflix101.com,https://www.notesflix101.com
//
// Prices live here (the server decides what a plan costs; the website only displays them).
const PLANS = {
  m1: { name: "Monthly", rupees: 37, days: 30 },
  m6: { name: "6 months", rupees: 179, days: 182 },
  y1: { name: "Yearly", rupees: 299, days: 365 },
};

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : (allowed[0] || "*"),
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
      "Vary": "Origin",
    };
    const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    const path = new URL(req.url).pathname.replace(/\/+$/, "");
    try {
      if (req.method === "GET" && (path === "" || path === "/plans")) {
        return json({ keyId: env.RAZORPAY_KEY_ID, plans: Object.entries(PLANS).map(([id, p]) => ({ id, ...p })) });
      }
      if (req.method === "POST" && path === "/order") {
        const user = await verifyFirebaseToken(req, env);
        const { plan } = await req.json();
        const p = PLANS[plan];
        if (!p) return json({ error: "Unknown plan" }, 400);
        const order = await razorpay(env, "POST", "/orders", {
          amount: p.rupees * 100, currency: "INR",
          receipt: ("nf_" + user.uid.slice(0, 20) + "_" + Date.now()).slice(0, 40),
          notes: { uid: user.uid, plan, email: user.email || "" },
        });
        return json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: env.RAZORPAY_KEY_ID, plan, name: p.name });
      }
      if (req.method === "POST" && path === "/verify") {
        const user = await verifyFirebaseToken(req, env);
        const b = await req.json();
        const expected = await hmacHex(env.RAZORPAY_KEY_SECRET, b.razorpay_order_id + "|" + b.razorpay_payment_id);
        if (!b.razorpay_signature || !safeEqual(expected, b.razorpay_signature)) return json({ error: "Payment signature did not match" }, 400);
        const order = await razorpay(env, "GET", "/orders/" + encodeURIComponent(b.razorpay_order_id));
        if (!order.notes || order.notes.uid !== user.uid) return json({ error: "This payment belongs to another account" }, 403);
        const pass = await grant(env, order, b.razorpay_payment_id);
        return json({ ok: true, until: pass.until, plan: order.notes.plan });
      }
      if (req.method === "POST" && path === "/webhook") {
        const raw = await req.text();
        const sig = req.headers.get("X-Razorpay-Signature") || "";
        const expected = await hmacHex(env.RAZORPAY_WEBHOOK_SECRET, raw);
        if (!safeEqual(expected, sig)) return json({ error: "bad signature" }, 400);
        const ev = JSON.parse(raw);
        const pay = ev.payload && ev.payload.payment && ev.payload.payment.entity;
        if ((ev.event === "payment.captured" || ev.event === "order.paid") && pay && pay.order_id) {
          const order = await razorpay(env, "GET", "/orders/" + encodeURIComponent(pay.order_id));
          if (order.status === "paid" || pay.status === "captured") await grant(env, order, pay.id);
        }
        return json({ ok: true });
      }
      return json({ error: "Not found" }, 404);
    } catch (e) {
      return json({ error: e.message || "Server error" }, e.status || 500);
    }
  },
};

/* ---------- passes ---------- */
async function grant(env, order, paymentId) {
  const uid = order.notes && order.notes.uid, planId = order.notes && order.notes.plan, p = PLANS[planId];
  if (!uid || !p) throw httpErr(400, "Order has no student or plan");
  if (order.amount !== p.rupees * 100) throw httpErr(400, "Amount does not match the plan");
  const token = await googleToken(env);
  // 1. claim the payment id once (create fails if it already exists) so a payment is never counted twice
  const created = await fsCreate(env, token, "payments", paymentId, {
    uid: { stringValue: uid }, plan: { stringValue: planId }, orderId: { stringValue: order.id },
    amount: { integerValue: String(order.amount) }, at: { timestampValue: new Date().toISOString() },
  });
  const cur = await fsGet(env, token, "passes", uid);
  if (!created) return { until: cur && cur.fields && cur.fields.until ? cur.fields.until.timestampValue : null };
  // 2. extend from today, or from the current expiry if the pass is still running
  const now = Date.now();
  const curUntil = cur && cur.fields && cur.fields.until ? Date.parse(cur.fields.until.timestampValue) : 0;
  const until = new Date(Math.max(now, curUntil) + p.days * 86400000).toISOString();
  try {
    await fsPatch(env, token, "passes", uid, {
      until: { timestampValue: until }, plan: { stringValue: planId },
      lastPayment: { stringValue: paymentId }, email: { stringValue: (order.notes && order.notes.email) || "" },
      updatedAt: { timestampValue: new Date().toISOString() },
    });
  } catch (e) {
    await fsDelete(env, token, "payments", paymentId).catch(() => {}); // let a retry (or the webhook) try again
    throw e;
  }
  return { until };
}

/* ---------- Razorpay ---------- */
async function razorpay(env, method, path, body) {
  const r = await fetch("https://api.razorpay.com/v1" + path, {
    method, headers: { "Authorization": "Basic " + btoa(env.RAZORPAY_KEY_ID + ":" + env.RAZORPAY_KEY_SECRET), "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await r.json();
  if (!r.ok) throw httpErr(502, "Razorpay: " + ((j.error && j.error.description) || r.status));
  return j;
}
async function hmacHex(secret, msg) {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret || ""), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const s = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(msg));
  return [...new Uint8Array(s)].map(b => b.toString(16).padStart(2, "0")).join("");
}
function safeEqual(a, b) { if (a.length !== b.length) return false; let x = 0; for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i); return x === 0; }

/* ---------- Firebase ID token (who is paying) ---------- */
let jwksCache = null, jwksAt = 0;
async function verifyFirebaseToken(req, env) {
  const m = (req.headers.get("Authorization") || "").match(/^Bearer (.+)$/);
  if (!m) throw httpErr(401, "Please sign in first");
  const [h, p, s] = m[1].split(".");
  const header = JSON.parse(b64urlText(h)), payload = JSON.parse(b64urlText(p));
  const pid = env.FIREBASE_PROJECT_ID, now = Math.floor(Date.now() / 1000);
  if (payload.aud !== pid || payload.iss !== "https://securetoken.google.com/" + pid || payload.exp < now || !payload.sub) throw httpErr(401, "Sign-in not valid or expired, please sign in again");
  if (!jwksCache || Date.now() - jwksAt > 3600e3) {
    const r = await fetch("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com");
    jwksCache = (await r.json()).keys; jwksAt = Date.now();
  }
  const jwk = jwksCache.find(k => k.kid === header.kid);
  if (!jwk || header.alg !== "RS256") throw httpErr(401, "Unknown sign-in key");
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlBytes(s), new TextEncoder().encode(h + "." + p));
  if (!ok) throw httpErr(401, "Invalid sign-in");
  return { uid: payload.sub, email: payload.email || "" };
}

/* ---------- Firestore (service account) ---------- */
let gTok = null, gTokExp = 0;
async function googleToken(env) {
  if (gTok && Date.now() < gTokExp - 60e3) return gTok;
  const sa = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT);
  const now = Math.floor(Date.now() / 1000);
  const head = b64urlJson({ alg: "RS256", typ: "JWT" });
  const claim = b64urlJson({ iss: sa.client_email, scope: "https://www.googleapis.com/auth/datastore", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 });
  const pem = sa.private_key.replace(/-----[^-]+-----/g, "").replace(/\s+/g, "");
  const key = await crypto.subtle.importKey("pkcs8", Uint8Array.from(atob(pem), c => c.charCodeAt(0)), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(head + "." + claim)));
  const jwt = head + "." + claim + "." + b64urlFromBytes(sig);
  const r = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=" + jwt });
  const j = await r.json();
  if (!r.ok) throw httpErr(502, "Firebase login failed");
  gTok = j.access_token; gTokExp = Date.now() + j.expires_in * 1000;
  return gTok;
}
const fsBase = env => "https://firestore.googleapis.com/v1/projects/" + env.FIREBASE_PROJECT_ID + "/databases/(default)/documents/";
async function fsGet(env, token, col, id) {
  const r = await fetch(fsBase(env) + col + "/" + encodeURIComponent(id), { headers: { Authorization: "Bearer " + token } });
  if (r.status === 404) return null;
  if (!r.ok) throw httpErr(502, "Firestore read failed");
  return r.json();
}
async function fsCreate(env, token, col, id, fields) {
  const r = await fetch(fsBase(env) + col + "?documentId=" + encodeURIComponent(id), { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: JSON.stringify({ fields }) });
  if (r.status === 409) return false;
  if (!r.ok) throw httpErr(502, "Firestore write failed");
  return true;
}
async function fsPatch(env, token, col, id, fields) {
  const mask = Object.keys(fields).map(k => "updateMask.fieldPaths=" + k).join("&");
  const r = await fetch(fsBase(env) + col + "/" + encodeURIComponent(id) + "?" + mask, { method: "PATCH", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: JSON.stringify({ fields }) });
  if (!r.ok) throw httpErr(502, "Firestore write failed");
}

async function fsDelete(env, token, col, id) {
  await fetch(fsBase(env) + col + "/" + encodeURIComponent(id), { method: "DELETE", headers: { Authorization: "Bearer " + token } });
}

/* ---------- helpers ---------- */
function httpErr(status, message) { const e = new Error(message); e.status = status; return e; }
function b64urlBytes(s) { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return Uint8Array.from(atob(s), c => c.charCodeAt(0)); }
function b64urlText(s) { return new TextDecoder().decode(b64urlBytes(s)); }
function b64urlFromBytes(b) { let s = ""; b.forEach(x => s += String.fromCharCode(x)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function b64urlJson(o) { return b64urlFromBytes(new TextEncoder().encode(JSON.stringify(o))); }

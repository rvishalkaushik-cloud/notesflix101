/* Notesflix 101 Pass: plans, Razorpay checkout and pass status. Needs pay-config.js and the Firebase compat scripts. */
(function () {
  var C = window.NF_PAY || {};
  var on = !!(C.enabled && C.worker);
  var until = null, user = null, pendingNote = null, afterPay = null;
  function track(ev, p) { try { if (window.gtag) gtag("event", ev, p || {}); } catch (e) {} }
  function active() { return !!(until && until.getTime() > Date.now()); }
  function fmtDate(d) { return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- pass status from Firestore (students can read only their own pass) ---------- */
  function loadPass() {
    if (!on || !user || !window.firebase || !firebase.firestore) { until = null; paintMenu(); fire(); return; }
    firebase.firestore().collection("passes").doc(user.uid).get().then(function (d) {
      var u = d.exists && d.data().until; until = u && u.toDate ? u.toDate() : null; paintMenu(); fire();
    }).catch(function () { until = null; paintMenu(); fire(); });
  }
  function fire() { document.dispatchEvent(new CustomEvent("nf:pass", { detail: { active: active(), until: until } })); }

  /* ---------- styles + modal ---------- */
  var css = ".nfp-scrim{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.72);display:flex;align-items:flex-end;justify-content:center;padding:12px}" +
    "@media(min-width:640px){.nfp-scrim{align-items:center}}" +
    ".nfp-box{width:100%;max-width:440px;max-height:92vh;overflow:auto;background:#141414;color:#fff;border:1px solid rgba(255,255,255,.14);border-top:4px solid #e50914;border-radius:16px;padding:20px;font:16px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.6)}" +
    ".nfp-box h2{margin:0 0 4px;font-size:22px}.nfp-box p{margin:0 0 12px;color:#c9c9c9;font-size:14px}" +
    ".nfp-x{float:right;background:none;border:0;color:#bbb;font-size:26px;line-height:1;cursor:pointer;padding:0 4px}" +
    ".nfp-plan{display:flex;align-items:center;gap:12px;width:100%;margin:8px 0;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,.18);background:#1c1c1c;color:#fff;text-align:left;cursor:pointer;font:inherit}" +
    ".nfp-plan:hover,.nfp-plan:focus-visible{border-color:#e50914;outline:none}.nfp-plan.best{border-color:#ffd23f}" +
    ".nfp-plan b{font-size:17px}.nfp-plan small{display:block;color:#bdbdbd;font-size:13px}.nfp-plan .pr{margin-left:auto;font-size:22px;font-weight:800;white-space:nowrap}" +
    ".nfp-tag{display:inline-block;margin-left:6px;padding:1px 8px;border-radius:999px;background:#ffd23f;color:#111;font-size:11px;font-weight:800;vertical-align:middle}" +
    ".nfp-btn{display:block;width:100%;margin-top:10px;padding:13px;border:0;border-radius:10px;background:#e50914;color:#fff;font:700 16px system-ui,sans-serif;cursor:pointer;text-align:center;text-decoration:none}" +
    ".nfp-btn.ghost{background:transparent;border:1px solid rgba(255,255,255,.3)}" +
    ".nfp-msg{min-height:20px;margin-top:10px;font-size:14px;color:#ff8a80}.nfp-ok{color:#7be3a4}" +
    ".nfp-pts{margin:0 0 12px;padding-left:18px;color:#ddd;font-size:14px}.nfp-pts li{margin:2px 0}" +
    ".nfp-menu{margin:8px 0;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,.06);font-size:13px;color:#ddd}.nfp-menu b{color:#fff}";
  var scrim = null, box = null;
  function ensure() {
    if (scrim) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    scrim = document.createElement("div"); scrim.className = "nfp-scrim"; scrim.hidden = true;
    scrim.innerHTML = '<div class="nfp-box" role="dialog" aria-modal="true" aria-labelledby="nfpTitle"></div>';
    box = scrim.firstChild; document.body.appendChild(scrim);
    scrim.addEventListener("click", function (e) { if (e.target === scrim) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !scrim.hidden) close(); });
  }
  function close() { if (scrim) { scrim.hidden = true; document.body.style.overflow = ""; } }
  function show(html) { ensure(); box.innerHTML = '<button class="nfp-x" type="button" aria-label="Close">×</button>' + html; box.querySelector(".nfp-x").onclick = close; scrim.hidden = false; document.body.style.overflow = "hidden"; var f = box.querySelector(".nfp-plan,.nfp-btn"); if (f) f.focus(); }
  function msg(t, ok) { var m = box && box.querySelector(".nfp-msg"); if (m) { m.textContent = t; m.className = "nfp-msg" + (ok ? " nfp-ok" : ""); } }

  function openPlans(note, cb) {
    if (!on) return false;
    pendingNote = note || null; afterPay = cb || null;
    track("view_item_list", { item_list_id: "pass_plans", note_id: note ? note.id : "" });
    if (active()) { showActive(); return true; }
    var plans = (C.plans || []).map(function (p) {
      return '<button class="nfp-plan' + (p.best ? " best" : "") + '" type="button" data-plan="' + esc(p.id) + '"><span><b>' + esc(p.name) + "</b>" + (p.best ? '<span class="nfp-tag">BEST VALUE</span>' : "") + "<small>" + esc(p.note || "") + '</small></span><span class="pr">₹' + esc(p.rupees) + "</span></button>";
    }).join("");
    show('<h2 id="nfpTitle">Get the Notesflix Pass</h2>' +
      (note ? "<p>“" + esc(note.title || "This part") + "” is part of the Pass.</p>" : "<p>Unlock every part of every chapter.</p>") +
      '<ul class="nfp-pts"><li>All locked parts, all subjects and classes</li><li>New chapters added every week</li><li>Pay once, no auto-renewal</li></ul>' +
      (user ? plans + '<div class="nfp-msg" role="status"></div><p style="margin-top:10px;font-size:12px">Secure payment by Razorpay (UPI, cards, net banking). Signed in as ' + esc(user.email || "") + ".</p>"
            : '<p>Sign in with Google first, so the Pass is saved to your account on every device.</p><button class="nfp-btn" type="button" id="nfpSignin">Sign in with Google</button>'));
    box.querySelectorAll(".nfp-plan").forEach(function (b) { b.onclick = function () { buy(b.getAttribute("data-plan")); }; });
    var si = document.getElementById("nfpSignin");
    if (si) si.onclick = function () { close(); var a = document.getElementById("acct"); if (a) a.click(); else location.href = "login.html"; };
    return true;
  }
  function showActive() {
    show('<h2 id="nfpTitle">Your Pass is active ✅</h2><p>Valid till <b>' + fmtDate(until) + "</b>. Every locked part opens for you.</p>" +
      (pendingNote && afterPay ? '<button class="nfp-btn" type="button" id="nfpGo">Open “' + esc(pendingNote.title || "the note") + '” ▶</button>' : '<button class="nfp-btn" type="button" id="nfpGo">Start learning ▶</button>'));
    document.getElementById("nfpGo").onclick = function () { var cb = afterPay; close(); afterPay = null; if (cb) cb(); };
  }

  /* ---------- Razorpay ---------- */
  function loadCheckout() {
    return new Promise(function (res, rej) {
      if (window.Razorpay) return res();
      var s = document.createElement("script"); s.src = "https://checkout.razorpay.com/v1/checkout.js"; s.onload = res; s.onerror = function () { rej(new Error("Could not load the payment window. Check your internet and try again.")); };
      document.head.appendChild(s);
    });
  }
  function api(path, body) {
    return firebase.auth().currentUser.getIdToken().then(function (tok) {
      return fetch(C.worker.replace(/\/$/, "") + path, { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + tok }, body: JSON.stringify(body) });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || "Something went wrong"); return j; }); });
  }
  function buy(planId) {
    var plan = (C.plans || []).filter(function (p) { return p.id === planId; })[0];
    if (!plan || !user) return;
    box.querySelectorAll(".nfp-plan").forEach(function (b) { b.disabled = true; });
    msg("Opening secure payment…", true);
    var item = { item_id: plan.id, item_name: "Notesflix Pass " + plan.name, price: plan.rupees, quantity: 1 };
    track("begin_checkout", { currency: "INR", value: plan.rupees, items: [item] });
    Promise.all([api("/order", { plan: planId }), loadCheckout()]).then(function (r) {
      var o = r[0];
      var rz = new window.Razorpay({
        key: o.keyId, order_id: o.orderId, amount: o.amount, currency: o.currency,
        name: "Notesflix 101", description: "Notesflix Pass · " + o.name,
        prefill: { email: user.email || "", name: user.displayName || "" },
        theme: { color: "#e50914" },
        modal: { ondismiss: function () { box.querySelectorAll(".nfp-plan").forEach(function (b) { b.disabled = false; }); msg("Payment window closed. You can try again."); } },
        handler: function (resp) {
          msg("Payment received, activating your Pass…", true);
          api("/verify", resp).then(function (v) {
            until = new Date(v.until); paintMenu(); fire();
            track("purchase", { transaction_id: resp.razorpay_payment_id, currency: "INR", value: plan.rupees, items: [item] });
            showActive();
          }).catch(function (e) {
            msg("Payment done, but activation is taking a moment (" + e.message + "). Refresh this page in a minute; if it still shows locked, email support@notesflix101.com with your payment ID " + resp.razorpay_payment_id + ".");
          });
        }
      });
      rz.on("payment.failed", function (e) { msg("Payment failed: " + ((e.error && e.error.description) || "please try again") + "."); box.querySelectorAll(".nfp-plan").forEach(function (b) { b.disabled = false; }); });
      rz.open();
    }).catch(function (e) { msg(e.message); box.querySelectorAll(".nfp-plan").forEach(function (b) { b.disabled = false; }); });
  }

  /* ---------- account menu line ---------- */
  function paintMenu() {
    var menu = document.getElementById("acctMenu"); if (!menu || !on) return;
    var el = document.getElementById("nfpMenu");
    if (!el) { el = document.createElement("div"); el.id = "nfpMenu"; el.className = "nfp-menu"; var out = document.getElementById("acctOut"); menu.insertBefore(el, out || null); }
    if (!user) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = active() ? "Pass: <b>active</b> till " + fmtDate(until) : 'No Pass yet · <a href="#getpass" style="color:#ff6b6b;font-weight:700">Get Pass from ₹' + esc(((C.plans || [])[0] || {}).rupees || "") + "</a>";
  }

  /* ---------- wiring ---------- */
  function start() {
    if (!on || !window.firebase || !firebase.apps || !firebase.apps.length) return;
    firebase.auth().onAuthStateChanged(function (u) { user = u; loadPass(); });
    function fromHash() { if (location.hash === "#getpass") { openPlans(null, null); try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} } }
    window.addEventListener("hashchange", fromHash); setTimeout(fromHash, 400);
  }
  window.NFPay = { enabled: function () { return on; }, active: active, until: function () { return until; }, open: openPlans, close: close };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

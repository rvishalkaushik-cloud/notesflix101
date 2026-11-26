# Notesflix Pass: setup (one time, about 15 minutes)

Keep every secret inside Cloudflare, Razorpay and Firebase. Never paste a secret into chat, GitHub or the website files.

## 1. Razorpay (test mode first)
1. Razorpay Dashboard → switch to **Test Mode** (top bar).
2. Account & Settings → **API Keys** → Generate Test Key. Note the **Key ID** (starts `rzp_test_`, public) and keep the **Key Secret** open for step 3.
3. Settings → Payment Capture: keep **Automatic capture** on.

## 2. Firebase service account
1. Firebase console → ⚙ Project settings → **Service accounts** → *Generate new private key* → a `.json` file downloads.
2. Keep it private (it can write your database). You will paste its whole content into Cloudflare in step 3, then delete the file from Downloads.

## 3. Cloudflare Worker
1. Sign up free at dash.cloudflare.com → **Workers & Pages** → Create → *Create Worker* → name it `notesflix-pay` → Deploy.
2. *Edit code* → delete the sample → paste the whole of `_factory/payments/worker.js` → **Deploy**.
3. Worker → Settings → **Variables and Secrets** → add:
   | Name | Type | Value |
   |---|---|---|
   | RAZORPAY_KEY_ID | Text | your `rzp_test_…` key id |
   | FIREBASE_PROJECT_ID | Text | `notesflix101` |
   | ALLOWED_ORIGINS | Text | `https://notesflix101.com,https://www.notesflix101.com` |
   | RAZORPAY_KEY_SECRET | **Secret** | Razorpay key secret |
   | FIREBASE_SERVICE_ACCOUNT | **Secret** | the whole service-account JSON |
   | RAZORPAY_WEBHOOK_SECRET | **Secret** | any long random text you choose (also used in step 4) |
4. Copy the Worker URL (like `https://notesflix-pay.<you>.workers.dev`). Opening it in a browser should show the three plans.

## 4. Razorpay webhook (backup if a student closes the page early)
Razorpay → Settings → **Webhooks** → Add: URL = Worker URL + `/webhook`, Secret = same text as RAZORPAY_WEBHOOK_SECRET, events **payment.captured** and **order.paid**.

## 5. Firebase rules and keys
1. Firestore → **Rules** → replace with the repo's `firestore.rules` → Publish.
2. Firestore → Data → collection `vault`:
   - document `pass`, field `k` (string) = the current class password (opens every part for Pass holders).
   - document `free`, field `k` (string) = the free-parts key Claude gives you at switch-on (opens Part 1s for any signed-in student).

## 6. Switch on
Tell Claude the Worker URL. Claude sets `pay-config.js` → `enabled: true, worker: "<URL>"`, re-locks the free parts with the free key, tests a ₹37 **test** payment (Razorpay test UPI `success@razorpay`), then you swap to Live keys (step 1 with Live Mode + update the two Razorpay values in Cloudflare).

Prices: change both `PLANS` in `worker.js` and `plans` in `pay-config.js`.

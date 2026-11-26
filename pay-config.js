// Notesflix 101 payments settings. Edit only this file.
// enabled: false keeps every payment button hidden. Switch to true only after the Worker is set up and tested.
// worker: the URL of the Cloudflare Worker (for example https://notesflix-pay.YOURNAME.workers.dev).
// Prices shown here are for display; the Worker decides the real amount (keep both the same).
window.NF_PAY = {
  enabled: true,
  worker: "https://notesflix-pay.r-vishalkaushik.workers.dev",
  plans: [
    { id: "m1", name: "Monthly", rupees: 37, days: 30, note: "Try it for a month" },
    { id: "m6", name: "6 months", rupees: 179, days: 182, note: "≈ ₹30 a month" },
    { id: "y1", name: "Yearly", rupees: 299, days: 365, note: "≈ ₹25 a month · best value", best: true }
  ]
};

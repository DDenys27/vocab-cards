// Edit this file to set the real names and PINs for each person sharing this app.
//
// IMPORTANT — this is NOT real security. This app is plain static HTML/JS with
// no server, so anyone who opens the browser's dev tools (view source, network
// tab) can see this file and both data-account*.js files regardless of which
// PIN they enter. Treat this as a light "which list is mine" gate for two
// people who trust each other on a shared link — not as protection against
// someone who deliberately wants to see the other person's words.
//
// `dataFile` must point at a data-*.js file in this same folder (see
// data-account1.js / data-account2.js for the format).
//
// `translateTo` (optional) — when set, cards for this account carry a
// `translation` field in that language, and the "Add words" page asks Claude
// to include translations for any new words too. Meant for a lower-level
// learner (A1-A2) who needs more support than an English-only definition.

const ACCOUNTS = [
  { id: "account1", label: "Denys", pin: "1234", dataFile: "data-account1.js", level: "B2-C1" },
  { id: "account2", label: "Mariia", pin: "5678", dataFile: "data-account2.js", level: "A1-A2", translateTo: "Ukrainian" }
];

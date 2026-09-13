# Vocab Cards

A flashcard app for B2–C1 English vocabulary, styled like Quizlet's classic flip cards, for two people to use with their own separate word lists.

Live at: https://ddenys27.github.io/vocab-cards/

## Using it

Open `index.html` in a browser (double-click locally, or visit the published URL). First time, pick your profile and enter your PIN.

- Click the card (or press Space) to flip between word and details.
- On the back, click the underlined blank in the example sentence to reveal the hidden word.
- Click the speaker icon (or press **P**) to hear the word pronounced.
- Mark each card "Known ✓" or "Still learning" — progress is saved per browser (localStorage).
- Filter by status and by topic (All / Career / ...); shuffle the deck anytime.
- Scroll down for a searchable table of every word in your deck.
- Use **Practice** in the top bar to write your own sentences and have Claude check them.
- Use **Add words** in the top bar to add new words yourself, no Claude Code needed (see below).
- Click **Switch account** (top-right, bold) to log out of the current profile and pick again.

## Two profiles

This app is shared by two people, each with their own private-ish word list — currently **Denys** (B2-C1) and **Mariia** (A1-A2):

- **`accounts.js`** — edit this to set each person's real name, PIN, level (`B2-C1`, `A1-A2`, ...), and optionally `translateTo` (a language — when set, that profile's cards get a `translation` field, and Add Words asks Claude to include translations for new words too). Comments in the file explain the (limited) security model: this is a static site with no server, so the PIN is a "pick your own list" gate, not real security — anyone using dev tools can see both lists' data.
- **`data-account1.js`** / **`data-account2.js`** — each person's own seed deck, same format as before.
- **`auth.js`** — the shared lock-screen logic. You shouldn't need to touch this.

## Adding new words

Two ways to do this:

**1. In the app itself (Add words tab)** — paste raw notes as one block of text, and/or upload or paste (⌘V) a screenshot/photo of the word list, choose an existing **topic** or type a new one, then click **Generate cards**. Claude (via your own Anthropic API key, entered once under "API settings" — shared with the Practice page) reads it and proposes structured cards, all tagged with that topic; review the list, remove any mistakes, and click **Add N words to my deck**.

  Important limitation: these words are saved in **this browser's localStorage only**. They show up immediately on this device, but they are *not* written back into the `data-account*.js` files on GitHub — so they won't appear on your other devices or your partner's copy until you ask Claude (in a chat session) to fold them into the real file. Think of it as a personal scratch layer on top of the shared deck.

**2. Via Claude Code (permanent, syncs everywhere)** — tell Claude which profile a batch of words is for, and send a screenshot or the text list; it will append entries to the right `data-account*.js` file, commit, and push. This is the way to make new words permanent and visible to both profiles/devices.

Card format (either way):

```js
{
  word: "ambiguous",
  pos: "adjective",
  definition: "open to more than one interpretation; not having one obvious meaning",
  example: "The contract's wording was ____ enough to cause a dispute between the two companies.",
  synonyms: ["vague", "equivocal", "unclear", "ambiguity (n)"],
  topic: "Language & Communication",
  dateAdded: "2026-09-12"
}
```

`____` (4+ underscores) in the example marks the word to hide/reveal on the card back. `topic` powers the topic filter chips (All / Everyday Expressions / Health & Body / ...) — reuse an existing topic name across cards to group them, or invent a new one.

For an account with `translateTo` set (like Mariia's), add a `translation` field too — it shows as a bold highlighted line on the card back, in the word table, and as a practice hint.

Add an `icon: "someKey"` field to show a hand-drawn picture on the card front (great for lower-level learners) — `someKey` must match an entry in `icons.js`. These are hand-authored line icons, not something Claude generates automatically via Add Words, so a new word either reuses an existing icon key that fits, gets a new one you ask Claude to draw in a chat session, or is simply left without a picture (the card still works fine, it just won't show one).

## Files

- `index.html` — flashcards + word table
- `practice.html` — write-your-own-sentence practice, checked by Claude
- `add-words.html` — add new words yourself (text and/or screenshot), checked by Claude
- `styles.css` — shared design system for all pages
- `accounts.js` — profile names/PINs (edit this)
- `auth.js` — shared lock-screen + per-account data loading
- `words-store.js` — shared local "custom cards" storage used by Add words
- `icons.js` — hand-drawn line icons shown on cards that have an `icon` field
- `data-account1.js` / `data-account2.js` — each profile's seed word list

## Publishing (GitHub Pages)

Already set up at the link above. To redeploy: commit changes and push to `main` — GitHub Pages redeploys automatically within about a minute. All files in this folder need to stay in the repo together (they reference each other by relative path).

# Vocab Cards

A flashcard app for B2–C1 English vocabulary, styled like Quizlet's classic flip cards, for two people to use with their own separate word lists.

## Using it

Open `index.html` in a browser (double-click locally, or visit the published URL). First time, pick your profile and enter your PIN.

- Click the card (or press Space) to flip between word and details.
- On the back, click the underlined blank in the example sentence to reveal the hidden word.
- Click the speaker icon (or press **P**) to hear the word pronounced.
- Mark each card "Known ✓" or "Still learning" — progress is saved per browser (localStorage).
- Filter by status and by date-added; shuffle the deck anytime.
- Scroll down for a searchable table of every word in your deck.
- Use **Practice →** in the top bar to write your own sentences and have Claude check them (needs your own Anthropic API key — see the Practice page's "API settings").

## Two profiles

This app is shared by two people, each with their own private-ish word list:

- **`accounts.js`** — edit this to set each person's real name and PIN. Comments in the file explain the (limited) security model: this is a static site with no server, so the PIN is a "pick your own list" gate, not real security — anyone using dev tools can see both lists' data.
- **`data-account1.js`** / **`data-account2.js`** — each person's own deck, same format as before.
- **`auth.js`** — the shared lock-screen logic. You shouldn't need to touch this.
- Click **Switch** in the top bar to log out of the current profile and pick again (useful if you share a device).

## Adding new words

Tell Claude which profile a new batch of words is for, and send a screenshot of the list — it will append entries to the right `data-account*.js` file. Each card looks like:

```js
{
  word: "ambiguous",
  pos: "adjective",
  definition: "open to more than one interpretation; not having one obvious meaning",
  example: "The contract's wording was ____ enough to cause a dispute between the two companies.",
  synonyms: ["vague", "equivocal", "unclear", "ambiguity (n)"],
  dateAdded: "2026-09-12"
}
```

`____` (4+ underscores) in the example marks the word to hide/reveal on the card back.

## Publishing (GitHub Pages)

See the chat history for the drag-and-drop GitHub Pages setup steps — the short version: create a public repo, upload all the files in this folder, then enable Pages (Settings → Pages → Deploy from branch → main → / root). Every file here (`index.html`, `practice.html`, `styles.css`, `accounts.js`, `auth.js`, `data-account1.js`, `data-account2.js`) needs to be uploaded together.

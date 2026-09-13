// Vocabulary deck for ACCOUNT 2 (see accounts.js for the profile name/PIN).
//
// HOW TO ADD NEW WORDS (after a tutoring session):
// 1. Tell Claude which account this is for, and send a screenshot/photo of the word list.
// 2. Claude will append new entries to the VOCAB_DATA array below.
// 3. Just reopen/refresh index.html in your browser — nothing else to install.
//
// Card shape:
// {
//   word: "the headword",
//   pos: "noun | verb | adjective | adverb | phrase | idiom | ...",
//   definition: "clear, simple English definition",
//   example: "A full example sentence with the target word replaced by ____",
//   synonyms: ["optional", "related words or forms"],
//   dateAdded: "YYYY-MM-DD"   // the day this card was added — powers the date filter
// }

const VOCAB_DATA = [];

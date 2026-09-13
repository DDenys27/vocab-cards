// Vocabulary deck for ACCOUNT 2 (see accounts.js for the profile name/PIN).
// This account has `translateTo: "Ukrainian"` set in accounts.js, so cards
// here include a `translation` field for extra support at A1-A2 level.
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
//   translation: "Ukrainian translation of the word",
//   example: "A full example sentence with the target word replaced by ____",
//   synonyms: ["optional", "related words or forms"],
//   topic: "a topic name — powers the topic filter; reuse an existing one where it fits",
//   dateAdded: "YYYY-MM-DD"   // the day this card was added (kept for reference)
// }

const VOCAB_DATA = [
  {
    word: "doctor",
    pos: "noun",
    definition: "a person whose job is to treat sick people",
    translation: "лікар",
    example: "My sister wants to be a ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "nurse",
    pos: "noun",
    definition: "a person who takes care of sick people, often in a hospital",
    translation: "медсестра / медбрат",
    example: "The ____ gave me my medicine.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "actor",
    pos: "noun",
    definition: "a person who plays a role in a film, TV show, or play",
    translation: "актор / акторка",
    example: "He is a famous ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "police officer",
    pos: "noun",
    definition: "a person whose job is to make sure people follow the law",
    translation: "поліцейський / поліцейська",
    example: "The ____ stopped the car.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "shop assistant",
    pos: "noun",
    definition: "a person who helps customers in a shop",
    translation: "продавець / продавчиня",
    example: "The ____ helped me find a jacket.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "singer",
    pos: "noun",
    definition: "a person who sings, especially as a job",
    translation: "співак / співачка",
    example: "She is a very good ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "engineer",
    pos: "noun",
    definition: "a person who designs or builds machines, roads, or buildings",
    translation: "інженер / інженерка",
    example: "My father is an ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "lawyer",
    pos: "noun",
    definition: "a person whose job is to give legal advice or represent people in court",
    translation: "юрист / адвокат",
    example: "I need to talk to a ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "pilot",
    pos: "noun",
    definition: "a person who flies an airplane",
    translation: "пілот / пілотка",
    example: "The ____ landed the plane safely.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "politician",
    pos: "noun",
    definition: "a person who works in government or politics",
    translation: "політик / політикиня",
    example: "The ____ gave a speech.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "scientist",
    pos: "noun",
    definition: "a person who studies science and does research",
    translation: "науковець / науковиця",
    example: "The ____ works in a laboratory.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "writer",
    pos: "noun",
    definition: "a person who writes books, stories, or articles",
    translation: "письменник / письменниця",
    example: "She is a famous ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "digital designer",
    pos: "noun",
    definition: "a person who creates designs for websites, apps, or digital media",
    translation: "цифровий дизайнер / дизайнерка",
    example: "He works as a ____.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "retired",
    pos: "adjective",
    definition: "no longer working because of age",
    translation: "на пенсії",
    example: "My grandmother is ____ now.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "unemployed",
    pos: "adjective",
    definition: "without a job",
    translation: "безробітний / безробітна",
    example: "He has been ____ for three months.",
    synonyms: [],
    topic: "Career",
    dateAdded: "2026-09-13"
  }
];

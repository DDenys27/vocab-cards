// Vocabulary deck for ACCOUNT 1 (see accounts.js for the profile name/PIN).
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
//   topic: "a topic name — powers the topic filter; reuse an existing one where it fits",
//   dateAdded: "YYYY-MM-DD"   // the day this card was added (kept for reference)
// }

const VOCAB_DATA = [
  {
    word: "ambiguous",
    pos: "adjective",
    definition: "open to more than one interpretation; not having one obvious meaning",
    example: "The contract's wording was ____ enough to cause a dispute between the two companies.",
    synonyms: ["vague", "equivocal", "unclear", "ambiguity (n)"],
    topic: "Language & Communication",
    dateAdded: "2026-09-12"
  },
  {
    word: "to undermine",
    pos: "verb",
    definition: "to gradually weaken someone's confidence, authority, or a situation",
    example: "Constant criticism from her boss began ____ her confidence.",
    synonyms: ["weaken", "erode", "sabotage"],
    topic: "Work & Career",
    dateAdded: "2026-09-12"
  },
  {
    word: "a rule of thumb",
    pos: "phrase",
    definition: "a broadly accurate practical guide, not meant to be exact",
    example: "As ____, you should let bread dough rest for at least an hour.",
    synonyms: ["general guideline", "heuristic"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-12"
  },
  {
    word: "fortunately",
    pos: "adverb",
    definition: "used to say that something good happened, especially by chance",
    example: "____, I found my keys again before I even left the house.",
    synonyms: ["luckily"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-12"
  },
  {
    word: "no idea / no clue",
    pos: "phrase",
    definition: "to not know something at all",
    example: "I still have ____ where I left those keys. No clue!",
    synonyms: ["not have a clue", "no clue"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-12"
  },
  {
    word: "stuck",
    pos: "adjective",
    definition: "unable to move, escape, or continue; trapped somewhere or in a situation",
    example: "I got ____ in the elevator for twenty minutes yesterday.",
    synonyms: ["trapped", "jammed"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-12"
  },
  {
    word: "touch wood",
    pos: "idiom",
    definition: "said (often while touching something wooden) to avoid bad luck after mentioning something positive",
    example: "I haven't been sick all year — ____!",
    synonyms: ["knock on wood"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-12"
  },
  {
    word: "to spot",
    pos: "verb",
    definition: "to notice or see someone/something, especially something not easy to see",
    example: "She was quick ____ a small mistake in the report that everyone else had missed.",
    synonyms: ["notice", "catch sight of"],
    topic: "Language & Communication",
    dateAdded: "2026-09-12"
  },
  {
    word: "rash",
    pos: "noun",
    definition: "an area of red spots or patches on the skin, often caused by illness or an allergic reaction",
    example: "The new soap gave her an itchy ____ on her arms.",
    synonyms: [],
    topic: "Health & Body",
    dateAdded: "2026-09-12"
  },
  {
    word: "suffer from",
    pos: "verb phrase",
    definition: "to regularly experience an illness, pain, or other negative condition",
    example: "He tends to ____ hay fever every spring since he was a child.",
    synonyms: [],
    topic: "Health & Body",
    dateAdded: "2026-09-12"
  },
  {
    word: "medication",
    pos: "noun",
    definition: "medicine used to treat or prevent an illness",
    example: "The doctor prescribed ____ to help control her blood pressure.",
    synonyms: ["medicine", "meds (informal)"],
    topic: "Health & Body",
    dateAdded: "2026-09-12"
  },
  {
    word: "allergic",
    pos: "adjective",
    definition: "having a medical condition that causes an unpleasant reaction (immune system) to a particular substance",
    example: "I am ____ to pollen, so spring is a difficult season for me.",
    synonyms: ["allergy (n)"],
    topic: "Health & Body",
    dateAdded: "2026-09-12"
  },
  {
    word: "intolerant",
    pos: "adjective",
    definition: "unable to eat or drink a particular substance without an unpleasant physical reaction, usually digestive rather than immune",
    example: "I'm ____ to raw cow's milk, so I drink oat milk instead.",
    synonyms: ["intolerance (n)", "lactose intolerant"],
    topic: "Health & Body",
    dateAdded: "2026-09-12"
  },
  {
    word: "make up one's mind",
    pos: "phrase",
    definition: "to decide something firmly, especially after thinking about it for a while",
    example: "It took her a whole week to ____ about which university to attend.",
    synonyms: ["decide", "reach a decision"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-13"
  },
  {
    word: "collate",
    pos: "verb",
    definition: "to collect and combine documents or information in a proper, organized order",
    example: "She had to ____ all the survey responses before the meeting.",
    synonyms: ["compile", "assemble"],
    topic: "Work & Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "redundant",
    pos: "adjective",
    definition: "no longer needed for a job, and therefore dismissed by an employer (UK usage)",
    example: "The company had to make fifty workers ____ after losing its biggest client.",
    synonyms: ["laid off", "out of work"],
    topic: "Work & Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "unwind",
    pos: "verb",
    definition: "to relax and stop feeling tense, especially after work or stress",
    example: "I like to ____ with a good book after a long day at work.",
    synonyms: ["relax", "de-stress", "chill out (informal)"],
    topic: "Feelings & Relationships",
    dateAdded: "2026-09-13"
  },
  {
    word: "put up with",
    pos: "phrasal verb",
    definition: "to tolerate something unpleasant without complaining",
    example: "I don't know how she can ____ his constant complaining.",
    synonyms: ["tolerate", "endure", "stand (informal)"],
    topic: "Feelings & Relationships",
    dateAdded: "2026-09-13"
  },
  {
    word: "bargain",
    pos: "verb",
    definition: "to negotiate the terms of a deal, often to get a lower price",
    example: "He managed to ____ the price down by twenty percent.",
    synonyms: ["negotiate", "haggle"],
    topic: "Work & Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "assign",
    pos: "verb",
    definition: "to officially give someone a task or responsibility",
    example: "The manager decided to ____ the new project to Sarah.",
    synonyms: ["allocate", "designate"],
    topic: "Work & Career",
    dateAdded: "2026-09-13"
  },
  {
    word: "cross paths",
    pos: "idiom",
    definition: "to meet someone, often unexpectedly",
    example: "We were destined to ____ again years later at a conference in Berlin.",
    synonyms: ["run into", "bump into"],
    topic: "Feelings & Relationships",
    dateAdded: "2026-09-13"
  },
  {
    word: "set off",
    pos: "phrasal verb",
    definition: "to start a journey or trip",
    example: "We ____ for the airport at 5 a.m. to avoid traffic.",
    synonyms: ["set out", "depart"],
    topic: "Everyday Expressions",
    dateAdded: "2026-09-13"
  },
  {
    word: "brag about",
    pos: "verb phrase",
    definition: "to talk too proudly about your own achievements or possessions",
    example: "He loves to ____ his new car to everyone at work.",
    synonyms: ["boast about", "show off"],
    topic: "Feelings & Relationships",
    dateAdded: "2026-09-13"
  }
];

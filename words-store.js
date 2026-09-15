// Shared helpers for merging each account's locally-added words (from the
// "Add new words" tab) with that account's seed deck loaded from
// data-account*.js. Custom cards live in localStorage, per account, per
// browser — they do NOT sync across devices or get written back into the
// data-account*.js files on GitHub. See add-words.html for the caveat shown
// to the user.
function vocabCustomKey(accountId){
  return "vocabapp_custom_cards_" + accountId;
}

function vocabGetCustomCards(accountId){
  if(!accountId) return [];
  try{
    const raw = localStorage.getItem(vocabCustomKey(accountId));
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}

function vocabSaveCustomCards(accountId, cards){
  if(!accountId) return;
  try{
    localStorage.setItem(vocabCustomKey(accountId), JSON.stringify(cards));
  }catch(e){}
}

function vocabAddCustomCards(accountId, newCards){
  const existing = vocabGetCustomCards(accountId);
  vocabSaveCustomCards(accountId, existing.concat(newCards));
}

// Edit overrides let you rewrite a card's definition/example in place —
// for a seed word (from data-account*.js) or a custom one — without
// touching the underlying files. Per-account, per-browser localStorage,
// same as everything else in this file: it doesn't sync to other devices
// or get written back to GitHub.
function vocabOverrideKey(accountId){
  return "vocabapp_overrides_" + accountId;
}

function vocabGetOverrides(accountId){
  if(!accountId) return {};
  try{
    const raw = localStorage.getItem(vocabOverrideKey(accountId));
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function vocabGetOverride(accountId, word){
  return vocabGetOverrides(accountId)[word] || null;
}

function vocabSetOverride(accountId, word, fields){
  if(!accountId) return;
  const all = vocabGetOverrides(accountId);
  all[word] = fields;
  try{
    localStorage.setItem(vocabOverrideKey(accountId), JSON.stringify(all));
  }catch(e){}
}

function vocabClearOverride(accountId, word){
  if(!accountId) return;
  const all = vocabGetOverrides(accountId);
  delete all[word];
  try{
    localStorage.setItem(vocabOverrideKey(accountId), JSON.stringify(all));
  }catch(e){}
}

// seedArray: the VOCAB_DATA loaded from data-account*.js (never mutated —
// it's declared with `const` in that file, so callers must use the
// returned merged array instead of assigning back into VOCAB_DATA).
// Applies custom cards, then any edit overrides, on top of the seed deck.
function vocabMergedDeck(seedArray, accountId){
  const merged = (seedArray || []).concat(vocabGetCustomCards(accountId));
  const overrides = vocabGetOverrides(accountId);
  return merged.map(c => overrides[c.word] ? { ...c, ...overrides[c.word] } : c);
}

// Pinned words are a per-account, per-browser overlay (localStorage), not a
// change to the card's real `topic` field. A pinned card keeps showing under
// its own topic AND also shows up under the virtual "Pinned" filter — it's
// duplicated into that view, not moved out of its original topic.
function vocabPinnedKey(accountId){
  return "vocabapp_pinned_" + accountId;
}

function vocabGetPinnedSet(accountId){
  if(!accountId) return {};
  try{
    const raw = localStorage.getItem(vocabPinnedKey(accountId));
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    return {};
  }
}

function vocabIsPinned(accountId, word){
  return !!vocabGetPinnedSet(accountId)[word];
}

function vocabSetPinned(accountId, word, pinned){
  if(!accountId) return;
  const set = vocabGetPinnedSet(accountId);
  if(pinned) set[word] = true;
  else delete set[word];
  try{
    localStorage.setItem(vocabPinnedKey(accountId), JSON.stringify(set));
  }catch(e){}
}

function vocabTogglePinned(accountId, word){
  const now = !vocabIsPinned(accountId, word);
  vocabSetPinned(accountId, word, now);
  return now;
}

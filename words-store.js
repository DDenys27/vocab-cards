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

// seedArray: the VOCAB_DATA loaded from data-account*.js (never mutated —
// it's declared with `const` in that file, so callers must use the
// returned merged array instead of assigning back into VOCAB_DATA).
function vocabMergedDeck(seedArray, accountId){
  return (seedArray || []).concat(vocabGetCustomCards(accountId));
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

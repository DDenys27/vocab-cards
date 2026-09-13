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

// Shared profile lock + per-account data loader for index.html and practice.html.
// See accounts.js for the profile list and the security caveat.
(function(){
  const STORAGE_KEY = "vocabapp_active_account";

  function getAccount(id){
    return (typeof ACCOUNTS !== "undefined" ? ACCOUNTS : []).find(a => a.id === id) || null;
  }

  function loadDataFile(account){
    const existing = document.getElementById("vocabDataScript");
    if(existing) existing.remove();
    const script = document.createElement("script");
    script.id = "vocabDataScript";
    script.src = account.dataFile;
    script.onload = () => window.dispatchEvent(new CustomEvent("vocabdata-ready", { detail: account }));
    script.onerror = () => alert("Could not load the word list for this profile (" + account.dataFile + ").");
    document.body.appendChild(script);
  }

  function showLock(){
    const overlay = document.createElement("div");
    overlay.id = "lockOverlay";
    overlay.innerHTML = `
      <div class="lock-card">
        <div class="lock-title">🔒 Who's using this?</div>
        <div class="lock-profiles" id="lockProfiles"></div>
        <input type="password" id="lockPin" placeholder="PIN" inputmode="numeric" autocomplete="off">
        <button class="primary-btn" id="lockSubmit" style="width:100%;margin-top:12px;">Unlock</button>
        <div class="lock-error" id="lockError" hidden>Wrong PIN — try again.</div>
      </div>
    `;
    document.body.prepend(overlay);

    const accounts = typeof ACCOUNTS !== "undefined" ? ACCOUNTS : [];
    const profilesEl = document.getElementById("lockProfiles");
    let selectedId = accounts.length ? accounts[0].id : null;

    accounts.forEach((acc, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip-btn" + (i === 0 ? " active" : "");
      btn.textContent = acc.label;
      btn.addEventListener("click", () => {
        selectedId = acc.id;
        profilesEl.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("lockError").hidden = true;
      });
      profilesEl.appendChild(btn);
    });

    const pinInput = document.getElementById("lockPin");
    function tryUnlock(){
      const account = getAccount(selectedId);
      if(account && account.pin === pinInput.value.trim()){
        try{ localStorage.setItem(STORAGE_KEY, account.id); }catch(e){}
        overlay.remove();
        loadDataFile(account);
      } else {
        document.getElementById("lockError").hidden = false;
      }
    }
    document.getElementById("lockSubmit").addEventListener("click", tryUnlock);
    pinInput.addEventListener("keydown", e => { if(e.key === "Enter") tryUnlock(); });
    pinInput.focus();
  }

  window.switchProfile = function(){
    try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
    location.reload();
  };

  window.currentAccountLabel = function(){
    const id = (function(){ try{ return localStorage.getItem(STORAGE_KEY); }catch(e){ return null; } })();
    const acc = id ? getAccount(id) : null;
    return acc ? acc.label : "";
  };

  const savedId = (function(){ try{ return localStorage.getItem(STORAGE_KEY); }catch(e){ return null; } })();
  const savedAccount = savedId ? getAccount(savedId) : null;

  if(savedAccount){
    loadDataFile(savedAccount);
  } else {
    showLock();
  }
})();

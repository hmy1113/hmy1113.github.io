(function(){
  const KEY = "hmy-lab-lang";
  const saved = localStorage.getItem(KEY);
  const initial = saved === "ko" || saved === "en" ? saved : "en";
  function setLang(lang){
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
    localStorage.setItem(KEY, lang);
    document.querySelectorAll("[data-lang-button]").forEach(btn=>{
      const active = btn.dataset.langButton === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  window.setLabLang = setLang;
  document.addEventListener("DOMContentLoaded", ()=>{
    setLang(initial);
    document.querySelectorAll("[data-lang-button]").forEach(btn=>{
      btn.addEventListener("click", ()=>setLang(btn.dataset.langButton));
    });
  });
})();

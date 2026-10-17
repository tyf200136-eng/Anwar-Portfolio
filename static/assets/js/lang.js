/* lang.js — يحدد اللغة والاتجاه قبل رسم الصفحة (يُحمَّل في <head>)
   الأولوية: ?lang=en في الرابط ← آخر لغة اختارها الزائر ← العربية */
(function () {
  var DEFAULT_LANG = "ar";
  var html = document.documentElement, lang = DEFAULT_LANG;
  try {
    var q = new URLSearchParams(location.search).get("lang");
    var saved = localStorage.getItem("lang");
    lang = q === "en" || q === "ar" ? q : saved === "en" || saved === "ar" ? saved : DEFAULT_LANG;
    localStorage.setItem("lang", lang);
  } catch (e) { /* localStorage غير متاح */ }
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) html.classList.add("js-motion");
})();

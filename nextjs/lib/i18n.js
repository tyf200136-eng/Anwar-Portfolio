// أدوات اللغة والروابط
export const locales = ["ar", "en"];
export const defaultLocale = "ar";
export const isLocale = (l) => locales.includes(l);
export const dirOf = (l) => (l === "ar" ? "rtl" : "ltr");
export const otherLocale = (l) => (l === "ar" ? "en" : "ar");

// يختار النص حسب اللغة: { ar, en } ← النص المناسب
export function tr(v, lang) {
  if (v && typeof v === "object" && ("ar" in v || "en" in v)) return v[lang] ?? v.ar;
  return v ?? "";
}

// روابط الصفحات
export function pagePath(lang, page) {
  const map = {
    home: `/${lang}`,
    work: `/${lang}/work`,
    about: `/${lang}/about`,
    contact: `/${lang}/contact`,
    services: `/${lang}#services`
  };
  return map[page] ?? `/${lang}`;
}
export const casePath = (lang, slug) => `/${lang}/work/${slug}`;

// مسارات الصور في content/site.js مكتوبة "assets/img/…" وتُخدم من مجلد public
export function src(p) {
  if (!p) return p;
  return /^(https?:)?\//.test(p) ? p : "/" + p;
}

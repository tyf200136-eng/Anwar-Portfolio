# نسخة HTML / CSS / JS

## التشغيل
افتح `index.html` في المتصفح مباشرة. للتعديل المريح استخدم VS Code مع إضافة **Live Server** (تحدّث الصفحة تلقائياً عند كل حفظ).

## الملفات
```
index.html  work.html  case.html  about.html  contact.html   ← الصفحات (لا تحتاج تعديلها)
assets/
  js/content.js   ← كل النصوص والصور (عدّل هنا)
  css/style.css   ← الألوان والمقاسات والتصميم
  js/motion.js    ← الحركات
  js/render.js    ← يبني الصفحات من content.js
  js/lang.js      ← اللغة الافتراضية
  img/            ← الصور
  fonts/          ← خط Readex Pro
  vendor/         ← GSAP و Swiper
```

- صفحة المشروع تُفتح بالرابط `case.html?slug=اسم-المشروع`.
- اللغة تُحفظ في متصفح الزائر، ويمكن فرضها في الرابط: `index.html?lang=en`.
- كل صفحة HTML فيها `<body data-page="…">`، و`render.js` يرسم محتواها حسب هذا الاسم.

راجع `README.md` في المجلد الرئيسي لشرح تعديل المحتوى والصور والنشر.

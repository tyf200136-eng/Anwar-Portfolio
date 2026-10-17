# نسخة Next.js

## التشغيل
تحتاج [Node.js](https://nodejs.org) إصدار 20.9 أو أحدث.

```bash
npm install      # مرة واحدة
npm run dev      # افتح http://localhost:3000
npm run build    # للتأكد أن كل شيء جاهز للنشر
```

## الملفات
```
content/site.js            ← كل النصوص والصور (عدّل هنا)
app/style.css              ← الألوان والمقاسات والتصميم
lib/motion.js              ← الحركات
app/[lang]/page.jsx        ← الصفحة الرئيسية
app/[lang]/work/…          ← الأعمال + صفحة كل مشروع
app/[lang]/about/…         ← من أنا
app/[lang]/contact/…       ← تواصل
components/                ← الهيدر والفوتر والمكوّنات المشتركة
public/assets/img/         ← الصور
```

- الروابط: `/ar` و`/en`، وصفحة المشروع `/ar/work/اسم-المشروع`.
- كل صفحات المشاريع تُبنى تلقائياً من `content/site.js`. أضف مشروعاً هناك وستظهر صفحته.
- `components/MotionRoot.jsx` يشغّل الحركات بعد كل انتقال بين الصفحات وينظفها.

## النشر على Vercel
ارفع المجلد على GitHub، ثم في vercel.com اختر **Add New → Project** واختر المستودع. لا يحتاج أي إعداد إضافي.

راجع `README.md` في المجلد الرئيسي لشرح تعديل المحتوى والصور.

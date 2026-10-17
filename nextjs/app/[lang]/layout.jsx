// القالب الرئيسي: يحدد اللغة والاتجاه ويضيف الهيدر والفوتر والحركات
import { notFound } from "next/navigation";
import "swiper/css";
import "../style.css";
import SITE from "@/content/site";
import { locales, isLocale, dirOf, tr } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const name = tr(SITE.brand.name, lang);
  return {
    title: { default: `${name} — ${tr(SITE.brand.role, lang)}`, template: `%s — ${name}` },
    description: tr(SITE.home.tagline, lang),
    icons: { icon: "/assets/img/favicon.svg" },
    alternates: { languages: { ar: "/ar", en: "/en" } }
  };
}

export const viewport = { themeColor: "#26235c" };

// يضيف js-motion قبل ظهور الصفحة حتى لا تومض العناصر قبل الحركة
const motionFlag = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("js-motion")`;

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} dir={dirOf(lang)} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
        <link rel="preload" href="/assets/fonts/readex-pro-arabic-600-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <MotionRoot />
      </body>
    </html>
  );
}

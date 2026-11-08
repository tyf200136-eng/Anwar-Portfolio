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
  const share = tr(SITE.brand.shareTitle, lang);
  const description = tr(SITE.home.tagline, lang);
  const site = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return {
    metadataBase: new URL(site ? `https://${site}` : "http://localhost:3000"),
    title: { default: share, template: `%s — ${name}` },
    description,
    icons: { icon: "/assets/img/favicon.svg", apple: "/assets/img/apple-icon.png" },
    alternates: { languages: { ar: "/ar", en: "/en" } },
    openGraph: {
      type: "website",
      siteName: name,
      title: share,
      description,
      locale: lang === "ar" ? "ar_SA" : "en_US",
      images: [{ url: "/assets/img/og.png", width: 1200, height: 630, alt: share }]
    },
    twitter: { card: "summary_large_image", title: share, description, images: ["/assets/img/og.png"] }
  };
}

export const viewport = { themeColor: "#f3efe8" };

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

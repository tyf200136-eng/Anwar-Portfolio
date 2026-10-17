"use client";
// الهيدر + القائمة المنبثقة (التفاعل نفسه في lib/motion.js)
import Link from "next/link";
import { usePathname } from "next/navigation";
import SITE from "@/content/site";
import { tr, pagePath, otherLocale } from "@/lib/i18n";
import { Btn } from "./ui";

export default function Header({ lang }) {
  const pathname = usePathname() || `/${lang}`;
  const t = (v) => tr(v, lang);
  const other = otherLocale(lang);
  // رابط نفس الصفحة باللغة الأخرى (تحميل كامل للصفحة حتى يتغير الاتجاه بشكل نظيف)
  const langHref = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${other}`);
  const [first, ...rest] = t(SITE.brand.name).split(" ");
  const isActive = (page) => page !== "services" && pathname.startsWith(pagePath(lang, page));

  return (
    <>
      <a className="skip-link" href="#main">{t(SITE.ui.skip)}</a>
      <header className="hdr">
        <div className="hdr__in wrap">
          <Link className="hdr__logo" href={pagePath(lang, "home")}>
            {first}{rest.length ? <> <span>{rest.join(" ")}</span></> : null}
          </Link>
          <nav className="hdr__nav" aria-label={t(SITE.ui.menu)}>
            <div className="hdr__menu" data-nav="">
              <span className="hdr__ind" data-nav-ind="" aria-hidden="true" />
              <ul>
                {SITE.nav.map((n) => (
                  <li key={n.page}>
                    <Link href={pagePath(lang, n.page)} className={isActive(n.page) ? "is-active" : undefined} aria-current={isActive(n.page) ? "page" : undefined}>
                      {t(n.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="hdr__actions">
            <a className="hdr__lang" href={langHref} hrefLang={other} lang={other}>{t(SITE.ui.langSwitch)}</a>
            <Btn href={pagePath(lang, "contact")} className="hdr__cta">{t(SITE.ui.startProject)}</Btn>
            <button className="menu-btn" type="button" data-menu-btn="" aria-expanded="false" aria-controls="ov"
              data-label-open={t(SITE.ui.menu)} data-label-close={t(SITE.ui.close)}>
              {t(SITE.ui.menu)}
            </button>
          </div>
        </div>
      </header>

      <div className="ov" id="ov" data-ov="" inert="" aria-hidden="true">
        <div className="ov__outer">
          <div className="ov__inner">
            <nav className="ov__nav">
              <ul>
                <li><Link href={pagePath(lang, "home")}>{t(SITE.ui.home)}</Link></li>
                {SITE.nav.map((n) => <li key={n.page}><Link href={pagePath(lang, n.page)}>{t(n.label)}</Link></li>)}
              </ul>
            </nav>
            <div className="ov__extra">
              <Link className="chip" href={pagePath(lang, "contact")}>{t(SITE.ui.startProject)}</Link>
              <a className="chip" href={langHref} lang={other}>{t(SITE.ui.langSwitch)}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

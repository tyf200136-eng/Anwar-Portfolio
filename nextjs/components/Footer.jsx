// الفوتر
import Link from "next/link";
import SITE from "@/content/site";
import { tr, pagePath, otherLocale } from "@/lib/i18n";
import { Shape } from "./ui";

export default function Footer({ lang }) {
  const t = (v) => tr(v, lang);
  const b = SITE.brand;
  const other = otherLocale(lang);
  const contactLabel = SITE.nav.find((n) => n.page === "contact")?.label;

  return (
    <footer className="ftr">
      <div className="tiles">
        {SITE.services.map((x) => (
          <Link key={x.slug} className="tile" href={`${pagePath(lang, "work")}?filter=${x.slug}`} style={{ "--bg": x.bg, "--fg": x.fg }}>
            <Shape name={x.icon} className="tile__icon" />
            <span className="tile__title">{t(x.title)}</span>
          </Link>
        ))}
      </div>

      <div className="wrap ftr__grid">
        <div>
          <div className="ftr__brand">{t(b.name)}</div>
        </div>
        <div className="ftr__col">
          <h3>{t(SITE.ui.menu)}</h3>
          <ul>
            <li><Link href={pagePath(lang, "home")}>{t(SITE.ui.home)}</Link></li>
            {SITE.nav.map((n) => <li key={n.page}><Link href={pagePath(lang, n.page)}>{t(n.label)}</Link></li>)}
          </ul>
        </div>
        <div className="ftr__col">
          <h3>{t(contactLabel)}</h3>
          <ul>
            <li><a href={`mailto:${b.email}`} dir="ltr">{b.email}</a></li>
            <li><a href={`tel:${b.phone.replace(/\s/g, "")}`} dir="ltr">{b.phone}</a></li>
            <li>{t(b.city)}</li>
          </ul>
          <div className="socials" style={{ marginTop: "1.25rem" }}>
            {b.socials.map((x) => <a key={x.label} href={x.url} target="_blank" rel="noopener">{x.label}</a>)}
          </div>
        </div>
      </div>

      <div className="wrap ftr__bottom">
        <span>© {new Date().getFullYear()} {t(b.name)}. {t(SITE.ui.rights)}</span>
        <a href={`/${other}`} lang={other}>{t(SITE.ui.langSwitch)}</a>
      </div>
    </footer>
  );
}

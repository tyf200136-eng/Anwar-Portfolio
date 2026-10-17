// مكوّنات الواجهة المشتركة بين الصفحات
import Link from "next/link";
import SITE from "@/content/site";
import { tr, src, pagePath, casePath } from "@/lib/i18n";

/* ---------- أيقونات ---------- */
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
export const IconArrow = () => (
  <svg className="ico ico--flip" viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconBack = () => (
  <svg className="ico ico--flip" viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const IconDiag = () => (
  <svg className="ico ico--flip" viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const IconDown = () => (
  <svg className="ico" viewBox="0 0 24 24" {...stroke} aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const IconQuote = () => (
  <svg className="quote__mark" viewBox="0 0 64 48" fill="currentColor" aria-hidden="true">
    <path d="M0 48V28C0 12 9 2 24 0l2 7c-8 2-12 8-12 15h12v26H0Zm38 0V28C38 12 47 2 62 0l2 7c-8 2-12 8-12 15h12v26H38Z" />
  </svg>
);

const SHAPES = {
  circle: <circle cx="24" cy="24" r="22" />,
  square: <rect x="3" y="3" width="42" height="42" rx="6" />,
  arch: <path d="M4 46V24a20 20 0 0 1 40 0v22Z" />,
  triangle: <path d="M24 3 46 45H2Z" />,
  wave: (<><path d="M2 30c6-12 12-12 18 0s12 12 18 0 8-8 8-8v24H2Z" /><circle cx="24" cy="12" r="8" /></>)
};
export const Shape = ({ name, className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">{SHAPES[name] || SHAPES.circle}</svg>
);

// زهرة الـ hover: دائرة + 12 دائرة صغيرة حولها
const BLOB_DOTS = Array.from({ length: 12 }, (_, i) => {
  const a = (i / 12) * Math.PI * 2;
  return [+(50 + 39 * Math.cos(a)).toFixed(2), +(50 + 39 * Math.sin(a)).toFixed(2)];
});
const Blob = () => (
  <svg className="blob" viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="40" />
    {BLOB_DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="11" />)}
  </svg>
);

// نص دائري يدور
export function Ring({ id, text, className, r = 82 }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs><path id={id} d={`M100,100 m-${r},0 a${r},${r} 0 1,1 ${2 * r},0 a${r},${r} 0 1,1 -${2 * r},0`} /></defs>
      <text><textPath href={`#${id}`}>{text}</textPath></text>
    </svg>
  );
}

/* ---------- عناصر ---------- */
export function Media({ path, alt = "", className = "", ...rest }) {
  const s = src(path);
  return (
    <div className={`media ${className}`.trim()} {...rest}>
      {/\.(mp4|webm)$/i.test(s || "")
        ? <video src={s} autoPlay muted loop playsInline preload="metadata" />
        : <img src={s} alt={alt} loading="lazy" decoding="async" />}
    </div>
  );
}

export function Btn({ href, children, className = "", external = false }) {
  const inner = (<><span className="btn__c btn__c--a"><IconArrow /></span><span className="btn__l">{children}</span><span className="btn__c btn__c--b"><IconArrow /></span></>);
  if (external) return <a className={`btn ${className}`.trim()} href={href}>{inner}</a>;
  return <Link className={`btn ${className}`.trim()} href={href}>{inner}</Link>;
}

export function Follow({ id, lang }) {
  return (
    <div className="follow" aria-hidden="true">
      <div className="follow__in">
        <div className="follow__ring"><Ring id={id} text={tr(SITE.ui.viewCase, lang)} r={84} /></div>
        <div className="follow__blob"><Blob /><IconDiag /></div>
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, lang }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{tr(eyebrow, lang)}</span>
      <h2>{tr(title, lang)}</h2>
    </div>
  );
}

const svcBySlug = (slug) => SITE.services.find((x) => x.slug === slug);

export function CaseCard({ c, i, lang }) {
  return (
    <Link className={`card${i % 2 ? " is-even" : ""}`} href={casePath(lang, c.slug)} data-follow="" data-tags={c.services.join(" ")}>
      <Media className="card__media" path={c.video || c.cover} alt={tr(c.title, lang)} />
      <Follow id={`ring-card-${c.slug}`} lang={lang} />
      <h3 className="card__title">{tr(c.title, lang)}</h3>
      <p className="card__cat">{tr(c.category, lang)}</p>
      <ul className="card__tags">
        {c.services.map((sl) => {
          const x = svcBySlug(sl);
          return x ? <li key={sl} className="chip"><Shape name={x.icon} className="ico" />{tr(x.title, lang)}</li> : null;
        })}
      </ul>
    </Link>
  );
}

export function ServiceCard({ x, lang }) {
  return (
    <article className="svc" style={{ "--bg": x.bg, "--fg": x.fg }}>
      <div className="svc__top"><Shape name={x.icon} className="svc__icon" /><h3 className="svc__title">{tr(x.title, lang)}</h3></div>
      <div className="svc__bottom">
        <div className="svc__text">
          <p>{tr(x.text, lang)}</p>
          <Link className="link-arrow" href={`${pagePath(lang, "work")}?filter=${x.slug}`}>{tr(SITE.ui.more, lang)}<IconDiag /></Link>
        </div>
        <ul className="svc__tags">{x.tags.map((g, i) => <li key={i} className="chip chip--line">{tr(g, lang)}</li>)}</ul>
      </div>
    </article>
  );
}

export function StepCard({ x, lang }) {
  return (
    <article className="svc" style={{ "--bg": x.bg, "--fg": x.fg }}>
      <div className="svc__top"><h3 className="svc__title">{tr(x.title, lang)}</h3></div>
      <div className="svc__bottom"><div className="svc__text"><p>{tr(x.text, lang)}</p></div></div>
    </article>
  );
}

export function Marquee({ lang }) {
  const half = Math.ceil(SITE.clients.length / 2);
  const Row = ({ list, reverse }) => (
    <div className="mq" data-marquee="" {...(reverse ? { "data-reverse": "" } : {})}>
      <div className="mq__track">
        <ul className="mq__group">
          {list.map((c) => <li key={c.name} className="mq__item"><img src={src(c.logo)} alt={c.name} loading="lazy" /></li>)}
        </ul>
      </div>
    </div>
  );
  return (
    <section className="section">
      <div className="wrap"><SectionHead eyebrow={SITE.home.clientsEyebrow} title={SITE.home.clientsTitle} lang={lang} /></div>
      <Row list={SITE.clients.slice(0, half)} />
      <Row list={SITE.clients.slice(half)} reverse />
    </section>
  );
}

export function Cta({ lang }) {
  const h = SITE.home;
  return (
    <section className="section wrap">
      <div className="cta">
        <span className="cta__deco" aria-hidden="true" />
        <Media className="cta__media" path={h.ctaImage} />
        <div className="cta__text">
          <h2>{tr(h.ctaTitle, lang)}</h2>
          <p>{tr(h.ctaText, lang)}</p>
          <Btn href={pagePath(lang, "contact")}>{tr(SITE.ui.letsTalk, lang)}</Btn>
        </div>
      </div>
    </section>
  );
}

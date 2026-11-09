// صفحة المشروع الواحد
import Link from "next/link";
import { notFound } from "next/navigation";
import SITE from "@/content/site";
import { tr, pagePath, casePath, locales, src } from "@/lib/i18n";
import { Media, Shape, IconBack, Follow } from "@/components/ui";

// مشاريع المجلدات المباشرة (direct: true مثل التسويق) ما لها صفحة خاصة، تظهر في السكرول بس
const directServices = SITE.services.filter((s) => s.direct).map((s) => s.slug);
const PAGES = SITE.cases.filter((c) => !c.services.some((s) => directServices.includes(s)));

export function generateStaticParams() {
  return locales.flatMap((lang) => PAGES.map((c) => ({ lang, slug: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const c = PAGES.find((x) => x.slug === slug);
  return c ? { title: tr(c.title, lang), description: tr(c.summary, lang) } : {};
}

export default async function CasePage({ params }) {
  const { lang, slug } = await params;
  const idx = PAGES.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const t = (v) => tr(v, lang);
  const c = PAGES[idx];
  const next = PAGES[(idx + 1) % PAGES.length];

  return (
    <article>
      <section className="case-hero wrap" data-intro="">
        <Link className="link-arrow case-hero__back" href={pagePath(lang, "work")}><IconBack />{t(SITE.ui.backToWork)}</Link>
        <div>
          <span className="eyebrow">{t(c.category)}</span>
          <h1>{t(c.title)}</h1>
        </div>
        <dl className="case-meta">
          <div><dt>{t(SITE.ui.client)}</dt><dd>{t(c.client)}</dd></div>
          <div><dt>{t(SITE.ui.year)}</dt><dd>{c.year}</dd></div>
          <div>
            <dt>{t(SITE.ui.services)}</dt>
            <dd className="case-meta__chips">
              {c.services.map((sl) => {
                const x = SITE.services.find((s) => s.slug === sl);
                return x ? (
                  <Link key={sl} className="chip" href={`${pagePath(lang, "work")}?filter=${sl}`}>
                    <Shape name={x.icon} className="ico" />{t(x.title)}
                  </Link>
                ) : null;
              })}
            </dd>
          </div>
        </dl>
      </section>

      <div className="wrap"><Media className="case-cover" path={c.video || c.cover} alt={t(c.title)} data-clip="" /></div>

      <section className="section wrap intro"><p className="big-text reveal" data-reveal="">{t(c.summary)}</p></section>

      <section className="section wrap">
        <div className="case-cols">
          <div><h2>{t(SITE.ui.challenge)}</h2><p>{t(c.challenge)}</p></div>
          <div><h2>{t(SITE.ui.solution)}</h2><p>{t(c.solution)}</p></div>
        </div>
      </section>

      <section className="section wrap">
        {c.display === "long" ? (
          // عرض طويل متصل: الصفحات تحت بعض بمقاسها الأصلي وبدون فراغات
          <div className="gallery-long">
            {(c.gallery || []).map((g, i) => <img key={i} src={src(g.src)} alt={`${t(c.title)} ${i + 1}`} loading="lazy" />)}
          </div>
        ) : (
          <div className="gallery">
            {(c.gallery || []).map((g, i) => (
              <Media key={i} className={g.size === "full" ? "is-full" : ""} path={g.src} alt={t(c.title)} data-clip="" />
            ))}
          </div>
        )}
      </section>

      <section className="section wrap">
        <Link className="next-case" href={casePath(lang, next.slug)} data-follow="">
          <Follow id="ring-next" lang={lang} />
          <div>
            <span className="eyebrow">{t(SITE.ui.nextProject)}</span>
            <div className="next-case__title h1">{t(next.title)}</div>
          </div>
          <Media className="next-case__media" path={next.cover} alt={t(next.title)} />
        </Link>
      </section>
    </article>
  );
}
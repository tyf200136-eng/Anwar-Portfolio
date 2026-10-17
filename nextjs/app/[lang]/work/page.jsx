// صفحة الأعمال (مع الفلترة)
import SITE from "@/content/site";
import { tr } from "@/lib/i18n";
import { CaseCard, Cta } from "@/components/ui";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: tr(SITE.work.title, lang), description: tr(SITE.work.text, lang) };
}

export default async function Work({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const w = SITE.work;
  return (
    <>
      <section className="page-hero wrap" data-intro="">
        <span className="eyebrow">{t(w.eyebrow)}</span>
        <h1>{t(w.title)}</h1>
        <p className="big-text">{t(w.text)}</p>
      </section>
      <section className="wrap">
        <div className="filters" data-filters="" role="group" aria-label={t(SITE.ui.services)}>
          <button type="button" data-filter="all" aria-pressed="true">{t(SITE.ui.all)}</button>
          {SITE.services.map((x) => (
            <button key={x.slug} type="button" data-filter={x.slug} aria-pressed="false">{t(x.title)}</button>
          ))}
        </div>
        <div className="cases" data-cases="">
          {SITE.cases.map((c, i) => <CaseCard key={c.slug} c={c} i={i} lang={lang} />)}
        </div>
      </section>
      <Cta lang={lang} />
    </>
  );
}

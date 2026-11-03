// صفحة من أنا
import SITE from "@/content/site";
import { tr, src } from "@/lib/i18n";
import { SectionHead, StepCard, Marquee, Cta } from "@/components/ui";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: tr(SITE.about.title, lang), description: tr(SITE.about.intro, lang) };
}

export default async function About({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const a = SITE.about;
  return (
    <>
      {/* الهيرو: بدون صورة، الجملة الأولى كبيرة وباقي النبذة تحتها */}
      <section className="page-hero wrap">
        <div className="me" data-intro="">
          <span className="eyebrow">{t(a.eyebrow)}</span>
          <h1 className="me__title">{t(a.title)}</h1>
          {a.lead && <p className="me__lead">{t(a.lead)}</p>}
          <span className="me__line" aria-hidden="true" />
          <p className="me__text">{t(a.intro)}</p>
          {SITE.home.tools?.length > 0 && (
            <div className="ab__tools me__tools">
              <span>{t(SITE.home.toolsLabel)}</span>
              <ul>
                {SITE.home.tools.map((x) => (
                  <li key={x.name}>
                    {x.icon && <span className="ab__ico" style={{ "--ico": `url(${src(x.icon)})` }} aria-hidden="true" />}
                    {x.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section wrap">
        <SectionHead eyebrow={a.stepsEyebrow} title={a.stepsTitle} lang={lang} />
        <div className="stack" data-stack="">
          {a.steps.map((x, i) => <StepCard key={i} x={x} lang={lang} />)}
        </div>
      </section>

      <Marquee lang={lang} />
      <Cta lang={lang} />
    </>
  );
}
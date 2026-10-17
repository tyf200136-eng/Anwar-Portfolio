// صفحة من أنا
import SITE from "@/content/site";
import { tr } from "@/lib/i18n";
import { Media, SectionHead, StepCard, Marquee, Cta } from "@/components/ui";

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
      <section className="page-hero wrap">
        <div className="about-hero">
          <div data-intro="">
            <span className="eyebrow">{t(a.eyebrow)}</span>
            <h1>{t(a.title)}</h1>
            <p className="big-text">{t(a.intro)}</p>
          </div>
          <Media className="about-hero__media" path={a.portrait} alt={t(SITE.brand.name)} data-clip="" />
        </div>
      </section>

      <section className="section wrap">
        <div className="story">
          <p className="big-text reveal" data-reveal="">{t(a.story)}</p>
          <div>{a.paragraphs.map((p, i) => <p key={i}>{t(p)}</p>)}</div>
        </div>
      </section>

      <section className="section wrap">
        <div className="stats">
          {a.stats.map((x, i) => (
            <div className="stat" key={i}>
              <span className="stat__v" data-count={x.value} data-suffix={x.suffix || ""}>{x.value}{x.suffix || ""}</span>
              <span className="stat__l">{t(x.label)}</span>
            </div>
          ))}
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

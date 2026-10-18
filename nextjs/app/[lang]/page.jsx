// الصفحة الرئيسية
import SITE from "@/content/site";
import { tr, pagePath } from "@/lib/i18n";
import { Media, Btn, Ring, IconDown, IconArrow, IconBack, IconQuote, SectionHead, CaseCard, ServiceCard, Marquee, Cta } from "@/components/ui";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const h = SITE.home, b = SITE.brand;
  const featured = SITE.cases.filter((c) => c.featured);

  return (
    <>
      {/* الهيرو */}
      <section className="hero" data-hero="">
        <div className="wrap">
          <div className="hero__c">
            <h1 className="visually-hidden">{t(b.name)} — {t(b.role)}</h1>
            <div className="hero__word hero__word--top" aria-hidden="true"><span>{t(b.wordTop)}</span></div>
            <div className="hero__word hero__word--btm" aria-hidden="true"><span>{t(b.wordBottom)}</span></div>
            <Media className="hero__m1" path={h.heroImages[0]} data-parallax="-0.08" />
            <Media className="hero__m2" path={h.heroImages[1]} data-parallax="-0.16" />
            <div className="hero__foot">
              <a className="badge" href="#intro" aria-label={t(SITE.ui.scroll)}>
                <Ring id="ring-badge" text={t(SITE.ui.scroll)} className="badge__ring" r={80} />
                <span className="badge__dot"><IconDown /></span>
              </a>
              <p className="hero__tagline">{t(h.tagline)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* نص المقدمة */}
      <section className="section intro wrap" id="intro">
        <p className="big-text reveal" data-reveal="">{t(h.intro)}</p>
        <div className="intro__cta"><Btn href={pagePath(lang, "contact")}>{t(SITE.ui.startProject)}</Btn></div>
      </section>

      {/* الأعمال */}
      <section className="section wrap" id="work">
        <SectionHead eyebrow={h.casesEyebrow} title={h.casesTitle} lang={lang} />
        <div className="cases" data-cases="">
          {featured.map((c, i) => <CaseCard key={c.slug} c={c} i={i} lang={lang} />)}
        </div>
        <div className="cases__more"><Btn href={pagePath(lang, "work")}>{t(SITE.ui.viewAllWork)}</Btn></div>
      </section>

      {/* الدائرة الملونة + العناوين اللاصقة + الخدمات + من أنا */}
      <section className="gc">
        <div className="gc__reveal" data-gc="" aria-hidden="true"><div className="gc__fill" /></div>
        <div className="gc__body">
          <div className="stm wrap">
            <div className="stm__g">
              <h2 className="stm__t">{t(h.stickyTitle1)}</h2>
              <div className="stm__m stm__m1"><Media path={h.stickyImages[0]} /></div>
              <div className="stm__m stm__m2"><Media path={h.stickyImages[1]} /></div>
            </div>
            <div className="stm__g">
              <h2 className="stm__t">{t(h.stickyTitle2)}</h2>
              <div className="stm__m stm__m3"><Media path={h.stickyImages[2]} /></div>
            </div>
          </div>


          <div className="section wrap">
            <div className="tm">
              <div className="tm__text">
                <span className="eyebrow">{t(h.aboutEyebrow)}</span>
                <h2>{t(h.aboutTitle)}</h2>
                <p>{t(h.aboutText)}</p>
                <Btn href={pagePath(lang, "about")} className="btn--light">{t(h.aboutCta)}</Btn>
              </div>
              <Media className="tm__media" path={h.aboutImage} data-clip="" />
            </div>
          </div>
        </div>
      </section>



      <Marquee lang={lang} />
      <Cta lang={lang} />
    </>
  );
}

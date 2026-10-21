// الصفحة الرئيسية
import SITE from "@/content/site";
import { tr, pagePath, casePath, src } from "@/lib/i18n";
import HeroArc from "@/components/HeroArc";
import { Media, Btn, Ring, IconDown, IconArrow, IconBack, IconQuote, SectionHead, CaseCard, ServiceCard, Marquee, Cta } from "@/components/ui";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const h = SITE.home, b = SITE.brand;
  const featured = SITE.cases.filter((c) => c.featured);

  return (
    <>
      {/* الهيرو: الاسم في النص + سطرين تعريف + شريط الأعمال المقوّس */}
      <section className="hx">
        <div className="hx__glow" aria-hidden="true" />
        <div className="hx__text wrap" data-intro="">
          <h1 className="hx__name">{t(b.name)}</h1>
          <p className="hx__lead">{t(h.heroText)}</p>
        </div>
        <HeroArc label={t(h.casesEyebrow)} items={featured.map((c) => ({
          slug: c.slug, title: t(c.title), href: casePath(lang, c.slug), img: src(c.thumb || c.cover)
        }))} />
      </section>

      {/* نص المقدمة */}
      <section className="section intro wrap" id="intro">
        <p className="big-text reveal" data-reveal="">{t(h.intro)}</p>
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
            {/* من أنا: تصميم نصي بدون صورة */}
            <div className="ab">
              <span className="eyebrow">{t(h.aboutEyebrow)}</span>
              <h2 className="ab__title">{t(h.aboutTitle)}</h2>
              <span className="ab__line" aria-hidden="true" />
              <p className="ab__text">{t(h.aboutText)}</p>
              {h.tools?.length > 0 && (
                <div className="ab__tools">
                  <span>{t(h.toolsLabel)}</span>
                  <ul>
                    {h.tools.map((x) => (
                      <li key={x.name}>
                        {x.icon && <span className="ab__ico" style={{ "--ico": `url(${src(x.icon)})` }} aria-hidden="true" />}
                        {x.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Btn href={pagePath(lang, "about")} className="btn--light">{t(h.aboutCta)}</Btn>
            </div>
          </div>
        </div>
      </section>



      <Marquee lang={lang} />
      <Cta lang={lang} />
    </>
  );
}
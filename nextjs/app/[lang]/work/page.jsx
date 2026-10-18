// صفحة الأعمال: مجلد لكل خدمة
import SITE from "@/content/site";
import { tr, src, casePath } from "@/lib/i18n";
import { Cta } from "@/components/ui";
import Folders from "@/components/Folders";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: tr(SITE.work.title, lang), description: tr(SITE.work.text, lang) };
}

export default async function Work({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const w = SITE.work;

  // كل خدمة = مجلد، وداخله المشاريع اللي فيها هذه الخدمة
  const folders = SITE.services.map((sv) => ({
    slug: sv.slug,
    title: t(sv.title),
    bg: sv.bg,
    fg: sv.fg,
    items: SITE.cases
      .filter((c) => c.services.includes(sv.slug))
      .map((c) => ({ slug: c.slug, title: t(c.title), category: t(c.category), cover: src(c.cover), href: casePath(lang, c.slug) }))
  }));

  const labels = {
    projects: t(w.projects),
    coverTab: t(w.coverTab),
    hint: t(w.folderHint),
    scrollHint: t(w.scrollHint),
    empty: t(w.empty),
    back: t(SITE.ui.close)
  };

  return (
    <>
      <section className="page-hero wrap" data-intro="">
        <span className="eyebrow">{t(w.eyebrow)}</span>
        <h1>{t(w.title)}</h1>
        <p className="big-text">{t(w.text)}</p>
      </section>
      <section className="wrap">
        <Folders folders={folders} labels={labels} />
      </section>
      <Cta lang={lang} />
    </>
  );
}
// صفحة التواصل: روابط مباشرة (واتساب، بريد، جوال) بدون نموذج
import SITE from "@/content/site";
import { tr } from "@/lib/i18n";
import { IconArrow } from "@/components/ui";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: tr(SITE.contact.title, lang), description: tr(SITE.contact.text, lang) };
}

export default async function Contact({ params }) {
  const { lang } = await params;
  const t = (v) => tr(v, lang);
  const c = SITE.contact, b = SITE.brand;

  const links = [
    {
      label: t(c.labels.whatsapp),
      value: t(c.labels.whatsappCta),
      href: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(t(c.waText))}`,
      external: true
    },
    {
      label: t(c.labels.email),
      value: b.email,
      href: `mailto:${b.email}?subject=${encodeURIComponent(t(c.title))}`,
      ltr: true
    },
    {
      label: t(c.labels.phone),
      value: b.phone,
      href: `tel:${b.phone.replace(/\s/g, "")}`,
      ltr: true
    }
  ];

  return (
    <section className="section wrap ct" data-intro="">
      <p className="now ct__status">{t(c.status)}</p>
      <ul className="ct__list">
        {links.map((x) => (
          <li key={x.href}>
            <a className="ct__row" href={x.href}
              {...(x.external ? { target: "_blank", rel: "noopener" } : {})}>
              <span className="ct__label">{x.label}</span>
              <span className="ct__value" dir={x.ltr ? "ltr" : undefined}>{x.value}</span>
              <span className="ct__arrow"><IconArrow /></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
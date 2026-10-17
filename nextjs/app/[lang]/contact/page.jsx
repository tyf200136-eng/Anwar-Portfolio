// صفحة التواصل
// النموذج يرسل إلى SITE.brand.formEndpoint (مثل formspree.io)، وإن كان فارغاً يفتح برنامج البريد
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
  const c = SITE.contact, f = c.form, b = SITE.brand;
  return (
    <>
      <section className="page-hero wrap" data-intro="">
        <span className="eyebrow">{t(c.eyebrow)}</span>
        <h1>{t(c.title)}</h1>
        <p className="big-text">{t(c.text)}</p>
      </section>

      <section className="section wrap contact">
        <form className="form" data-contact-form="" noValidate
          data-endpoint={b.formEndpoint || ""} data-email={b.email} data-subject={t(c.title)}
          data-msg-sending={t(f.sending)} data-msg-success={t(f.success)} data-msg-error={t(f.error)}>
          <div className="field"><label htmlFor="f-name">{t(f.name)}</label><input id="f-name" name="name" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="f-email">{t(f.email)}</label><input id="f-email" name="email" type="email" autoComplete="email" required dir="auto" /></div>
          <div className="field">
            <fieldset>
              <legend>{t(f.interest)}</legend>
              <div className="choices">
                {SITE.services.map((x, i) => (
                  <span key={x.slug} style={{ display: "contents" }}>
                    <input type="checkbox" id={`int-${i}`} name="interest" value={t(x.title)} />
                    <label htmlFor={`int-${i}`}>{t(x.title)}</label>
                  </span>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="field"><label htmlFor="f-msg">{t(f.message)}</label><textarea id="f-msg" name="message" required /></div>
          <div>
            <button className="btn" type="submit">
              <span className="btn__c btn__c--a"><IconArrow /></span>
              <span className="btn__l">{t(f.send)}</span>
              <span className="btn__c btn__c--b"><IconArrow /></span>
            </button>
          </div>
          <p className="form__status" role="status" aria-live="polite" />
        </form>

        <aside className="contact__details">
          <h2 className="h3">{t(c.detailsTitle)}</h2>
          <a className="contact__big" href={`mailto:${b.email}`} dir="ltr">{b.email}</a>
          <a className="contact__big" href={`tel:${b.phone.replace(/\s/g, "")}`} dir="ltr">{b.phone}</a>
          <p>{t(b.city)}</p>
          <div className="socials">
            {b.socials.map((x) => <a key={x.label} href={x.url} target="_blank" rel="noopener">{x.label}</a>)}
          </div>
        </aside>
      </section>
    </>
  );
}

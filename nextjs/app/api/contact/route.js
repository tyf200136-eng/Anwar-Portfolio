// باك إند نموذج التواصل: يستقبل الرسالة من الموقع ويرسلها لإيميلك عن طريق Resend
// المفاتيح السرية ما تنكتب هنا أبداً، مكانها إعدادات Vercel (Environment Variables):
//   RESEND_API_KEY  = المفتاح من resend.com (يبدأ بـ re_)
//   CONTACT_TO      = إيميلك اللي تبين توصلك عليه الرسائل (نفس إيميل حسابك في Resend)

const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  let fd;
  try { fd = await req.formData(); } catch { return Response.json({ ok: false }, { status: 400 }); }

  // فخ للروبوتات: حقل مخفي، الإنسان ما يشوفه ولا يعبيه
  if (clean(fd.get("website"), 200)) return Response.json({ ok: true });

  const name = clean(fd.get("name"), 120);
  const email = clean(fd.get("email"), 200);
  const message = clean(fd.get("message"), 5000);
  const interest = fd.getAll("interest").map((x) => clean(x, 100)).filter(Boolean).join("، ");

  // تأكد إن الحقول المطلوبة موجودة والإيميل شكله صحيح
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO;
  if (!key || !to) {
    console.error("contact: RESEND_API_KEY أو CONTACT_TO مو موجودين في إعدادات Vercel");
    return Response.json({ ok: false, error: "config" }, { status: 500 });
  }

  const html = `
    <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.7;color:#1d1b18">
      <p><strong>الاسم:</strong> ${escape(name)}</p>
      <p><strong>الإيميل:</strong> ${escape(email)}</p>
      ${interest ? `<p><strong>مهتم بـ:</strong> ${escape(interest)}</p>` : ""}
      <p><strong>الرسالة:</strong></p>
      <p style="white-space:pre-wrap">${escape(message)}</p>
    </div>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>", // بعد ما تربطين دومين في Resend غيّريه لعنوان من دومينك
      to: [to],
      reply_to: email,                           // لما تضغطين "رد" يروح الرد للزائر مباشرة
      subject: `رسالة جديدة من الموقع: ${name}`,
      html,
      text: `الاسم: ${name}\nالإيميل: ${email}\n${interest ? `مهتم بـ: ${interest}\n` : ""}\n${message}`
    })
  }).catch(() => null);

  if (!r || !r.ok) {
    console.error("contact: Resend رفض الإرسال", r && r.status, r && (await r.text().catch(() => "")));
    return Response.json({ ok: false, error: "send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
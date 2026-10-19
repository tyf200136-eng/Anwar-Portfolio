"use client";
// مجلدات الأعمال
// - كل خدمة = مجلد. الضغط عليه يفتح المجلد.
// - داخل المجلد: قائمة بأسماء العملاء + بطاقات تتحرك مع السكرول، والمؤشر في القائمة يتبع البطاقة.
// - الضغط على اسم في القائمة: تتحرك البطاقات لبطاقته.
// - الضغط على البطاقة: تنفتح كل تصاميم هذا العميل داخل المجلد.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// أماكن ألسنة المجلدات (نسبة من العرض) — غيّرها لتغيير ترتيب الألسنة
const TAB_OFFSETS = ["52%", "28%", "4%", "38%", "14%", "46%"];

// إعدادات حركة البطاقات (جرّب تغيّرها)
const SCROLL_PER_CARD = 0.6; // كم من ارتفاع الشاشة سكرول = بطاقة واحدة
const SMOOTHNESS = 0.12;     // نعومة الحركة: رقم أصغر = أنعم وأبطأ
const GAL_SCROLL = 0.5;      // داخل تصاميم العميل: كم من ارتفاع الشاشة سكرول = تصميم واحد

const BackIcon = () => (
  <svg className="ico ico--flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
const DiagIcon = () => (
  <svg className="ico ico--flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
);
const Flower = () => (
  <svg className="folder__flower" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((r) => <ellipse key={r} cx="50" cy="26" rx="11" ry="24" transform={`rotate(${r} 50 50)`} />)}
  </svg>
);

export default function Folders({ folders, labels }) {
  const [open, setOpen] = useState(-1);   // رقم المجلد المفتوح (-1 = مغلق)
  const [gal, setGal] = useState(-1);     // رقم العميل اللي تصاميمه مفتوحة (-1 = مغلق)
  const lastOpen = useRef(0);
  const lastGal = useRef(0);
  const deckRef = useRef(null);
  const cardsBoxRef = useRef(null);
  const cardsRef = useRef([]);
  const listRef = useRef(null);
  const listBtnsRef = useRef([]);
  const indRef = useRef(null);
  const counterRef = useRef(null);
  const galRef = useRef(null);
  const galItemsRef = useRef([]);
  const galCounterRef = useRef(null);
  const galOpen = useRef(false);

  if (open >= 0) lastOpen.current = open;
  if (gal >= 0) lastGal.current = gal;
  galOpen.current = gal >= 0;
  const f = folders[lastOpen.current] || folders[0];
  const items = f ? f.items : [];
  const g = items[lastGal.current];

  // فتح مجلد من الرابط: /work?filter=identity (روابط الفوتر تستخدم هذا)
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("filter");
    const i = folders.findIndex((x) => x.slug === slug);
    if (i > -1) setOpen(i);
  }, [folders]);

  // عند فتح المجلد: قفل سكرول الصفحة + زر Escape
  useEffect(() => {
    if (open < 0) return;
    const html = document.documentElement;
    const deck = deckRef.current;
    html.classList.add("deck-open");
    deck.scrollTop = 0;
    deck.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (galOpen.current) setGal(-1); else setOpen(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { html.classList.remove("deck-open"); window.removeEventListener("keydown", onKey); setGal(-1); };
  }, [open]);

  // عند فتح تصاميم عميل: ابدأ من أعلى
  useEffect(() => {
    if (gal >= 0 && galRef.current) { galRef.current.scrollTop = 0; galRef.current.focus({ preventScroll: true }); }
  }, [gal]);

  // حركة تصاميم العميل: التصميم الحالي كبير في النص، واللي قبله وبعده يطلّون كشرائح من فوق وتحت
  useEffect(() => {
    if (gal < 0 || open < 0) return;
    if (folders[open].items[gal].display === "long") return; // العرض الطويل ما يحتاج حركة
    const el = galRef.current;
    const n = folders[open].items[gal].gallery.length;
    const imgs = galItemsRef.current.slice(0, n);
    let cur = 0, raf;
    const tick = () => {
      const vh = el.clientHeight;
      const target = Math.min(n - 1, Math.max(0, el.scrollTop / (vh * GAL_SCROLL)));
      cur += (target - cur) * SMOOTHNESS;
      const STRIP = vh * 0.055; // كم يطل كل تصميم من فوق وتحت (كبّره = تطل أكثر)
      const hs = imgs.map((m) => (m ? m.offsetHeight : 0));
      const lo = Math.floor(cur), hi = Math.min(n - 1, lo + 1), t = cur - lo;
      const hc = hs[lo] * (1 - t) + hs[hi] * t; // ارتفاع التصميم اللي في النص
      imgs.forEach((m, i) => {
        if (!m) return;
        const d = i - cur, a = Math.abs(d);
        const scale = 1 - Math.min(a, 1) * 0.12 - Math.max(0, Math.min(a, 5) - 1) * 0.06; // اللي ورا أصغر
        // كل تصميم يطل بنفس المسافة مهما كان مقاسه
        const y = Math.sign(d) * Math.max(0, hc / 2 + a * STRIP - (hs[i] * scale) / 2);
        m.style.transform = `translate(-50%, -50%) translateY(${y}px) scale(${scale})`;
        m.style.zIndex = String(100 - Math.round(a * 10));
        m.style.opacity = String(Math.max(0, Math.min(1, 4.5 - a))); // يظهر 4 شرائح فوق و4 تحت
        m.classList.toggle("is-current", a < 0.5);
      });
      if (galCounterRef.current) galCounterRef.current.textContent = `${Math.round(cur) + 1} / ${n}`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [gal, open, folders]);

  // الضغط على شريحة: انتقل لها
  const galGoTo = (i) => {
    const el = galRef.current;
    el.scrollTo({ top: i * el.clientHeight * GAL_SCROLL, behavior: "smooth" });
  };

  // حركة البطاقات + مؤشر القائمة
  useEffect(() => {
    if (open < 0) return;
    const deck = deckRef.current, box = cardsBoxRef.current, list = listRef.current, ind = indRef.current;
    const n = folders[open].items.length;
    const cards = cardsRef.current.slice(0, n);
    const btns = listBtnsRef.current.slice(0, n);
    if (!n) return;
    const s = document.documentElement.dir === "rtl" ? -1 : 1; // في العربية تنعكس الحركة
    let cur = 0, raf, active = -1;

    const setActive = (i) => {
      btns.forEach((b, k) => b && b.classList.toggle("is-active", k === i));
      const b = btns[i];
      if (!b) return;
      const vertical = window.matchMedia("(min-width: 900px)").matches;
      if (vertical) {
        // الكمبيوتر: المؤشر ينزل مع الاسم
        ind.style.transform = `translateY(${b.offsetTop}px)`;
        ind.style.height = b.offsetHeight + "px";
      } else {
        // الجوال: الشريط يتحرك حتى يبقى الاسم في النص
        const lr = list.getBoundingClientRect(), br = b.getBoundingClientRect();
        list.scrollBy({ left: br.left + br.width / 2 - (lr.left + lr.width / 2), behavior: "smooth" });
      }
    };

    const tick = () => {
      const vh = deck.clientHeight, w = box.clientWidth, h = box.clientHeight;
      const target = Math.min(n - 1, Math.max(0, deck.scrollTop / (vh * SCROLL_PER_CARD)));
      cur += (target - cur) * SMOOTHNESS;
      const stepX = Math.min(w * 0.13, 150) * s; // المسافة الأفقية بين البطاقات اللي ورا
      const stepY = Math.min(h * 0.12, 120);     // المسافة العمودية بين البطاقات اللي ورا
      const gapX = Math.min(w * 0.14, 170) * s;  // مسافة إضافية تبعد البطاقة اللي في النص عن اللي ورها
      const gapY = Math.min(h * 0.10, 90);
      cards.forEach((c, i) => {
        if (!c) return;
        const d = i - cur, a = Math.abs(d);
        const push = Math.sign(d) * Math.min(a, 1);
        const x = d * stepX + push * gapX;
        const y = d * stepY + push * gapY;
        const scale = 1 - Math.min(a, 1) * 0.12 - Math.min(a, 4) * 0.05;
        c.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
        // البطاقات اللي فاتت تختفي أسرع، واللي جاية يظهر منها بطاقتين
        c.style.opacity = String(Math.max(0, Math.min(1, (d < 0 ? 1.6 : 2.6) - a)));
        c.style.zIndex = String(100 - Math.round(a * 10));
        c.classList.toggle("is-current", a < 0.5);
      });
      const r = Math.round(cur);
      if (r !== active) { active = r; setActive(r); }
      if (counterRef.current) counterRef.current.textContent = `${r + 1} / ${n}`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onResize = () => { const a = active; active = -1; setActive(a); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [open, folders]);

  // الضغط على اسم في القائمة: حرّك البطاقات لبطاقته
  const goTo = (i) => {
    const deck = deckRef.current;
    deck.scrollTo({ top: i * deck.clientHeight * SCROLL_PER_CARD, behavior: "smooth" });
  };

  return (
    <>
      {/* المجلدات */}
      <div className="folders">
        {folders.map((x, i) => (
          <button key={x.slug} type="button" className="folder" aria-haspopup="dialog" onClick={() => setOpen(i)}
            style={{ "--bg": x.bg, "--fg": x.fg, "--tab": TAB_OFFSETS[i % TAB_OFFSETS.length] }}>
            <span className="folder__tab">( {x.title} )</span>
            <span className="folder__body">
              <span className="folder__count"><strong>{x.items.length}</strong> {labels.projects}</span>
              <DiagIcon />
            </span>
          </button>
        ))}
        <div className="folder folder--cover" style={{ "--tab": TAB_OFFSETS[folders.length % TAB_OFFSETS.length] }}>
          <span className="folder__tab">( {labels.coverTab} )</span>
          <span className="folder__body"><Flower /><span className="folder__hint">{labels.hint}</span></span>
        </div>
      </div>

      {/* المجلد المفتوح */}
      <div ref={deckRef} className={`deck${open >= 0 ? " is-open" : ""}${gal >= 0 ? " has-gal" : ""}`} tabIndex={-1} role="dialog" aria-modal="true"
        aria-label={f?.title} inert={open < 0} style={{ "--bg": f?.bg, "--fg": f?.fg, "--n": Math.max(items.length, 1) }}>
        <div className="deck__bar">
          <button type="button" className="icon-btn deck__back" onClick={() => setOpen(-1)} aria-label={labels.back}><BackIcon /></button>
          <div className="deck__title"><span>( {f?.title} )</span><span ref={counterRef} className="deck__count" /></div>
        </div>

        <div className="deck__track">
          <div className="deck__stage">
            {items.length ? (
              <>
                {/* قائمة العملاء */}
                <nav className="deck__list-wrap" aria-label={labels.listTitle}>
                  <span className="deck__list-title">{labels.listTitle}</span>
                  <div className="deck__list" ref={listRef}>
                    <span className="deck__ind" ref={indRef} aria-hidden="true" />
                    <ol>
                    {items.map((c, i) => (
                      <li key={c.slug}>
                        <button type="button" ref={(el) => { listBtnsRef.current[i] = el; }} onClick={() => goTo(i)}>
                          <span>{c.title}</span><small>{c.gallery.length}</small>
                        </button>
                      </li>
                    ))}
                    </ol>
                  </div>
                </nav>

                {/* البطاقات */}
                <div className="deck__cards" ref={cardsBoxRef}>
                  {items.map((c, i) => (
                    <button key={c.slug} type="button" className="deck__card" ref={(el) => { cardsRef.current[i] = el; }} onClick={() => setGal(i)}>
                      <span className="deck__img"><img src={c.cover} alt={c.title} loading="lazy" /></span>
                      <span className="deck__cap"><strong>{c.title}</strong><span>{c.category}</span></span>
                    </button>
                  ))}
                </div>
              </>
            ) : <p className="deck__empty">{labels.empty}</p>}
          </div>
        </div>
        {items.length > 1 && <p className="deck__hint">{labels.scrollHint}</p>}

        {/* تصاميم العميل */}
        <div ref={galRef} className={`gal${gal >= 0 ? " is-open" : ""}${g?.display === "long" ? " gal--long" : ""}`} tabIndex={-1} inert={gal < 0} role="dialog" aria-modal="true" aria-label={g?.title}
          style={{ "--n": Math.max(g ? g.gallery.length : 1, 1) }}>
          <div className="gal__bar">
            <button type="button" className="icon-btn deck__back" onClick={() => setGal(-1)} aria-label={labels.back}><BackIcon /></button>
            <div className="deck__title"><span>{g?.title}</span>{g?.display !== "long" && <span ref={galCounterRef} className="deck__count" />}</div>
            {g && <Link className="link-arrow gal__full" href={g.href}>{labels.fullProject}<DiagIcon /></Link>}
          </div>
          {g?.display === "long" ? (
            // عرض طويل متصل (للهويات): الصفحات تحت بعض بدون فراغات
            <div className="gal__long">
              {g.gallery.map((src, i) => <img key={`${g.slug}-${i}`} src={src} alt={`${g.title} ${i + 1}`} loading="lazy" />)}
            </div>
          ) : (
            <div className="gal__track">
              <div className="gal__stage">
                {g?.gallery.map((src, i) => (
                  <img key={`${g.slug}-${i}`} src={src} alt={`${g.title} ${i + 1}`} className="gal__item"
                    ref={(el) => { galItemsRef.current[i] = el; }} onClick={() => galGoTo(i)} />
                ))}
              </div>
            </div>
          )}
          {g && g.display !== "long" && g.gallery.length > 1 && <p className="deck__hint">{labels.scrollHint}</p>}
        </div>
      </div>
    </>
  );
}
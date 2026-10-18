"use client";
// مجلدات الأعمال: كل خدمة مجلد، والضغط عليه يفتح المشاريع كبطاقات تتحرك مع السكرول
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// أماكن ألسنة المجلدات (نسبة من العرض) — غيّرها لتغيير ترتيب الألسنة
const TAB_OFFSETS = ["52%", "28%", "4%", "38%", "14%", "46%"];

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
  const [open, setOpen] = useState(-1);
  const lastOpen = useRef(0);
  const deckRef = useRef(null);
  const cardsRef = useRef([]);
  const counterRef = useRef(null);

  if (open >= 0) lastOpen.current = open;
  const f = folders[lastOpen.current] || folders[0];
  const items = f ? f.items : [];

  // فتح مجلد من الرابط: /work?filter=identity (روابط الفوتر تستخدم هذا)
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("filter");
    const i = folders.findIndex((x) => x.slug === slug);
    if (i > -1) setOpen(i);
  }, [folders]);

  // عند الفتح: قفل سكرول الصفحة + الإغلاق بزر Escape
  useEffect(() => {
    if (open < 0) return;
    const html = document.documentElement;
    const deck = deckRef.current;
    html.classList.add("deck-open");
    deck.scrollTop = 0;
    deck.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === "Escape") setOpen(-1); };
    window.addEventListener("keydown", onKey);
    return () => { html.classList.remove("deck-open"); window.removeEventListener("keydown", onKey); };
  }, [open]);

  // حركة البطاقات مع السكرول داخل المجلد
  useEffect(() => {
    if (open < 0) return;
    const deck = deckRef.current;
    const n = folders[open].items.length;
    const cards = cardsRef.current.slice(0, n);
    if (!n) return;
    const s = document.documentElement.dir === "rtl" ? -1 : 1; // في العربية تنعكس الحركة
    let cur = 0, raf;
    const tick = () => {
      const vh = deck.clientHeight, vw = deck.clientWidth;
      // كل 60% من ارتفاع الشاشة سكرول = بطاقة واحدة
      const target = Math.min(n - 1, Math.max(0, deck.scrollTop / (vh * 0.6)));
      cur += (target - cur) * 0.12; // نعومة الحركة: رقم أصغر = أنعم وأبطأ
      const stepX = Math.min(vw * 0.13, 150) * s; // المسافة الأفقية بين البطاقات
      const stepY = Math.min(vh * 0.12, 120);     // المسافة العمودية بين البطاقات
      cards.forEach((c, i) => {
        if (!c) return;
        const d = i - cur, a = Math.abs(d);
        c.style.transform = `translate(-50%, -50%) translate(${d * stepX}px, ${d * stepY}px) scale(${1 - Math.min(a, 4) * 0.07})`;
        c.style.opacity = String(Math.max(0, Math.min(1, 3.5 - a)));
        c.style.zIndex = String(100 - Math.round(a * 10));
        c.classList.toggle("is-current", a < 0.5);
      });
      if (counterRef.current) counterRef.current.textContent = `${Math.round(cur) + 1} / ${n}`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [open, folders]);

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

      {/* محتوى المجلد المفتوح */}
      <div ref={deckRef} className={`deck${open >= 0 ? " is-open" : ""}`} tabIndex={-1} role="dialog" aria-modal="true"
        aria-label={f?.title} inert={open < 0} style={{ "--bg": f?.bg, "--fg": f?.fg, "--n": Math.max(items.length, 1) }}>
        <div className="deck__bar">
          <button type="button" className="icon-btn deck__back" onClick={() => setOpen(-1)} aria-label={labels.back}><BackIcon /></button>
          <div className="deck__title"><span>( {f?.title} )</span><span ref={counterRef} className="deck__count" /></div>
        </div>
        <div className="deck__track">
          <div className="deck__stage">
            {items.length ? items.map((c, i) => (
              <Link key={c.slug} href={c.href} className="deck__card" ref={(el) => { cardsRef.current[i] = el; }}>
                <span className="deck__img"><img src={c.cover} alt={c.title} loading="lazy" /></span>
                <span className="deck__cap"><strong>{c.title}</strong><span>{c.category}</span></span>
              </Link>
            )) : <p className="deck__empty">{labels.empty}</p>}
          </div>
        </div>
        {items.length > 1 && <p className="deck__hint">{labels.scrollHint}</p>}
      </div>
    </>
  );
}
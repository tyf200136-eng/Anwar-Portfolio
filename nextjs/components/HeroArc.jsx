"use client";
// شريط الأعمال المقوّس في الهيرو (شكل الهلال)
// الكروت مصفوفة على أسطوانة ونحن ننظر لها من الداخل:
// كروت الأطراف أقرب لنا فتظهر أكبر، وكروت النص أبعد فتظهر أصغر.
// الشريط يمشي وحده من اليمين إلى اليسار، ويسرع قليلاً مع السكرول.
import { useEffect, useRef } from "react";
import Link from "next/link";

/* ===== إعدادات تقدر تغيّرها ===== */
const SPEED = 40;        // سرعة الحركة (بكسل في الثانية). صفر = بدون حركة
const HOVER_SPEED = 0.25; // نسبة السرعة عند وضع الماوس على كرت (0.25 = ربع السرعة)
const SCROLL_BOOST = 0.6; // قوة تسريع السكرول. صفر = السكرول ما يأثر
const CURVE = 0.65;      // نصف قطر الأسطوانة بالنسبة لعرض الشاشة. أصغر = هلال أقوى
const DEPTH = 0.5;       // عمق المنظور بالنسبة لعرض الشاشة. أصغر = الأطراف أكبر
const GAP = 0.1;         // المسافة بين الكروت بالنسبة لعرض الكرت
const COPIES = 3;        // كم مرة تتكرر الأعمال لتعبئة الهلال

export default function HeroArc({ items, label }) {
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const list = Array.from({ length: COPIES }, () => items).flat();

  useEffect(() => {
    const stage = stageRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!stage || !cards.length) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, R = 0, P = 0, w = 0, pitch = 0, total = 0;
    let offset = 0, boost = 0, hover = false, visible = true, raf = 0, last = 0;
    let lastY = window.scrollY;

    function measure() {
      W = stage.clientWidth;
      w = cards[0].offsetWidth;
      // في الجوال الشاشة ضيقة، فنربط الانحناء بعرض الكرت حتى لا تتزاحم الكروت
      R = Math.max(W * CURVE, w * 4.6);
      P = Math.max(W * DEPTH, w * 3.6);
      pitch = w * (1 + GAP);
      total = pitch * cards.length;
      stage.style.perspective = `${P}px`;
    }

    function render() {
      for (let i = 0; i < cards.length; i++) {
        // مكان الكرت على الشريط (ملفوف حتى يرجع من البداية)
        let s = (i * pitch + offset) % total;
        if (s < 0) s += total;
        s -= total / 2;
        const a = s / R; // الزاوية على الأسطوانة
        const el = cards[i];
        // نحسب مكان الكرت على الشاشة، ونخفيه إذا طلع برّا الشاشة
        // (نحسب الطرف الداخلي للكرت: لو هو برّا، الكرت كله برّا)
        const b = Math.abs(a), half = w / 2;
        const zIn = R * (1 - Math.cos(b)) - half * Math.sin(b);
        const xIn = (R * Math.sin(b) - half * Math.cos(b)) * P / Math.max(1, P - zIn);
        const out = R * (1 - Math.cos(b)) > P * 0.85 || xIn > W / 2 + 40;
        if (out) {
          if (el.style.visibility !== "hidden") el.style.visibility = "hidden";
          continue;
        }
        if (el.style.visibility === "hidden") el.style.visibility = "";
        el.style.transform =
          `translate3d(-50%,-50%,0) translateZ(${R}px) rotateY(${(a * 180) / Math.PI}deg) translateZ(${-R}px)`;
      }
    }

    function tick(now) {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - (last || now)) / 1000);
      last = now;
      if (!visible) return;
      const k = W / 1400; // نفس الإحساس على كل المقاسات
      const speed = SPEED * Math.max(0.45, k) * (hover ? HOVER_SPEED : 1);
      offset += (speed + boost) * dt;
      boost *= Math.pow(0.04, dt); // التسريع يهدأ تدريجياً
      render();
    }

    function onScroll() {
      const y = window.scrollY;
      boost = Math.min(boost + Math.abs(y - lastY) * SCROLL_BOOST * 6, 900);
      lastY = y;
    }

    measure();
    render();
    stage.classList.add("is-ready");

    const ac = new AbortController();
    const opt = { signal: ac.signal };
    window.addEventListener("resize", () => { measure(); render(); }, opt);
    if (!reduce && SPEED > 0) {
      window.addEventListener("scroll", onScroll, { passive: true, signal: ac.signal });
      stage.addEventListener("pointerover", (e) => { if (e.pointerType === "mouse") hover = true; }, opt);
      stage.addEventListener("pointerleave", () => { hover = false; }, opt);
      raf = requestAnimationFrame(tick);
    }
    // نوقف الحركة إذا الشريط خارج الشاشة (يوفر البطارية)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(stage);

    return () => { ac.abort(); io.disconnect(); cancelAnimationFrame(raf); };
  }, [items]);

  return (
    <div className="arc" ref={stageRef} aria-label={label} role="region">
      <div className="arc__ring">
        {list.map((c, i) => (
          <Link key={`${c.slug}-${i}`} href={c.href} className="arc__card" ref={(el) => { cardsRef.current[i] = el; }}
            aria-label={c.title} tabIndex={i < items.length ? 0 : -1} aria-hidden={i < items.length ? undefined : true}>
            <img src={c.img} alt="" loading={i < items.length ? "eager" : "lazy"} decoding="async" draggable="false" />
          </Link>
        ))}
      </div>
    </div>
  );
}
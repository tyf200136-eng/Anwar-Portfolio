/* =====================================================================
   motion.js — كل الحركات والتفاعلات في الموقع
   ---------------------------------------------------------------------
   initMotion(root, libs) يفعّل كل الحركات داخل الصفحة، ويرجع دالة
   تنظيف (تُستخدم في Next.js عند الانتقال بين الصفحات).

   كل حركة مرتبطة بخاصية data-… في الـ HTML:
     [data-menu-btn] [data-ov]   القائمة المنبثقة (الآيباد والجوال)
     [data-nav] [data-nav-ind]   المؤشر المنزلق في شريط التنقل (الكمبيوتر)
     [data-hero]                 حركة الهيرو عند التحميل + افتراق الكلمتين مع السكرول
     [data-parallax="-0.12"]     بارالاكس (النسبة من ارتفاع الشاشة)، من 980px فما فوق
     [data-reveal]               كشف النص سطراً سطراً مع السكرول
     [data-follow]               دائرة تتبع الماوس فوق البطاقة
     [data-gc]                   الدائرة الملونة التي تكبر حتى تملأ الشاشة
     [data-stack]                البطاقات المتراكمة (من 1024px فما فوق)
     [data-marquee]              شريط الشعارات (اتجاهه يتبع اتجاه السكرول)
     [data-testi]                سلايدر الآراء (Swiper)
     [data-filters]              فلترة الأعمال
     [data-intro]                ظهور عناصر رأس الصفحة عند التحميل
     [data-clip]                 كشف الصورة عند وصولها للشاشة
     [data-count]                عدّاد الأرقام
     [data-contact-form]         نموذج التواصل
   ===================================================================== */

function initMotion(root, libs) {
  root = root || document;
  libs = libs || {};
  var gsap = libs.gsap, ScrollTrigger = libs.ScrollTrigger, SplitText = libs.SplitText;
  var Swiper = libs.Swiper, swiperModules = libs.swiperModules || [];

  var doc = root.ownerDocument || root;
  var html = doc.documentElement;
  var win = doc.defaultView || window;
  var ac = new AbortController();
  var cleanups = [];
  var rtl = html.dir === "rtl";
  var s = rtl ? -1 : 1;
  var reduce = win.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = win.matchMedia("(hover: hover)").matches;

  function on(el, ev, fn, opts) {
    if (!el) return;
    var o = Object.assign({}, opts || {}, { signal: ac.signal });
    el.addEventListener(ev, fn, o);
  }
  function $(sel, el) { return (el || root).querySelector(sel); }
  function $$(sel, el) { return Array.prototype.slice.call((el || root).querySelectorAll(sel)); }
  function debounce(fn, ms) { var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }

  // بدون GSAP: أظهر كل المحتوى وفعّل التفاعلات الأساسية فقط
  var motion = !!(gsap && ScrollTrigger) && !reduce;
  if (!motion) html.classList.remove("js-motion");
  if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (gsap && SplitText) gsap.registerPlugin(SplitText);
  var ctx = gsap ? gsap.context(function () {}) : null;
  function add(fn) { return ctx ? ctx.add(fn) : fn(); }
  var radius = (getComputedStyle(html).getPropertyValue("--radius") || "20px").trim();

  /* ---------- الهيدر: إخفاء الشعار والأزرار بعد بداية السكرول ---------- */
  var scrollDir = 1, lastY = win.scrollY;
  function onScroll() {
    var y = Math.max(0, win.scrollY);
    if (y !== lastY) scrollDir = y > lastY ? 1 : -1;
    lastY = y;
    html.classList.toggle("is-scrolled", y > 80);
  }
  onScroll();
  on(win, "scroll", onScroll, { passive: true });

  /* ---------- القائمة المنبثقة ---------- */
  var menuBtn = $("[data-menu-btn]"), ov = $("[data-ov]");
  if (menuBtn && ov) {
    var setMenu = function (open) {
      html.classList.toggle("ov-open", open);
      if (open) ov.removeAttribute("inert"); else ov.setAttribute("inert", "");
      ov.setAttribute("aria-hidden", String(!open));
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? menuBtn.dataset.labelClose : menuBtn.dataset.labelOpen;
    };
    on(menuBtn, "click", function () { setMenu(!html.classList.contains("ov-open")); });
    on(doc, "keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    $$("a", ov).forEach(function (a) { on(a, "click", function () { setMenu(false); }); });
    cleanups.push(function () { setMenu(false); });
  }

  /* ---------- مؤشر شريط التنقل ---------- */
  var navBox = $("[data-nav]"), ind = $("[data-nav-ind]");
  if (navBox && ind) {
    var links = $$("a", navBox);
    var active = links.filter(function (a) { return a.classList.contains("is-active"); })[0];
    var moveTo = function (a) {
      if (!a) { ind.classList.remove("is-on"); return; }
      ind.style.width = a.offsetWidth + "px";
      ind.style.transform = "translateX(" + a.offsetLeft + "px)";
      ind.classList.add("is-on");
    };
    ind.style.transition = "none"; moveTo(active); void ind.offsetWidth; ind.style.transition = "";
    links.forEach(function (a) {
      on(a, "mouseenter", function () { moveTo(a); });
      on(a, "focus", function () { moveTo(a); });
    });
    on(navBox, "mouseleave", function () { moveTo(active); });
    on(win, "resize", debounce(function () { moveTo(active); }, 100));
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { if (!ac.signal.aborted) moveTo(active); });
  }

  /* ---------- الهيرو ---------- */
  var hero = $("[data-hero]");
  if (hero && motion) add(function () {
    var top = $(".hero__word--top", hero), btm = $(".hero__word--btm", hero);
    var clip = function (v) { return "inset(" + v + " " + v + " " + v + " " + v + " round " + radius + ")"; };
    var tl = gsap.timeline();
    tl.fromTo(top.firstElementChild, { xPercent: -120 * s, x: 0 }, { xPercent: 0, duration: 1.5, ease: "power4.out" }, 0)
      .fromTo(btm.firstElementChild, { xPercent: 120 * s, x: 0 }, { xPercent: 0, duration: 1.5, ease: "power4.out" }, 0)
      .fromTo($(".hero__m1", hero), { clipPath: clip("50%") }, { clipPath: clip("0%"), duration: 1.2, ease: "power4.out" }, 0.2)
      .fromTo($(".hero__foot", hero), { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power4.out" }, 0.3)
      .fromTo($(".hero__m2", hero), { clipPath: clip("50%") }, { clipPath: clip("0%"), duration: 1.2, ease: "power4.out" }, 0.4);

    // الكلمتان تفترقان مع السكرول
    var st = { trigger: hero, start: "top top", end: "bottom top", scrub: 1, invalidateOnRefresh: true };
    gsap.to(top, { xPercent: 100 * s, ease: "none", scrollTrigger: Object.assign({}, st) });
    gsap.to(btm, { xPercent: -100 * s, ease: "none", scrollTrigger: Object.assign({}, st) });
  });

  /* ---------- بارالاكس (980px فما فوق) ---------- */
  if (motion && $$("[data-parallax]").length) {
    var mm = gsap.matchMedia();
    mm.add("(min-width: 980px)", function () {
      $$("[data-parallax]").forEach(function (el) {
        var f = parseFloat(el.dataset.parallax) || -0.1;
        gsap.to(el, {
          y: function () { return f * win.innerHeight; }, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1, invalidateOnRefresh: true }
        });
      });
    });
    cleanups.push(function () { mm.revert(); });
  }

  /* ---------- الدخول عند التحميل ---------- */
  $$("[data-intro]").forEach(function (box) {
    if (!motion) return;
    add(function () {
      gsap.fromTo(box.children, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.1, delay: 0.1 });
    });
  });

  /* ---------- كشف الصور عند وصولها ---------- */
  $$("[data-clip]").forEach(function (el) {
    if (!motion) return;
    add(function () {
      gsap.fromTo(el,
        { clipPath: "inset(12% 12% 12% 12% round " + radius + ")" },
        { clipPath: "inset(0% 0% 0% 0% round " + radius + ")", duration: 1.4, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    });
  });

  /* ---------- كشف النص سطراً سطراً ---------- */
  var reveals = $$("[data-reveal]");
  if (reveals.length && motion && SplitText) {
    var runReveal = function () {
      reveals.forEach(function (el) {
        var split = SplitText.create(el, {
          type: "lines", linesClass: "line", autoSplit: true,
          onSplit: function (self) {
            self.lines.forEach(function (l) {
              l.insertAdjacentHTML("beforeend", '<span class="line-double" aria-hidden="true">' + l.innerHTML + "</span>");
            });
            el.classList.add("is-split");
            var doubles = el.querySelectorAll(".line-double");
            // في العربية يبدأ الكشف من اليمين
            gsap.set(doubles, { clipPath: rtl ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)" });
            return gsap.timeline({ scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 40%", scrub: 0.8 } })
              .to(doubles, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "none", stagger: 1.5 });
          }
        });
        cleanups.push(function () { split.revert(); el.classList.remove("is-split"); });
      });
    };
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { if (!ac.signal.aborted) add(runReveal); });
    else add(runReveal);
  }

  /* ---------- الدائرة التي تتبع الماوس ---------- */
  if (motion && canHover) {
    $$("[data-follow]").forEach(function (card) {
      var f = $(".follow", card);
      if (!f) return;
      var xTo = gsap.quickTo(f, "x", { duration: 0.4, ease: "power3" });
      var yTo = gsap.quickTo(f, "y", { duration: 0.4, ease: "power3" });
      var first = true;
      var move = function (e) {
        var r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        if (first) { xTo(x, x); yTo(y, y); first = false; } else { xTo(x); yTo(y); }
      };
      on(card, "pointerenter", function (e) { f.classList.add("is-active"); move(e); });
      on(card, "pointermove", move);
      on(card, "pointerleave", function () { f.classList.remove("is-active"); first = true; });
    });
  }

  /* ---------- الدائرة الملونة ---------- */
  $$("[data-gc]").forEach(function (el) {
    if (!motion) return;
    var fill = $(".gc__fill", el);
    add(function () {
      gsap.fromTo(fill, { clipPath: "circle(0vmax at 50% 100%)" }, {
        clipPath: "circle(130vmax at 50% 100%)", ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom bottom", scrub: 1 }
      });
    });
  });

  /* ---------- البطاقات المتراكمة ---------- */
  $$("[data-stack]").forEach(function (stack) {
    var items = Array.prototype.slice.call(stack.children);
    stack.style.setProperty("--n", items.length);
    items.forEach(function (it, i) { it.style.setProperty("--i", i); });
    var check = function () {
      stack.classList.remove("can-sticky");
      stack.style.removeProperty("--stack-h");
      if (reduce || win.innerWidth < 1024) return;
      var max = Math.max.apply(null, items.map(function (i) { return i.offsetHeight; }));
      var hdr = $(".hdr__in");
      var topOff = (hdr ? hdr.getBoundingClientRect().bottom : 80) + 24;
      var gap = parseFloat(getComputedStyle(stack).rowGap) || 16;
      // نفعّل التراكم فقط إذا كانت أطول بطاقة تتسع في الشاشة
      if (max <= win.innerHeight - topOff - items.length * gap - 16) {
        stack.style.setProperty("--stack-h", max + "px");
        stack.classList.add("can-sticky");
      }
      if (ScrollTrigger) ScrollTrigger.refresh();
    };
    check();
    on(win, "resize", debounce(check, 200));
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { if (!ac.signal.aborted) check(); });
  });

  /* ---------- شريط الشعارات ---------- */
  $$("[data-marquee]").forEach(function (mq) {
    var track = $(".mq__track", mq), group = $(".mq__group", mq);
    if (!track || !group) return;
    var clones = [], w = 0;
    var build = function () {
      clones.forEach(function (c) { c.remove(); });
      clones = [];
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      w = group.offsetWidth + gap;
      var need = Math.ceil((mq.offsetWidth * 2) / Math.max(w, 1)) + 1;
      for (var i = 0; i < need; i++) {
        var c = group.cloneNode(true);
        c.setAttribute("aria-hidden", "true");
        track.appendChild(c);
        clones.push(c);
      }
    };
    build();
    mq.classList.add("is-ready");
    cleanups.push(function () { clones.forEach(function (c) { c.remove(); }); });
    if (!motion) return;
    var rev = mq.hasAttribute("data-reverse") ? -1 : 1;
    var setX = gsap.quickSetter(track, "x", "px");
    var x = -w / 2;
    var tick = function () {
      var step = (1.5 - Math.pow(0.8, gsap.ticker.deltaRatio())) * 0.9;
      x -= step * scrollDir * rev * s;
      x = gsap.utils.wrap(-w, 0, x);
      setX(x);
    };
    var running = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !running) { gsap.ticker.add(tick); running = true; }
        else if (!e.isIntersecting && running) { gsap.ticker.remove(tick); running = false; }
      });
    });
    io.observe(mq);
    on(win, "resize", debounce(function () { build(); x = gsap.utils.wrap(-w, 0, x); }, 200));
    cleanups.push(function () { io.disconnect(); gsap.ticker.remove(tick); });
  });

  /* ---------- سلايدر الآراء ---------- */
  $$("[data-testi]").forEach(function (sec) {
    var el = $(".swiper", sec);
    if (!Swiper || !el) return;
    var sw = new Swiper(el, {
      modules: swiperModules,
      slidesPerView: "auto", spaceBetween: 20, loop: true, grabCursor: true, speed: 500,
      navigation: { prevEl: $("[data-prev]", sec), nextEl: $("[data-next]", sec) },
      breakpoints: { 900: { spaceBetween: 48 } }
    });
    cleanups.push(function () { sw.destroy(true, true); });
  });

  /* ---------- فلترة الأعمال ---------- */
  $$("[data-filters]").forEach(function (bar) {
    var grid = $("[data-cases]");
    var btns = $$("button", bar);
    if (!grid) return;
    var apply = function (v) {
      btns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === v)); });
      var i = 0;
      $$(".card", grid).forEach(function (c) {
        var ok = v === "all" || (c.dataset.tags || "").split(" ").indexOf(v) > -1;
        c.hidden = !ok;
        c.classList.toggle("is-even", ok && i++ % 2 === 1);
      });
      if (ScrollTrigger) ScrollTrigger.refresh();
    };
    btns.forEach(function (b) {
      on(b, "click", function () {
        apply(b.dataset.filter);
        var u = new URL(win.location.href);
        if (b.dataset.filter === "all") u.searchParams.delete("filter"); else u.searchParams.set("filter", b.dataset.filter);
        win.history.replaceState(win.history.state, "", u);
      });
    });
    var initial = new URLSearchParams(win.location.search).get("filter");
    if (initial && btns.some(function (b) { return b.dataset.filter === initial; })) apply(initial);
  });

  /* ---------- عدّاد الأرقام ---------- */
  $$("[data-count]").forEach(function (el) {
    var to = parseFloat(el.dataset.count) || 0, suf = el.dataset.suffix || "";
    if (!motion) { el.textContent = to + suf; return; }
    var o = { v: 0 };
    el.textContent = "0" + suf;
    add(function () {
      gsap.to(o, { v: to, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: function () { el.textContent = Math.round(o.v) + suf; } });
    });
  });

  /* ---------- نموذج التواصل ---------- */
  $$("[data-contact-form]").forEach(function (form) {
    var status = $(".form__status", form), submit = $("[type=submit]", form);
    var label = submit ? $(".btn__l", submit) : null, original = label ? label.textContent : "";
    on(form, "submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form), endpoint = form.dataset.endpoint;
      if (!endpoint) {
        var body = fd.get("name") + "\n" + fd.get("email") + "\n" + fd.getAll("interest").join(", ") + "\n\n" + fd.get("message");
        win.location.href = "mailto:" + form.dataset.email + "?subject=" + encodeURIComponent(form.dataset.subject || "") + "&body=" + encodeURIComponent(body);
        return;
      }
      if (submit) submit.disabled = true;
      if (label) label.textContent = form.dataset.msgSending;
      status.className = "form__status";
      fetch(endpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          form.reset();
          status.textContent = form.dataset.msgSuccess; status.classList.add("is-ok");
        })
        .catch(function () { status.textContent = form.dataset.msgError; status.classList.add("is-err"); })
        .then(function () { if (submit) submit.disabled = false; if (label) label.textContent = original; });
    });
  });

  /* ---------- تحديث القياسات بعد تحميل الخطوط والصور ---------- */
  if (ScrollTrigger) {
    var refresh = function () { if (!ac.signal.aborted) ScrollTrigger.refresh(); };
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(refresh);
    if (doc.readyState === "complete") setTimeout(refresh, 50); else on(win, "load", refresh);
  }

  /* ---------- دالة التنظيف ---------- */
  return function destroy() {
    ac.abort();
    cleanups.forEach(function (fn) { try { fn(); } catch (e) { /* ignore */ } });
    if (ctx) ctx.revert();
    html.classList.remove("is-scrolled");
  };
}

window.initMotion = initMotion;

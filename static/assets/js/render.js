/* =====================================================================
   render.js — يبني الصفحات من content.js
   ---------------------------------------------------------------------
   كل صفحة HTML فيها <body data-page="…">، وهذا الملف يرسم الهيدر
   والمحتوى والفوتر حسب اسم الصفحة واللغة الحالية.
   لتعديل النصوص: content.js — لتعديل الشكل: style.css
   ===================================================================== */
(function () {
  var S = window.SITE;
  var html = document.documentElement;
  var L = html.lang === "en" ? "en" : "ar";
  var other = L === "ar" ? "en" : "ar";
  var page = document.body.dataset.page || "home";
  var params = new URLSearchParams(location.search);

  /* ---------- أدوات مساعدة ---------- */
  function t(v) { return v && typeof v === "object" && ("ar" in v || "en" in v) ? (v[L] != null ? v[L] : v.ar) : (v == null ? "" : v); }
  function esc(str) { return String(str).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function T(v) { return esc(t(v)); }
  function href(p, extra) {
    var map = { home: "index.html", work: "work.html", about: "about.html", contact: "contact.html", services: "index.html#services", "case": "case.html" };
    return (map[p] || p) + (extra || "");
  }
  function caseHref(slug) { return href("case", "?slug=" + encodeURIComponent(slug)); }
  function langHref() {
    var p = new URLSearchParams(location.search);
    p.set("lang", other);
    return location.pathname.split("/").pop() + "?" + p.toString() + location.hash;
  }
  function svc(slug) { return S.services.filter(function (x) { return x.slug === slug; })[0]; }
  function mediaTag(src, alt, extra) {
    if (/\.(mp4|webm)$/i.test(src)) return '<video src="' + esc(src) + '" autoplay muted loop playsinline preload="metadata"' + (extra || "") + "></video>";
    return '<img src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy" decoding="async"' + (extra || "") + ">";
  }

  /* ---------- أيقونات ---------- */
  var I = {
    arrow: '<svg class="ico ico--flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg class="ico ico--flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    diag: '<svg class="ico ico--flip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    down: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    quote: '<svg class="quote__mark" viewBox="0 0 64 48" fill="currentColor" aria-hidden="true"><path d="M0 48V28C0 12 9 2 24 0l2 7c-8 2-12 8-12 15h12v26H0Zm38 0V28C38 12 47 2 62 0l2 7c-8 2-12 8-12 15h12v26H38Z"/></svg>',
    shape: {
      circle: '<circle cx="24" cy="24" r="22"/>',
      square: '<rect x="3" y="3" width="42" height="42" rx="6"/>',
      arch: '<path d="M4 46V24a20 20 0 0 1 40 0v22Z"/>',
      triangle: '<path d="M24 3 46 45H2Z"/>',
      wave: '<path d="M2 30c6-12 12-12 18 0s12 12 18 0 8-8 8-8v24H2Z"/><circle cx="24" cy="12" r="8"/>'
    }
  };
  function shape(name, cls) { return '<svg class="' + cls + '" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">' + (I.shape[name] || I.shape.circle) + "</svg>"; }
  // زهرة الـ hover: دائرة + 12 دائرة صغيرة حولها
  var BLOB = (function () {
    var c = '<circle cx="50" cy="50" r="40"/>';
    for (var i = 0; i < 12; i++) { var a = (i / 12) * Math.PI * 2; c += '<circle cx="' + (50 + 39 * Math.cos(a)).toFixed(2) + '" cy="' + (50 + 39 * Math.sin(a)).toFixed(2) + '" r="11"/>'; }
    return '<svg class="blob" viewBox="0 0 100 100" aria-hidden="true">' + c + "</svg>";
  })();
  var ringId = 0;
  function ring(text, cls, r) {
    var id = "ring-" + (++ringId); r = r || 82;
    return '<svg class="' + cls + '" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="' + id + '" d="M100,100 m-' + r + ',0 a' + r + "," + r + " 0 1,1 " + 2 * r + ",0 a" + r + "," + r + " 0 1,1 -" + 2 * r + ',0"/></defs><text><textPath href="#' + id + '">' + esc(text) + "</textPath></text></svg>";
  }

  /* ---------- مكوّنات ---------- */
  function btn(label, url, mod) {
    return '<a class="btn' + (mod ? " " + mod : "") + '" href="' + esc(url) + '"><span class="btn__c btn__c--a">' + I.arrow + '</span><span class="btn__l">' + esc(label) + '</span><span class="btn__c btn__c--b">' + I.arrow + "</span></a>";
  }
  function follow() {
    return '<div class="follow" aria-hidden="true"><div class="follow__in"><div class="follow__ring">' + ring(t(S.ui.viewCase), "", 84) + '</div><div class="follow__blob">' + BLOB + I.diag + "</div></div></div>";
  }
  function card(c, i) {
    var tags = c.services.map(function (sl) { var x = svc(sl); return x ? '<li class="chip">' + shape(x.icon, "ico") + T(x.title) + "</li>" : ""; }).join("");
    return '<a class="card' + (i % 2 ? " is-even" : "") + '" href="' + caseHref(c.slug) + '" data-follow data-tags="' + esc(c.services.join(" ")) + '">' +
      '<div class="media card__media">' + mediaTag(c.video || c.cover, t(c.title)) + "</div>" + follow() +
      '<h3 class="card__title">' + T(c.title) + '</h3><p class="card__cat">' + T(c.category) + '</p><ul class="card__tags">' + tags + "</ul></a>";
  }
  function serviceCard(x, i) {
    return '<article class="svc" style="--bg:' + x.bg + ";--fg:" + x.fg + '">' +
      '<div class="svc__top">' + shape(x.icon, "svc__icon") + '<h3 class="svc__title">' + T(x.title) + "</h3></div>" +
      '<div class="svc__bottom"><div class="svc__text"><p>' + T(x.text) + "</p>" +
      '<a class="link-arrow" href="' + href("work", "?filter=" + x.slug) + '">' + T(S.ui.more) + I.diag + "</a></div>" +
      '<ul class="svc__tags">' + x.tags.map(function (g) { return '<li class="chip chip--line">' + T(g) + "</li>"; }).join("") + "</ul></div></article>";
  }
  function stepCard(x) {
    return '<article class="svc" style="--bg:' + x.bg + ";--fg:" + x.fg + '"><div class="svc__top"><h3 class="svc__title">' + T(x.title) + '</h3></div><div class="svc__bottom"><div class="svc__text"><p>' + T(x.text) + "</p></div></div></article>";
  }
  function sectionHead(eyebrow, title, tag) {
    tag = tag || "h2";
    return '<div class="section-head"><span class="eyebrow">' + T(eyebrow) + "</span><" + tag + ">" + T(title) + "</" + tag + "></div>";
  }
  function marquee() {
    var half = Math.ceil(S.clients.length / 2);
    function row(list, rev) {
      return '<div class="mq" data-marquee' + (rev ? " data-reverse" : "") + '><div class="mq__track"><ul class="mq__group">' +
        list.map(function (c) { return '<li class="mq__item"><img src="' + esc(c.logo) + '" alt="' + esc(c.name) + '" loading="lazy"></li>'; }).join("") + "</ul></div></div>";
    }
    return '<section class="section"><div class="wrap">' + sectionHead(S.home.clientsEyebrow, S.home.clientsTitle) + "</div>" +
      row(S.clients.slice(0, half)) + row(S.clients.slice(half), true) + "</section>";
  }
  function cta() {
    var h = S.home;
    return '<section class="section wrap"><div class="cta"><span class="cta__deco" aria-hidden="true"></span><div class="media cta__media">' + mediaTag(h.ctaImage, "") + "</div>" +
      '<div class="cta__text"><h2>' + T(h.ctaTitle) + "</h2><p>" + T(h.ctaText) + "</p>" + btn(t(S.ui.letsTalk), href("contact")) + "</div></div></section>";
  }

  /* ---------- الهيدر + القائمة ---------- */
  function header() {
    var name = t(S.brand.name).split(" ");
    var items = S.nav.map(function (n) {
      var act = n.page === page || (page === "case" && n.page === "work");
      return '<li><a href="' + href(n.page) + '"' + (act ? ' class="is-active" aria-current="page"' : "") + ">" + T(n.label) + "</a></li>";
    }).join("");
    var ovItems = '<li><a href="' + href("home") + '">' + T(S.ui.home) + "</a></li>" + S.nav.map(function (n) { return '<li><a href="' + href(n.page) + '">' + T(n.label) + "</a></li>"; }).join("");
    return '<a class="skip-link" href="#main">' + T(S.ui.skip) + "</a>" +
      '<header class="hdr"><div class="hdr__in wrap">' +
      '<a class="hdr__logo" href="' + href("home") + '">' + esc(name[0]) + (name[1] ? " <span>" + esc(name.slice(1).join(" ")) + "</span>" : "") + "</a>" +
      '<nav class="hdr__nav" aria-label="' + T(S.ui.menu) + '"><div class="hdr__menu" data-nav><span class="hdr__ind" data-nav-ind aria-hidden="true"></span><ul>' + items + "</ul></div></nav>" +
      '<div class="hdr__actions"><a class="hdr__lang" href="' + esc(langHref()) + '" hreflang="' + other + '" lang="' + other + '">' + T(S.ui.langSwitch) + "</a>" +
      btn(t(S.ui.startProject), href("contact"), "hdr__cta") +
      '<button class="menu-btn" type="button" data-menu-btn aria-expanded="false" aria-controls="ov" data-label-open="' + T(S.ui.menu) + '" data-label-close="' + T(S.ui.close) + '">' + T(S.ui.menu) + "</button></div>" +
      "</div></header>" +
      '<div class="ov" id="ov" data-ov inert aria-hidden="true"><div class="ov__outer"><div class="ov__inner"><nav class="ov__nav"><ul>' + ovItems + "</ul></nav>" +
      '<div class="ov__extra"><a class="chip" href="' + href("contact") + '">' + T(S.ui.startProject) + '</a><a class="chip" href="' + esc(langHref()) + '" lang="' + other + '">' + T(S.ui.langSwitch) + "</a></div></div></div></div>";
  }

  /* ---------- الفوتر ---------- */
  function footer() {
    var b = S.brand;
    var tiles = S.services.map(function (x) {
      return '<a class="tile" href="' + href("work", "?filter=" + x.slug) + '" style="--bg:' + x.bg + ";--fg:" + x.fg + '">' + shape(x.icon, "tile__icon") + '<span class="tile__title">' + T(x.title) + "</span></a>";
    }).join("");
    var nav = '<li><a href="' + href("home") + '">' + T(S.ui.home) + "</a></li>" + S.nav.map(function (n) { return '<li><a href="' + href(n.page) + '">' + T(n.label) + "</a></li>"; }).join("");
    var socials = b.socials.map(function (x) { return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.label) + "</a>"; }).join("");
    return '<footer class="ftr"><div class="tiles">' + tiles + "</div>" +
      '<div class="wrap ftr__grid"><div><div class="ftr__brand">' + T(b.name) + "</div>" +
      '<p class="now">' + T(b.nowPlaying.label) + ': <a href="' + esc(b.nowPlaying.url) + '" target="_blank" rel="noopener">' + esc(b.nowPlaying.artist) + " — " + esc(b.nowPlaying.track) + "</a></p></div>" +
      '<div class="ftr__col"><h3>' + T(S.ui.menu) + "</h3><ul>" + nav + "</ul></div>" +
      '<div class="ftr__col"><h3>' + T(S.nav.filter(function (n) { return n.page === "contact"; })[0].label) + "</h3><ul>" +
      '<li><a href="mailto:' + esc(b.email) + '" dir="ltr">' + esc(b.email) + "</a></li>" +
      '<li><a href="tel:' + esc(b.phone.replace(/\s/g, "")) + '" dir="ltr">' + esc(b.phone) + "</a></li><li>" + T(b.city) + "</li></ul>" +
      '<div class="socials" style="margin-top:1.25rem">' + socials + "</div></div></div>" +
      '<div class="wrap ftr__bottom"><span>© ' + new Date().getFullYear() + " " + T(b.name) + ". " + T(S.ui.rights) + '</span><a href="' + esc(langHref()) + '" lang="' + other + '">' + T(S.ui.langSwitch) + "</a></div></footer>";
  }

  /* ---------- الصفحات ---------- */
  var pages = {
    home: function () {
      var h = S.home, b = S.brand;
      var featured = S.cases.filter(function (c) { return c.featured; });
      return (
        '<section class="hero" data-hero><div class="wrap"><div class="hero__c">' +
        '<h1 class="visually-hidden">' + T(b.name) + " — " + T(b.role) + "</h1>" +
        '<div class="hero__word hero__word--top" aria-hidden="true"><span>' + T(b.wordTop) + "</span></div>" +
        '<div class="hero__word hero__word--btm" aria-hidden="true"><span>' + T(b.wordBottom) + "</span></div>" +
        '<div class="hero__m1 media" data-parallax="-0.08">' + mediaTag(h.heroImages[0], "") + "</div>" +
        '<div class="hero__m2 media" data-parallax="-0.16">' + mediaTag(h.heroImages[1], "") + "</div>" +
        '<div class="hero__foot"><a class="badge" href="#intro" aria-label="' + T(S.ui.scroll) + '">' + ring(t(S.ui.scroll), "badge__ring", 80) + '<span class="badge__dot">' + I.down + "</span></a>" +
        '<p class="hero__tagline">' + T(h.tagline) + "</p></div></div></div></section>" +

        '<section class="section intro wrap" id="intro"><p class="big-text reveal" data-reveal>' + T(h.intro) + "</p>" +
        '<div class="intro__cta">' + btn(t(S.ui.startProject), href("contact")) + "</div></section>" +

        '<section class="section wrap" id="work">' + sectionHead(h.casesEyebrow, h.casesTitle) +
        '<div class="cases" data-cases>' + featured.map(card).join("") + "</div>" +
        '<div class="cases__more">' + btn(t(S.ui.viewAllWork), href("work")) + "</div></section>" +

        '<section class="gc"><div class="gc__reveal" data-gc aria-hidden="true"><div class="gc__fill"></div></div><div class="gc__body">' +
        '<div class="stm wrap">' +
        '<div class="stm__g"><h2 class="stm__t">' + T(h.stickyTitle1) + "</h2>" +
        '<div class="stm__m stm__m1"><div class="media">' + mediaTag(h.stickyImages[0], "") + "</div></div>" +
        '<div class="stm__m stm__m2"><div class="media">' + mediaTag(h.stickyImages[1], "") + "</div></div></div>" +
        '<div class="stm__g"><h2 class="stm__t">' + T(h.stickyTitle2) + "</h2>" +
        '<div class="stm__m stm__m3"><div class="media">' + mediaTag(h.stickyImages[2], "") + "</div></div></div></div>" +
        '<div class="wrap" id="services">' + sectionHead(h.servicesEyebrow, h.servicesTitle) +
        '<div class="stack" data-stack>' + S.services.map(serviceCard).join("") + "</div></div>" +
        '<div class="section wrap"><div class="tm"><div class="tm__text"><span class="eyebrow">' + T(h.aboutEyebrow) + "</span><h2>" + T(h.aboutTitle) + "</h2><p>" + T(h.aboutText) + "</p>" +
        btn(t(h.aboutCta), href("about"), "btn--light") + '</div><div class="media tm__media" data-clip>' + mediaTag(h.aboutImage, "") + "</div></div></div>" +
        "</div></section>" +

        '<section class="section wrap"><div class="t2m"><div class="media t2m__small" data-parallax="-0.1">' + mediaTag(h.approachImages[0], "") + "</div>" +
        '<div class="t2m__text"><span class="eyebrow">' + T(h.approachEyebrow) + "</span><h2>" + T(h.approachTitle) + "</h2><p>" + T(h.approachText) + "</p>" +
        btn(t(h.approachCta), href("about")) + '</div><div class="media t2m__big" data-clip>' + mediaTag(h.approachImages[1], "") + "</div></div></section>" +

        '<section class="section testi" data-testi><div class="wrap testi__head"><h2>' + T(h.testimonialsTitle) + "</h2>" +
        '<div class="testi__nav"><button class="icon-btn" type="button" data-prev aria-label="' + T(S.ui.prev) + '">' + I.back + "</button>" +
        '<button class="icon-btn" type="button" data-next aria-label="' + T(S.ui.next) + '">' + I.arrow + "</button></div></div>" +
        '<div class="swiper"><div class="swiper-wrapper">' + S.testimonials.map(function (q) {
          return '<div class="swiper-slide"><figure class="quote">' + I.quote + "<blockquote><p>" + T(q.quote) + "</p></blockquote><figcaption><strong>" + T(q.name) + "</strong><span>" + T(q.company) + "</span></figcaption></figure></div>";
        }).join("") + "</div></div></section>" +

        marquee() + cta()
      );
    },

    work: function () {
      var w = S.work;
      var filters = '<button type="button" data-filter="all" aria-pressed="true">' + T(S.ui.all) + "</button>" +
        S.services.map(function (x) { return '<button type="button" data-filter="' + x.slug + '" aria-pressed="false">' + T(x.title) + "</button>"; }).join("");
      return '<section class="page-hero wrap" data-intro><span class="eyebrow">' + T(w.eyebrow) + "</span><h1>" + T(w.title) + '</h1><p class="big-text">' + T(w.text) + "</p></section>" +
        '<section class="wrap"><div class="filters" data-filters role="group" aria-label="' + T(S.ui.services) + '">' + filters + "</div>" +
        '<div class="cases" data-cases>' + S.cases.map(card).join("") + "</div></section>" + cta();
    },

    "case": function () {
      var idx = Math.max(0, S.cases.findIndex(function (c) { return c.slug === params.get("slug"); }));
      var c = S.cases[idx], next = S.cases[(idx + 1) % S.cases.length];
      var chips = c.services.map(function (sl) { var x = svc(sl); return x ? '<a class="chip" href="' + href("work", "?filter=" + sl) + '">' + shape(x.icon, "ico") + T(x.title) + "</a>" : ""; }).join("");
      document.title = t(c.title) + " — " + t(S.brand.name);
      return '<article><section class="case-hero wrap" data-intro>' +
        '<a class="link-arrow case-hero__back" href="' + href("work") + '">' + I.back + T(S.ui.backToWork) + "</a><div>" +
        '<span class="eyebrow">' + T(c.category) + "</span><h1>" + T(c.title) + "</h1></div>" +
        '<dl class="case-meta"><div><dt>' + T(S.ui.client) + "</dt><dd>" + T(c.client) + "</dd></div><div><dt>" + T(S.ui.year) + "</dt><dd>" + esc(c.year) + "</dd></div>" +
        "<div><dt>" + T(S.ui.services) + '</dt><dd class="case-meta__chips">' + chips + "</dd></div></dl></section>" +
        '<div class="wrap"><div class="media case-cover" data-clip>' + mediaTag(c.video || c.cover, t(c.title)) + "</div></div>" +
        '<section class="section wrap intro"><p class="big-text reveal" data-reveal>' + T(c.summary) + "</p></section>" +
        '<section class="section wrap"><div class="case-cols"><div><h2>' + T(S.ui.challenge) + "</h2><p>" + T(c.challenge) + "</p></div><div><h2>" + T(S.ui.solution) + "</h2><p>" + T(c.solution) + "</p></div></div></section>" +
        '<section class="section wrap"><div class="gallery">' + (c.gallery || []).map(function (g) {
          return '<div class="media' + (g.size === "full" ? " is-full" : "") + '" data-clip>' + mediaTag(g.src, t(c.title)) + "</div>";
        }).join("") + "</div></section>" +
        '<section class="section wrap"><a class="next-case" href="' + caseHref(next.slug) + '" data-follow>' + follow() +
        '<div><span class="eyebrow">' + T(S.ui.nextProject) + '</span><div class="next-case__title h1">' + T(next.title) + "</div></div>" +
        '<div class="media next-case__media">' + mediaTag(next.cover, t(next.title)) + "</div></a></section></article>";
    },

    about: function () {
      var a = S.about;
      return '<section class="page-hero wrap"><div class="about-hero"><div data-intro><span class="eyebrow">' + T(a.eyebrow) + "</span><h1>" + T(a.title) + '</h1><p class="big-text">' + T(a.intro) + "</p></div>" +
        '<div class="media about-hero__media" data-clip>' + mediaTag(a.portrait, t(S.brand.name)) + "</div></div></section>" +
        '<section class="section wrap"><div class="story"><p class="big-text reveal" data-reveal>' + T(a.story) + "</p><div>" +
        a.paragraphs.map(function (p) { return "<p>" + T(p) + "</p>"; }).join("") + "</div></div></section>" +
        '<section class="section wrap"><div class="stats">' + a.stats.map(function (x) {
          return '<div class="stat"><span class="stat__v" data-count="' + x.value + '" data-suffix="' + esc(x.suffix || "") + '">' + x.value + esc(x.suffix || "") + '</span><span class="stat__l">' + T(x.label) + "</span></div>";
        }).join("") + "</div></section>" +
        '<section class="section wrap">' + sectionHead(a.stepsEyebrow, a.stepsTitle) + '<div class="stack" data-stack>' + a.steps.map(stepCard).join("") + "</div></section>" +
        marquee() + cta();
    },

    contact: function () {
      var c = S.contact, f = c.form, b = S.brand;
      var choices = S.services.map(function (x, i) {
        return '<input type="checkbox" id="int-' + i + '" name="interest" value="' + T(x.title) + '"><label for="int-' + i + '">' + T(x.title) + "</label>";
      }).join("");
      return '<section class="page-hero wrap" data-intro><span class="eyebrow">' + T(c.eyebrow) + "</span><h1>" + T(c.title) + '</h1><p class="big-text">' + T(c.text) + "</p></section>" +
        '<section class="section wrap contact page-tight">' +
        '<form class="form" data-contact-form novalidate data-endpoint="' + esc(b.formEndpoint || "") + '" data-email="' + esc(b.email) + '" data-subject="' + T(c.title) + '"' +
        ' data-msg-sending="' + T(f.sending) + '" data-msg-success="' + T(f.success) + '" data-msg-error="' + T(f.error) + '">' +
        '<div class="field"><label for="f-name">' + T(f.name) + '</label><input id="f-name" name="name" autocomplete="name" required></div>' +
        '<div class="field"><label for="f-email">' + T(f.email) + '</label><input id="f-email" name="email" type="email" autocomplete="email" required dir="auto"></div>' +
        '<div class="field"><fieldset><legend>' + T(f.interest) + '</legend><div class="choices">' + choices + "</div></fieldset></div>" +
        '<div class="field"><label for="f-msg">' + T(f.message) + '</label><textarea id="f-msg" name="message" required></textarea></div>' +
        '<div><button class="btn" type="submit"><span class="btn__c btn__c--a">' + I.arrow + '</span><span class="btn__l">' + T(f.send) + '</span><span class="btn__c btn__c--b">' + I.arrow + "</span></button></div>" +
        '<p class="form__status" role="status" aria-live="polite"></p></form>' +
        '<aside class="contact__details"><h2 class="h3">' + T(c.detailsTitle) + "</h2>" +
        '<a class="contact__big" href="mailto:' + esc(b.email) + '" dir="ltr">' + esc(b.email) + "</a>" +
        '<a class="contact__big" href="tel:' + esc(b.phone.replace(/\s/g, "")) + '" dir="ltr">' + esc(b.phone) + "</a>" +
        "<p>" + T(b.city) + '</p><div class="socials">' + b.socials.map(function (x) { return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.label) + "</a>"; }).join("") + "</div></aside></section>";
    }
  };

  /* ---------- الرسم ---------- */
  var titles = { home: S.brand.role, work: S.work.title, about: S.about.title, contact: S.contact.title };
  if (page !== "case") document.title = (page === "home" ? t(S.brand.name) + " — " + t(titles.home) : t(titles[page]) + " — " + t(S.brand.name));
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t(S.home.tagline));

  document.getElementById("site-header").outerHTML = header();
  document.getElementById("main").innerHTML = (pages[page] || pages.home)();
  document.getElementById("site-footer").outerHTML = footer();
})();

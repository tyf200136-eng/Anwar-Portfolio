/* app.js — يشغّل الحركات بعد رسم الصفحة */
(function () {
  window.initMotion(document, {
    gsap: window.gsap,
    ScrollTrigger: window.ScrollTrigger,
    SplitText: window.SplitText,
    Swiper: window.Swiper
  });
})();

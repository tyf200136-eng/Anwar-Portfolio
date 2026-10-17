"use client";
// يشغّل كل الحركات (lib/motion.js) بعد عرض كل صفحة، وينظفها عند الانتقال لصفحة أخرى
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Swiper from "swiper";
import { Navigation, A11y } from "swiper/modules";
import initMotion from "@/lib/motion";

export default function MotionRoot() {
  const pathname = usePathname();
  const first = useRef(true);
  const fromHistory = useRef(false);

  // زر الرجوع في المتصفح: نحافظ على مكان السكرول
  useEffect(() => {
    const onPop = () => { fromHistory.current = true; };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    // عند فتح صفحة جديدة من رابط: ابدأ من أعلى الصفحة
    if (!first.current && !fromHistory.current && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    first.current = false;
    fromHistory.current = false;

    const destroy = initMotion(document, {
      gsap, ScrollTrigger, SplitText, Swiper, swiperModules: [Navigation, A11y]
    });
    return () => destroy();
  }, [pathname]);

  return null;
}

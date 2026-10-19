/* =====================================================================
   content.js — كل محتوى الموقع في مكان واحد
   ---------------------------------------------------------------------
   • كل نص مكتوب باللغتين: { ar: "…", en: "…" }
   • غيّر النصوص والصور هنا فقط، والصفحات تتحدث تلقائياً.
   • الصور موجودة في public/assets/img/ — استبدلها بصورك بنفس الاسم،
     أو ضع اسم ملف جديد هنا (jpg / png / webp / svg / avif).
   • المحتوى الحالي تجريبي (أسماء عملاء وآراء وهمية) — استبدله بمحتواك الحقيقي.
   ===================================================================== */

const SITE = {
  /* ---------- معلومات المصمم ---------- */
  brand: {
    name: { ar: "سارة ناصر", en: "Sara Nasser" },
    // الكلمتان الكبيرتان في أعلى الصفحة الرئيسية
    wordTop: { ar: "سارة", en: "Sara" },
    wordBottom: { ar: "ناصر", en: "Nasser" },
    role: { ar: "مصممة جرافيك وهويات بصرية", en: "Graphic & brand designer" },
    email: "hello@example.com",
    phone: "+966 50 000 0000",
    city: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    // رابط استقبال رسائل نموذج التواصل (مثلاً من formspree.io).
    // اتركه فارغاً ليفتح النموذج برنامج البريد مباشرة.
    formEndpoint: "",
    socials: [
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "Behance", url: "https://behance.net/" },
      { label: "LinkedIn", url: "https://linkedin.com/" },
      { label: "Dribbble", url: "https://dribbble.com/" }
    ],
    nowPlaying: {
      label: { ar: "في الاستوديو أستمع الآن إلى", en: "In the studio I'm listening to" },
      artist: "Fairuz",
      track: "Shady",
      url: "https://open.spotify.com/"
    }
  },

  /* ---------- القائمة ---------- */
  nav: [
    { page: "work", label: { ar: "الأعمال", en: "Work" } },
    { page: "about", label: { ar: "من أنا", en: "About" } },
    { page: "contact", label: { ar: "تواصل", en: "Contact" } }
  ],

  /* ---------- نصوص الواجهة العامة ---------- */
  ui: {
    home: { ar: "الرئيسية", en: "Home" },
    startProject: { ar: "ابدأ مشروعك", en: "Start your project" },
    viewAllWork: { ar: "شاهد كل الأعمال", en: "View all work" },
    more: { ar: "اعرف أكثر", en: "Learn more" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
    viewCase: { ar: "عرض المشروع • عرض المشروع • ", en: "VIEW CASE • VIEW CASE • VIEW CASE • " },
    scroll: { ar: "مرّر للأسفل • مرّر للأسفل • ", en: "SCROLL DOWN • SCROLL DOWN • " },
    all: { ar: "الكل", en: "All" },
    client: { ar: "العميل", en: "Client" },
    year: { ar: "السنة", en: "Year" },
    services: { ar: "الخدمات", en: "Services" },
    challenge: { ar: "التحدي", en: "The challenge" },
    solution: { ar: "الحل", en: "The solution" },
    nextProject: { ar: "المشروع التالي", en: "Next project" },
    backToWork: { ar: "كل الأعمال", en: "All work" },
    prev: { ar: "السابق", en: "Previous" },
    next: { ar: "التالي", en: "Next" },
    skip: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
    rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
    langSwitch: { ar: "English", en: "عربي" },
    letsTalk: { ar: "لنتحدث", en: "Let's talk" }
  },

  /* ---------- الصفحة الرئيسية ---------- */
  home: {
    heroImages: ["assets/img/hero-1.svg", "assets/img/hero-2.svg"],
    tagline: { ar: "تصميم جرافيك لأصحاب الأفكار الواضحة", en: "Graphic design for founders with a clear vision" },
    intro: {
      ar: "أؤمن أن وراء كل تصميم جيد فكرة واضحة، وأن التفاصيل هي ما يمنحها حضور. أنا مصممة جرافيك أستمتع بتطوير الأفكار وتحويلها إلى حلول بصرية متكاملة. أحرص أن يكون لكل مشروع أسلوبه وشخصيته الخاصة، وأولي التفاصيل عناية كبيرة للوصول إلى نتيجة متناسقه ومدروسة.",
      en: "I believe that behind every great design lies a clear idea, and it is the details that give it presence. As a graphic designer, I enjoy developing concepts and turning them into cohesive visual solutions. I strive to ensure every project has its own unique style and personality, paying close attention to detail to achieve a harmonious and well crafted result."
    },
    casesEyebrow: { ar: "الأعمال", en: "Work" },
    casesTitle: { ar: "نتائج لعلامات تعرف من هي", en: "Results for brands that know who they are" },
    stickyTitle1: { ar: "من الفكرة", en: "From idea" },
    stickyTitle2: { ar: "إلى التنفيذ", en: "to execution" },
    stickyImages: ["assets/img/process-1.svg", "assets/img/process-2.svg", "assets/img/process-3.svg"],
    servicesEyebrow: { ar: "الخدمات", en: "Services" },
    servicesTitle: { ar: "كل ما تحتاجه علامتك، من مكان واحد", en: "Everything your brand needs, in one place" },
    aboutEyebrow: { ar: "من أنا", en: "About" },
    aboutTitle: { ar: "مصممة تهتم بالتفاصيل", en: "A designer who sweats the details" },
    aboutText: {
      ar: "أنا سارة، تعلّمت المهنة في وكالات تصميم كبيرة وعملت مع علامات معروفة في المنطقة. اليوم أعمل من استوديو صغير في الرياض، بنفس المعايير، لكل علامة تؤمن أن التصميم أكثر من مجرد شعار.",
      en: "I'm Sara. I learned the craft in large design agencies, working with well-known brands across the region. Today I work from a small studio in Riyadh with the same standards, for every brand that believes design is more than a logo."
    },
    aboutImage: "assets/img/studio.svg",
    aboutCta: { ar: "اقرأ قصتي", en: "Read my story" },
    approachEyebrow: { ar: "طريقة العمل", en: "Approach" },
    approachTitle: { ar: "أعمل معك، لا لأجلك فقط", en: "I work with you, not just for you" },
    approachText: {
      ar: "أقدّم لك مقترحاً مدروساً وآخذك معي في طريقة تفكيري. لا ألوان عشوائية هنا وخطوط هناك؛ المهم أن يكون الكل متماسكاً.",
      en: "I build a considered proposal and take you through my thinking. No random colour here and a line there; the whole has to hold together."
    },
    approachImages: ["assets/img/desk-1.svg", "assets/img/desk-2.svg"],
    approachCta: { ar: "اكتشف طريقة عملي", en: "Discover my approach" },
    testimonialsTitle: { ar: "أستطيع أن أحكي كل شيء بنفسي، لكن عملائي يحكونه أفضل", en: "I could tell you all of this myself, but my clients say it better" },
    clientsEyebrow: { ar: "العملاء", en: "Clients" },
    clientsTitle: { ar: "فخورة بأن أكون جزءاً من هذه العلامات", en: "Proud to be part of these brands" },
    ctaTitle: { ar: "جاهز تعطي علامتك مكانها في العالم؟", en: "Ready to give your brand its place in the world?" },
    ctaText: { ar: "لنجلس معاً. أخبرني بما تفكر فيه، وسنعرف بسرعة إن كنا مناسبين لبعض.", en: "Let's sit down together. Tell me what you have in mind and we'll both know quickly if it clicks." },
    ctaImage: "assets/img/cta.svg"
  },

  /* ---------- الخدمات (تظهر كبطاقات متراكمة وفي الفوتر وفي الفلترة) ---------- */
  // icon: circle | square | arch | triangle | wave
    services: [
    {
      slug: "identity", icon: "square", bg: "#ff7a59", fg: "#161412",
      title: { ar: "هوية بصرية", en: "Visual identity" },
      text: {
        ar: "يتعرف الناس على علامتك قبل أن يقرؤوا كلمة واحدة: من لون، أو شكل، أو خط. الهوية ليست زينة تضاف لاحقاً، بل هي طريقة وقوف علامتك في العالم.",
        en: "People recognise your brand before reading a single word: a colour, a shape, a typeface. Identity isn't decoration added later; it's how your brand stands in the world."
      },
      tags: [{ ar: "الشعار", en: "Logo" }, { ar: "النظام البصري", en: "Visual system" }, { ar: "دليل الهوية", en: "Brand guidelines" }]
    },
    {
      slug: "social", icon: "wave", bg: "#d4f36b", fg: "#161412",
      title: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social media posts" },
      text: {
        ar: "منشورات وقوالب تحافظ على هوية علامتك في كل منصة، وتلفت الانتباه من أول نظرة.",
        en: "Posts and templates that keep your brand consistent on every platform and catch the eye at first glance."
      },
      tags: [{ ar: "منشورات", en: "Posts" }, { ar: "قصص", en: "Stories" }, { ar: "قوالب", en: "Templates" }]
    },
    {
      slug: "presentations", icon: "arch", bg: "#c6b6ff", fg: "#161412",
      title: { ar: "عروض تقديمية", en: "Presentations" },
      text: { ar: "عروض واضحة ومقنعة تحكي قصتك.", en: "Clear, persuasive decks that tell your story." },
      tags: [{ ar: "عروض المستثمرين", en: "Pitch decks" }, { ar: "عروض الشركات", en: "Company profiles" }]
    },
    {
      slug: "marketing", icon: "triangle", bg: "#ffc46b", fg: "#161412",
      title: { ar: "تطبيقات التسويق والعلامات التجارية", en: "Marketing & brand applications" },
      text: { ar: "تطبيق الهوية على كل ما يحتاجه التسويق.", en: "Applying your brand to everything marketing needs." },
      tags: [{ ar: "إعلانات", en: "Ads" }, { ar: "مطبوعات", en: "Print" }]
    }
  ],

  /* ---------- الأعمال ---------- */
  cases: [
        {
      slug: "crumeli", year: "2026", featured: true, display: "long",
      title: { ar: "كرومِلي", en: "Crumeli" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "كرومِلي — كوكيز مصنوعة يدوياً", en: "Crumeli — Handmade cookies" },
      services: ["identity"],
      cover: "assets/img/work/crumeli/cover5.jpg", video: "",
      summary: { ar: "هوية بصرية لعلامة كوكيز مصنوعة يدوياً، مستوحاة من فتات الكوكيز.", en: "A visual identity for a handmade cookie brand, inspired by cookie crumbs." },
      challenge: { ar: "اكتب هنا التحدي أو هدف العميل.", en: "Describe the client's goal or challenge here." },
      solution: { ar: "اكتب هنا كيف حليت التحدي.", en: "Describe how you solved it here." },
      gallery: [
        { src: "assets/img/work/crumeli/cr1.jpg" },
        { src: "assets/img/work/crumeli/cr2.jpg" },
        { src: "assets/img/work/crumeli/cr3.jpg" },
        { src: "assets/img/work/crumeli/cr4.jpg" },
        { src: "assets/img/work/crumeli/cr5.jpg" }
      ]
    },
    {
      slug: "coffee", year: "2026", featured: true,
      title: { ar: "عنوان القهوة", en: "Coffee Address" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social media posts" },
      client: { ar: "عنوان القهوة", en: "Coffee Address" },
      services: ["social"],
      cover: "assets/img/work/coffee/cover.png", video: "",
      summary: { ar: "سلسلة منشورات لحسابات عنوان القهوة على وسائل التواصل الاجتماعي.", en: "A series of social media posts for Coffee Address." },
      challenge: { ar: "اكتب هنا التحدي أو هدف العميل.", en: "Describe the client's goal or challenge here." },
      solution: { ar: "اكتب هنا كيف حليت التحدي.", en: "Describe how you solved it here." },
      gallery: [
        { src: "assets/img/work/coffee/co1.png", size: "half" },
        { src: "assets/img/work/coffee/co2.png", size: "half" },
        { src: "assets/img/work/coffee/co3.png", size: "half" },
        { src: "assets/img/work/coffee/co4.png", size: "half" },
        { src: "assets/img/work/coffee/co5.png", size: "half" },      ]
    },
    {
      slug: "GLOW", 
      year: "2026", 
      featured: true,
      title: { ar: "عيادات GLOW", en: "Glow Clinics" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "عيادات GLOW", en: "Glow Clinics" },
      services: ["social"],
      cover: "assets/img/work/GLOW/cover1.png", 
      video: "",
      summary: { 
        ar: "تصميم محتوى رقمي جذاب لحسابات عيادات GLOW يعكس الفخامة والاحترافية في العناية بالبشرة والجمال.", 
        en: "Engaging social media content design for Glow Clinics, reflecting luxury and medical aesthetics expertise." 
      },
      challenge: { 
        ar: "إبراز العيادة وسط منافسة قوية في قطاع التجميل، وبناء هوية رقمية موثوقة تجمع بين الطابع الطبي واللمسة الجمالية العصرية.", 
        en: "Standing out in a competitive aesthetic market while building a trustworthy digital identity balancing medical credibility with modern beauty." 
      },
      solution: { 
        ar: "ابتكار خط بصري راقٍ يعتمد ألواناً هادئة ومريحة للعين، مع تقديم محتوى تثقيفي وتسويقي يبرز النتائج الطبيعية واحترافية الفريق الطبي.", 
        en: "Crafting a sophisticated visual direction with calm tones, supported by educational and promotional content showcasing natural results and medical expertise." 
      },
      gallery: [
        { src: "assets/img/work/GLOW/gl1.png", size: "half" },
        { src: "assets/img/work/GLOW/gl2.png", size: "half" },
        { src: "assets/img/work/GLOW/gl3.png", size: "half" },
        { src: "assets/img/work/GLOW/gl4.png", size: "half" },
        { src: "assets/img/work/GLOW/gl5.png", size: "half" },
        { src: "assets/img/work/GLOW/gl6.png", size: "half" },
        { src: "assets/img/work/GLOW/gl7.png", size: "half" },
        { src: "assets/img/work/GLOW/gl8.png", size: "half" },
      ]
    },
    {
      slug: "btack-burger", 
      year: "2026", 
      featured: true,
      title: { ar: "بي تاك برجر", en: "B.TACK Burger" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "بي تاك برجر", en: "B.TACK Burger" },
      services: ["social"],
      cover: "assets/img/work/btack/cover2.png", 
      video: "",
      summary: { 
        ar: "سلسلة تصاميم ومحتوى رقمي جذاب لحسابات بي تاك برجر يبرز شهية الوجبات والهوية العصرية للبراند.", 
        en: "Creative social media campaign and visual content for B.TACK Burger, highlighting appetizing meals and bold brand identity." 
      },
      challenge: { 
        ar: "لفت انتباه العملاء في قطاع برجر مليء بالمنافسة، وإبراز جودة المكونات وتفاصيل الطعم بطريقة تفتح الشهية وتحفّز على الشراء.", 
        en: "Capturing attention in a highly saturated burger market and showcasing ingredient freshness to trigger appetite and drive orders." 
      },
      solution: { 
        ar: "اعتماد خط بصري جريء وقوي مع التركيز على لقطات تفصيلية شهية (Food Visuals)، واستخدام نصوص تسويقية سريعة وحماسية تزيد من تفاعل الجمهور والطلب المباشر.", 
        en: "Crafting a bold visual style with high-contrast, mouth-watering food shots paired with energetic hooks that boost engagement and conversions." 
      },
      gallery: [
        { src: "assets/img/work/btack/bt1.png", size: "half" },
        { src: "assets/img/work/btack/bt2.png", size: "half" },
        { src: "assets/img/work/btack/bt3.png", size: "half" },
        { src: "assets/img/work/btack/bt4.png", size: "half" },
        { src: "assets/img/work/btack/bt5.png", size: "half" },
      ]
    },
    {
      slug: "french-pearl", 
      year: "2026", 
      featured: true,
      title: { ar: "صالون اللؤلؤ الفرنسي", en: "French Pearl Salon" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "صالون اللؤلؤ الفرنسي", en: "French Pearl Salon" },
      services: ["social"],
      cover: "assets/img/work/french-pearl/cover3.png", 
      video: "",
      summary: { 
        ar: "تصميم محتوى رقمي فاخر لحسابات صالون اللؤلؤ الفرنسي، يعكس الرقي وأعلى معايير العناية والجمال.", 
        en: "Luxury social media content design for French Pearl Salon, reflecting elegance and high-end beauty care." 
      },
      challenge: { 
        ar: "نقل تجربة الدلال والفخامة المستوحاة من الطابع الفرنسي إلى العالم الرقمي، وجذب العميلات الباحثات عن خدمات تجميل راقية واستثنائية.", 
        en: "Translating the luxurious French pampering experience into a digital presence that attracts clients seeking premium beauty services." 
      },
      solution: { 
        ar: "ابتكار خط بصري ناعم وأنيق يجمع درجات الألوان الهادئة مع لمسات فخمة، وإبراز جودة الخدمات وتفاصيل النتائج لبناء الثقة وجذب الحجوزات المستمرة.", 
        en: "Crafting a soft, chic aesthetic combining delicate tones with elegant accents, highlighting meticulous service results to build trust and drive bookings." 
      },
      gallery: [
        { src: "assets/img/work/french-pearl/fp1.png", size: "half" },
        { src: "assets/img/work/french-pearl/fp2.png", size: "half" },
        { src: "assets/img/work/french-pearl/fp3.png", size: "half" },
        { src: "assets/img/work/french-pearl/fp4.png", size: "half" },
        { src: "assets/img/work/french-pearl/fp5.png", size: "half" },
        { src: "assets/img/work/french-pearl/fp6.png", size: "half" },
      ]
    },
    {
      slug: "alothman-law", 
      year: "2026", 
      featured: true,
      title: { ar: "العثمان للمحاماة والاستشارات القانونية", en: "Al-Othman Law Firm" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "العثمان للمحاماة", en: "Al-Othman Law Firm" },
      services: ["social"],
      cover: "assets/img/work/alothman/cover4.png", 
      video: "",
      summary: { 
        ar: "صناعة محتوى قانوني احترافي لحسابات العثمان للمحاماة يعزز الموثوقية ويبسط المفاهيم القانونية لرواد الأعمال والأفراد.", 
        en: "Professional legal content design for Al-Othman Law Firm, establishing credibility and simplifying legal concepts." 
      },
      challenge: { 
        ar: "الموازنة بين رصانة وهيبة المهنة القانونية، وبين تقديم محتوى رقمي جذاب، مفهوم، ومواكب يكسر الجمود ويوضح الأنظمة المعقدة.", 
        en: "Balancing traditional legal formality with engaging, digestible content that simplifies complex regulations for individuals and businesses." 
      },
      solution: { 
        ar: "تطوير أسلوب بصري رزين يعتمد ألواناً تعكس الثقة والوقار، مع صياغة منشورات توعوية وإنفوجرافيك واضح يقدم قيمة حقيقية ويعزز مكانة المكتب كمرجع قانوني.", 
        en: "Developing a prestigious, trust-driven visual style complemented by informative legal infographics that establish the firm as an authoritative reference." 
      },
      gallery: [
        { src: "assets/img/work/alothman/ot1.png", size: "half" },
        { src: "assets/img/work/alothman/ot2.png", size: "half" },
        { src: "assets/img/work/alothman/ot3.png", size: "half" },
        { src: "assets/img/work/alothman/ot4.png", size: "half" },
        { src: "assets/img/work/alothman/ot5.png", size: "half" },
      ]
    },
    {
      slug: "masar-academy", year: "2025", featured: true,
      title: { ar: "أكاديمية مسار", en: "Masar Academy" },
      category: { ar: "تعليم", en: "Education" },
      client: { ar: "أكاديمية مسار", en: "Masar Academy" },
      services: ["identity", "web"],
      cover: "assets/img/masar-academy-cover.svg", video: "",
      summary: { ar: "هوية وموقع لأكاديمية تدريب تقني للشباب.", en: "Identity and website for a tech academy for young people." },
      challenge: { ar: "جمهور شاب يحتاج علامة جادة وموثوقة، لكن غير مملة.", en: "A young audience that needs a brand that feels credible and serious, but never boring." },
      solution: { ar: "شعار مبني على فكرة المسار المتصاعد، ونظام ألوان مرح، وموقع واضح يقود الطالب للتسجيل بسهولة.", en: "A mark built on a rising path, a playful colour system and a clear website that guides students to enrol." },
      gallery: [
        { src: "assets/img/masar-academy-1.svg", size: "full" },
        { src: "assets/img/masar-academy-2.svg", size: "half" },
        { src: "assets/img/masar-academy-3.svg", size: "half" }
      ]
    },
    {
      slug: "sadu-festival", year: "2024", featured: true,
      title: { ar: "مهرجان السدو", en: "Sadu Festival" },
      category: { ar: "ثقافة وفعاليات", en: "Culture & events" },
      client: { ar: "مهرجان السدو للفنون", en: "Sadu Arts Festival" },
      services: ["identity", "print", "social"],
      cover: "assets/img/sadu-festival-cover.svg", video: "",
      summary: { ar: "هوية مهرجان مستوحاة من نقوش السدو التقليدية.", en: "A festival identity inspired by traditional Sadu weaving patterns." },
      challenge: { ar: "إعادة تقديم فن السدو لجيل جديد دون أن يبدو كأنه قطعة متحف.", en: "Reintroduce Sadu weaving to a new generation without it feeling like a museum piece." },
      solution: { ar: "حوّلنا النقوش إلى نظام شبكي مرن يتغير في كل ملصق، مع خط عربي عريض وألوان جريئة.", en: "We turned the patterns into a flexible grid system that changes on every poster, with a bold Arabic typeface and confident colours." },
      gallery: [
        { src: "assets/img/sadu-festival-1.svg", size: "full" },
        { src: "assets/img/sadu-festival-2.svg", size: "half" },
        { src: "assets/img/sadu-festival-3.svg", size: "half" },
        { src: "assets/img/sadu-festival-4.svg", size: "full" }
      ]
    },
    {
      slug: "wafi-clinics", year: "2024", featured: true,
      title: { ar: "عيادات وافي", en: "Wafi Clinics" },
      category: { ar: "صحة", en: "Health" },
      client: { ar: "مجموعة عيادات وافي", en: "Wafi Clinics Group" },
      services: ["identity", "print", "web"],
      cover: "assets/img/wafi-clinics-cover.svg", video: "",
      summary: { ar: "هوية هادئة وإنسانية لمجموعة عيادات عائلية.", en: "A calm, human identity for a group of family clinics." },
      challenge: { ar: "قطاع صحي يغلب عليه البرود، وعميل يريد أن يشعر المريض بالطمأنينة من أول لحظة.", en: "A clinical sector that often feels cold, and a client who wants patients to feel at ease from the first moment." },
      solution: { ar: "ألوان ناعمة، وأشكال دائرية، ولافتات واضحة داخل العيادات، وموقع حجز بسيط.", en: "Soft colours, rounded shapes, clear wayfinding inside the clinics and a simple booking website." },
      gallery: [
        { src: "assets/img/wafi-clinics-1.svg", size: "full" },
        { src: "assets/img/wafi-clinics-2.svg", size: "half" },
        { src: "assets/img/wafi-clinics-3.svg", size: "half" }
      ]
    },


  ],

  /* ---------- آراء العملاء (تجريبية — استبدلها بآراء حقيقية) ---------- */
  testimonials: [
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "نخلة كوفي", en: "Nakhla Coffee" },
      quote: { ar: "فهمت سارة ما نريده من أول اجتماع. الهوية الجديدة تشبهنا تماماً، وعملاؤنا لاحظوا الفرق فوراً.", en: "Sara understood what we wanted from the very first meeting. The new identity feels exactly like us, and our customers noticed straight away." } },
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "أكاديمية مسار", en: "Masar Academy" },
      quote: { ar: "تخطيط واضح وتواصل ممتاز والتزام بالمواعيد. والنتيجة كانت أجمل مما تخيلنا.", en: "Clear planning, great communication and always on time. The result was more beautiful than we imagined." } },
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "مهرجان السدو", en: "Sadu Festival" },
      quote: { ar: "حوّلت فكرة معقدة إلى نظام بصري بسيط ومرن. استخدمناه في كل شيء من الملصقات إلى التذاكر.", en: "She turned a complex idea into a simple, flexible visual system. We used it on everything from posters to tickets." } },
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "عيادات وافي", en: "Wafi Clinics" },
      quote: { ar: "قادت المشروع بثقة دون أن تتجاهل رأينا. هذا أعطانا راحة كبيرة طوال العمل.", en: "She led the project with confidence without overruling our input. That gave us real peace of mind throughout." } },
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "دار راوي", en: "Rawi Publishing" },
      quote: { ar: "كل غلاف قطعة فنية، والسلسلة كلها متماسكة. القراء يتعرفون على كتبنا من بعيد.", en: "Every cover is a piece of art, and the whole series holds together. Readers spot our books from across the shop." } },
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "ديون", en: "Dune" },
      quote: { ar: "سريعة ومبدعة ودائماً مستعدة للتعديل. أنصح بها لأي علامة ناشئة.", en: "Fast, creative and always ready to adjust. I'd recommend her to any young brand." } }
  ],

  /* ---------- شعارات العملاء (شريط متحرك) ---------- */
  clients: [
    { name: "Nakhla", logo: "assets/img/logo-1.svg" },
    { name: "Masar", logo: "assets/img/logo-2.svg" },
    { name: "Sadu", logo: "assets/img/logo-3.svg" },
    { name: "Wafi", logo: "assets/img/logo-4.svg" },
    { name: "Rawi", logo: "assets/img/logo-5.svg" },
    { name: "Dune", logo: "assets/img/logo-6.svg" },
    { name: "Qimam", logo: "assets/img/logo-7.svg" },
    { name: "Tamr", logo: "assets/img/logo-8.svg" },
    { name: "Ofoq", logo: "assets/img/logo-9.svg" },
    { name: "Zeen", logo: "assets/img/logo-10.svg" },
    { name: "Nawa", logo: "assets/img/logo-11.svg" },
    { name: "Bayt", logo: "assets/img/logo-12.svg" }
  ],

  /* ---------- صفحة الأعمال ---------- */
  work: {
    eyebrow: { ar: "الأعمال", en: "Work" },
    title: { ar: "مشاريع صنعتها بحب", en: "Projects made with care" },
    text: { ar: "مجموعة مختارة من الهويات والمطبوعات والمواقع التي صممتها لعلامات في قطاعات مختلفة.", en: "A selection of identities, print and websites designed for brands across different sectors." },
    // نصوص المجلدات
    projects: { ar: "مشاريع", en: "projects" },
    coverTab: { ar: "ملف الأعمال", en: "Portfolio" },
    folderHint: { ar: "اختر مجلداً لاستعراض الأعمال", en: "Pick a folder to browse the work" },
    scrollHint: { ar: "مرّر لاستعراض المشاريع", en: "Scroll to browse" },
    empty: { ar: "قريباً", en: "Coming soon" },
    listTitle: { ar: "العملاء", en: "Clients" },
    fullProject: { ar: "عرض المشروع كاملاً", en: "View full project" }
  },


  /* ---------- صفحة من أنا ---------- */
  about: {
    eyebrow: { ar: "من أنا", en: "About" },
    title: { ar: "أهلاً، أنا سارة", en: "Hi, I'm Sara" },
    intro: { ar: "مصممة جرافيك متخصصة في الهويات البصرية، أؤمن أن التصميم الجيد يبدأ بالإصغاء.", en: "A graphic designer specialising in brand identity. I believe good design starts with listening." },
    portrait: "assets/img/portrait.svg",
    story: {
      ar: "بدأت رحلتي في وكالات تصميم كبيرة، حيث تعلمت أن كل قرار تصميمي يجب أن يكون له سبب. بعد سنوات من العمل مع علامات كبيرة، أسست الاستوديو الخاص بي لأعمل عن قرب مع أصحاب المشاريع الذين يريدون علامة صادقة تشبههم.",
      en: "My journey began in large design agencies, where I learned that every design decision needs a reason. After years of working with big brands, I set up my own studio to work closely with founders who want an honest brand that feels like them."
    },
    paragraphs: [
      { ar: "أعمل مع عدد محدود من العملاء في الوقت نفسه، حتى يحصل كل مشروع على الاهتمام الذي يستحقه. لا أسلّم عملاً نصف منتهٍ؛ كل تفصيلة مهمة.", en: "I work with a limited number of clients at a time, so every project gets the attention it deserves. No half-finished work: every detail counts." },
      { ar: "خارج الاستوديو تجدني أجمع الكتب القديمة، وأصوّر الخطوط في الشوارع، وأبحث عن أفضل فنجان قهوة في المدينة.", en: "Outside the studio you'll find me collecting old books, photographing street lettering and hunting for the best cup of coffee in town." }
    ],
    stats: [
      { value: 8, suffix: "+", label: { ar: "سنوات خبرة", en: "Years of experience" } },
      { value: 60, suffix: "+", label: { ar: "مشروع منجز", en: "Projects delivered" } },
      { value: 40, suffix: "", label: { ar: "علامة تجارية", en: "Brands" } },
      { value: 5, suffix: "", label: { ar: "دول", en: "Countries" } }
    ],
    stepsEyebrow: { ar: "طريقة العمل", en: "Approach" },
    stepsTitle: { ar: "أربع مراحل واضحة", en: "Four clear steps" },
    steps: [
      { bg: "#d4f36b", fg: "#161412", title: { ar: "١. الاكتشاف", en: "1. Discover" }, text: { ar: "نجلس معاً لنفهم علامتك وجمهورك ومنافسيك، ونحدد الهدف بوضوح.", en: "We sit down to understand your brand, audience and competitors, and define the goal clearly." } },
      { bg: "#c6b6ff", fg: "#161412", title: { ar: "٢. الفكرة", en: "2. Define" }, text: { ar: "أحول ما تعلمناه إلى استراتيجية واتجاه بصري واضح نتفق عليه قبل التصميم.", en: "I turn what we learned into a strategy and a clear visual direction we agree on before designing." } },
      { bg: "#ff7a59", fg: "#161412", title: { ar: "٣. التصميم", en: "3. Design" }, text: { ar: "أصمم المقترح وأشرح لك كل قرار، ثم نطوره معاً حتى يكتمل.", en: "I design the proposal and walk you through every decision, then we refine it together." } },
      { bg: "#ffc46b", fg: "#161412", title: { ar: "٤. التسليم", en: "4. Deliver" }, text: { ar: "تستلم كل الملفات ودليل استخدام واضح، وأبقى معك بعد الإطلاق.", en: "You get every file and clear guidelines, and I stay with you after launch." } }
    ]
  },

  /* ---------- صفحة التواصل ---------- */
  contact: {
    eyebrow: { ar: "تواصل", en: "Contact" },
    title: { ar: "لنصنع شيئاً جميلاً معاً", en: "Let's make something beautiful together" },
    text: { ar: "أخبرني عن مشروعك، وسأرد عليك خلال يومي عمل.", en: "Tell me about your project and I'll get back to you within two working days." },
    form: {
      name: { ar: "الاسم", en: "Name" },
      email: { ar: "البريد الإلكتروني", en: "Email" },
      interest: { ar: "ما الذي تحتاجه؟", en: "What do you need?" },
      message: { ar: "حدثني عن مشروعك", en: "Tell me about your project" },
      send: { ar: "أرسل الرسالة", en: "Send message" },
      sending: { ar: "جاري الإرسال…", en: "Sending…" },
      success: { ar: "شكراً! وصلتني رسالتك وسأرد قريباً.", en: "Thank you! Your message arrived and I'll reply soon." },
      error: { ar: "حدث خطأ، حاول مرة أخرى أو راسلني على البريد مباشرة.", en: "Something went wrong. Please try again or email me directly." }
    },
    detailsTitle: { ar: "أو تواصل مباشرة", en: "Or reach out directly" }
  }
};

export default SITE;

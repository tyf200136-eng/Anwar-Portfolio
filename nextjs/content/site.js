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
    name: { ar: "أنوار سراج", en: "Anwar Siraj" },
        // لوقو المصممة (يظهر في الهيرو)
    logo: "assets/img/anwar-logo.svg",
    // الكلمتان الكبيرتان في أعلى الصفحة الرئيسية
    wordTop: { ar: "أنوار", en: "Sara" },
    wordBottom: { ar: "سراج", en: "Nasser" },
    role: { ar: "مصممة جرافيك وهويات بصرية", en: "Graphic & brand designer" },
    email: "hello@example.com",
    phone: "+966 50 000 0000",
  
    // رابط استقبال رسائل نموذج التواصل (مثلاً من formspree.io).
    // اتركه فارغاً ليفتح النموذج برنامج البريد مباشرة.
    formEndpoint: "/api/contact",
    socials: [
     
    ],

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
    viewCase: { ar: "VIEW PROJECT • VIEW PROJECT • ", en: "VIEW PROJECT • VIEW PROJECT • " },
    scroll: { ar: "مرّر للأسفل • مرّر للأسفل • ", en: "SCROLL DOWN • SCROLL DOWN • " },
    all: { ar: "الكل", en: "All" },
    client: { ar: "العميل", en: "Client" },
    year: { ar: "السنة", en: "Year" },
    services: { ar: "الخدمات", en: "Services" },
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
    heroText: { ar: "مصممة جرافيك وهويات بصرية، أحوّل الأفكار إلى تصاميم هادئة ومدروسة بعناية في كل تفصيل.", en: "Graphic and brand designer turning ideas into calm, considered work, crafted down to every detail." },
    tagline: { ar: "تصميم جرافيك لأصحاب الأفكار الواضحة", en: "Graphic design for founders with a clear vision" },
    
    casesEyebrow: { ar: "الأعمال", en: "Work" },
    casesTitle: { ar: "نتائج لعلامات تعرف من هي", en: "Results for brands that know who they are" },
    stickyTitle1: { ar: "من الفكرة", en: "From idea" },
    stickyTitle2: { ar: "إلى التنفيذ", en: "to execution" },
    stickyImages: ["assets/img/work/GLOW/gl1.png", "assets/img/work/coffee/cover.png", "assets/img/work/btack/cover2.png"],
    servicesEyebrow: { ar: "الخدمات", en: "Services" },
    servicesTitle: { ar: "كل ما تحتاجه علامتك، من مكان واحد", en: "Everything your brand needs, in one place" },
    aboutEyebrow: { ar: "من أنا", en: "About" },
    aboutTitle: { ar: "مصممة تهتم بالتفاصيل", en: "A designer who sweats the details" },
    aboutText: {
      ar: "أنا أنوار، مصممة جرافيك متخصصة في الهويات البصرية. أبدأ كل مشروع بفهم العلامة وجمهورها، ثم أحوّل الفكرة إلى تصميم واضح ومتناسق في كل تفاصيله.",
      en: "I'm Anwar, a graphic designer specialising in visual identities. I start every project by understanding the brand and its audience, then turn the idea into a clear, consistent design down to the last detail."
    },
    aboutImage: "assets/img/studio.svg",
    // الأدوات اللي تظهر في قسم "من أنا" (احذف أو أضف براحتك)
    toolsLabel: { ar: "أدواتي", en: "My tools" },
    // كل أداة: الاسم + مسار اللوقو (ملفات SVG في public/assets/img/tools)
    tools: [
      { name: "Illustrator", icon: "assets/img/tools/illustrator.svg" },
      { name: "Photoshop", icon: "assets/img/tools/photoshop.svg" },
      { name: "InDesign", icon: "assets/img/tools/indesign.svg" },
      { name: "Canva", icon: "assets/img/tools/canva.svg" }
    ],
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
      slug: "identity", icon: "square", bg: "#d9cfc1", fg: "#1d1b18",
      title: { ar: "هوية بصرية", en: "Visual identity" },
      text: {
        ar: "يتعرف الناس على علامتك قبل أن يقرؤوا كلمة واحدة: من لون، أو شكل، أو خط. الهوية ليست زينة تضاف لاحقاً، بل هي طريقة وقوف علامتك في العالم.",
        en: "People recognise your brand before reading a single word: a colour, a shape, a typeface. Identity isn't decoration added later; it's how your brand stands in the world."
      },
      tags: [{ ar: "الشعار", en: "Logo" }, { ar: "النظام البصري", en: "Visual system" }, { ar: "دليل الهوية", en: "Brand guidelines" }]
    },
    {
      slug: "social", icon: "wave", bg: "#c9cbbb", fg: "#1d1b18",
      title: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social media posts" },
      text: {
        ar: "منشورات وقوالب تحافظ على هوية علامتك في كل منصة، وتلفت الانتباه من أول نظرة.",
        en: "Posts and templates that keep your brand consistent on every platform and catch the eye at first glance."
      },
      tags: [{ ar: "منشورات", en: "Posts" }, { ar: "قصص", en: "Stories" }, { ar: "قوالب", en: "Templates" }]
    },
    {
      slug: "presentations", icon: "arch", bg: "#d6c3b2", fg: "#1d1b18",
      title: { ar: "عروض تقديمية", en: "Presentations" },
      text: { ar: "عروض واضحة ومقنعة تحكي قصتك.", en: "Clear, persuasive decks that tell your story." },
      tags: [{ ar: "عروض المستثمرين", en: "Pitch decks" }, { ar: "عروض الشركات", en: "Company profiles" }]
    },
    {
           slug: "marketing", icon: "triangle", bg: "#e4d8c3", fg: "#1d1b18", direct: true,
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
      gallery: [
        { src: "assets/img/work/crumeli/cr1.jpg" },
        { src: "assets/img/work/crumeli/cr2.jpg" },
        { src: "assets/img/work/crumeli/cr3.jpg" },
        { src: "assets/img/work/crumeli/cr4.jpg" },
        { src: "assets/img/work/crumeli/cr5.jpg" }
      ]
    },
        {
      slug: "luqma-laffa", year: "2026", featured: true, display: "long",
      title: { ar: "لقمة ولفة", en: "Luqma & Laffa" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "مطعم لقمة ولفة", en: "Luqma & Laffa Restaurant" },
      services: ["identity"],
      cover: "assets/img/work/luqma-laffa/cover6.jpg", video: "",
      summary: { ar: "هوية بصرية لمطعم برغر وشاورما، شعارها «النكهة تبدأ من هنا».", en: "A visual identity for a burger and shawarma restaurant, built around the line “Flavor starts here.”" },
      gallery: [
        { src: "assets/img/work/luqma-laffa/la1.jpg" },
        { src: "assets/img/work/luqma-laffa/la2.jpg" },
        { src: "assets/img/work/luqma-laffa/la3.jpg" },
        { src: "assets/img/work/luqma-laffa/la4.jpg" },
        { src: "assets/img/work/luqma-laffa/la5.jpg" }
      ]
    },
        {
      slug: "jal-alfakher", year: "2026", featured: true, display: "long",
      title: { ar: "جال الفاخر", en: "Jal Alfakher" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "ملحمة جال الفاخر", en: "Jal Alfakher Butchery" },
      services: ["identity"],
      cover: "assets/img/work/jal-alfakher/cover7.jpg", video: "",
      summary: { ar: "هوية بصرية لملحمة تقدم جميع أنواع اللحوم الطازجة، شعارها يجمع حرف الجيم مع ساطور التقطيع.", en: "A visual identity for a butchery offering all kinds of fresh meat, with a mark that merges the letter J with a butcher's cleaver." },
      gallery: [
        { src: "assets/img/work/jal-alfakher/ja1.jpg" },
        { src: "assets/img/work/jal-alfakher/ja2.jpg" },
        { src: "assets/img/work/jal-alfakher/ja3.jpg" }
      ]
    },
        {
      slug: "le-voile", year: "2026", featured: true, display: "long",
      title: { ar: "لو فوال", en: "Le Voile" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "لو فوال", en: "Le Voile" },
      services: ["identity"],
      cover: "assets/img/work/le-voile/cover8.jpg", video: "",
      summary: { ar: "هوية بصرية ناعمة لعلامة أقمشة وطرح، بألوان الوردي والأخضر الهادئ وعبارة «A Veil of Elegance».", en: "A soft visual identity for a fabric and veil brand, in calm pink and sage tones, built around the line “A Veil of Elegance.”" },
      gallery: [
        { src: "assets/img/work/le-voile/vo1.jpg" },
        { src: "assets/img/work/le-voile/vo2.jpg" },
        { src: "assets/img/work/le-voile/vo3.jpg" },
        { src: "assets/img/work/le-voile/vo4.jpg" },
        { src: "assets/img/work/le-voile/vo5.jpg" },
        { src: "assets/img/work/le-voile/vo6.jpg" }
      ]
    },
        {
      slug: "levan", year: "2026", featured: true, display: "long",
      title: { ar: "ليفان", en: "Levan" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "ليفان — مخبز وقهوة", en: "Levan — Bakery & coffee" },
      services: ["identity"],
      cover: "assets/img/work/levan/cover9.jpg", video: "",
      summary: { ar: "هوية بصرية لمخبز كرواسون وقهوة، بألوان القشرة الذهبية والكريمة الفرنسية والأزرق الهادئ، وعبارة «ليفان بيومك».", en: "A visual identity for a croissant bakery and café, in golden crust, French cream and calm blue tones, with the line “Levan Beyomk.”" },
      gallery: [
        { src: "assets/img/work/levan/va1.jpg" },
        { src: "assets/img/work/levan/va2.jpg" },
        { src: "assets/img/work/levan/va3.jpg" },
        { src: "assets/img/work/levan/va4.jpg" },
        { src: "assets/img/work/levan/va5.jpg" },
        { src: "assets/img/work/levan/va6.jpg" },
        { src: "assets/img/work/levan/va7.jpg" }
      ]
    },
        {
      slug: "azm", year: "2026", featured: true, display: "long",
      title: { ar: "عزم", en: "AZM" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "تطبيق عزم لخدمات السيارات", en: "AZM car services app" },
      services: ["identity"],
      cover: "assets/img/work/azm/cover10.jpg", video: "",
      summary: { ar: "دليل هوية بصرية لتطبيق عزم، المنصة الذكية التي تربط العملاء بمقدمي خدمات السيارات والورش والسطحات بتجربة سلسة وموثوقة.", en: "Brand guidelines for AZM, a smart platform connecting customers with car service providers, workshops and towing services through a seamless, reliable experience." },
      gallery: [
        { src: "assets/img/work/azm/azm1.jpg" },
        { src: "assets/img/work/azm/azm2.jpg" },
        { src: "assets/img/work/azm/azm3.jpg" },
        { src: "assets/img/work/azm/azm4.jpg" },
        { src: "assets/img/work/azm/azm5.jpg" },
        { src: "assets/img/work/azm/azm6.jpg" },
        { src: "assets/img/work/azm/azm7.jpg" },
        { src: "assets/img/work/azm/azm8.jpg" },
        { src: "assets/img/work/azm/azm9.jpg" },
        { src: "assets/img/work/azm/azm10.jpg" },
        { src: "assets/img/work/azm/azm11.jpg" },
        { src: "assets/img/work/azm/azm12.jpg" },
        { src: "assets/img/work/azm/azm13.jpg" },
        { src: "assets/img/work/azm/azm14.jpg" },
      ]
    },
        {
      slug: "raghad", year: "2026", featured: true, display: "long",
      title: { ar: "رغد بنت محمد", en: "Raghad Bint Mohammed" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "المحامية والموثقة رغد بنت محمد", en: "Raghad Bint Mohammed, Lawyer & Notary" },
      services: ["identity"],
      cover: "assets/img/work/raghad/rg-cover.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/raghad/rg1.jpg" },
        { src: "assets/img/work/raghad/rg2.jpg" },
        { src: "assets/img/work/raghad/rg3.jpg" },
        { src: "assets/img/work/raghad/rg4.jpg" },
        { src: "assets/img/work/raghad/rg5.jpg" }
      ]
    },
        {
      slug: "alayna", year: "2026", featured: true, display: "long",
      title: { ar: "ALAYNA", en: "ALAYNA" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "ALAYNA — للعناية باليدين والأظافر", en: "ALAYNA — Hand & nail care" },
      services: ["identity"],
      cover: "assets/img/work/alayna/al-cover.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/alayna/al1.jpg" },
        { src: "assets/img/work/alayna/al2.jpg" },
        { src: "assets/img/work/alayna/al3.jpg" },
        { src: "assets/img/work/alayna/al4.jpg" }
      ]
    },
        {
      slug: "lumi", year: "2026", featured: true, display: "long",
      title: { ar: "Lumi Eyes", en: "Lumi Eyes" },
      category: { ar: "هوية بصرية", en: "Visual identity" },
      client: { ar: "Lumi Eyes — عدسات لاصقة", en: "Lumi Eyes — Contact lenses" },
      services: ["identity"],
      cover: "assets/img/work/lumi/lu-cover.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/lumi/lu1.jpg" },
        { src: "assets/img/work/lumi/lu2.jpg" },
        { src: "assets/img/work/lumi/lu3.jpg" },
        { src: "assets/img/work/lumi/lu4.jpg" },
        { src: "assets/img/work/lumi/lu5.jpg" },
        { src: "assets/img/work/lumi/lu6.jpg" }
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
      slug: "booca", 
      year: "2025", 
      featured: true,
      title: { ar: "مطعم بوكا", en: "BOOCA Burger" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "بوكا للبرجر واللحم المدخن", en: "BOOCA Smoked Beef & Burger" },
      services: ["social"],
      cover: "assets/img/work/booca/cover11.png", 
      video: "",
      summary: { 
        ar: "صناعة محتوى سوشيال ميديا مبتكر لمطعم بوكا، يدمج بين التصوير الاحترافي للوجبات والرسومات الرقمية (Doodle Art) لإبراز قوة الطعم وتميز اللحم المدخن.", 
        en: "Creative social media design for BOOCA, blending appetizing food photography with playful digital doodle art to emphasize rich flavor and smoked beef expertise." 
      },
      challenge: { 
        ar: "الخروج من النمطية المعتادة في تصوير البرجر، وإبراز حجم الوجبة وقوة النكهة بطريقة بصرية تلفت النظر سريعاً وتثير شهية وتفاعل المتابعين.", 
        en: "Breaking free from traditional burger post layouts to visually convey portion size, fullness, and rich flavor in a scroll-stopping, youthful way." 
      },
      solution: { 
        ar: "دمج صور البرجر الواقعية مع عناصر ورسومات كرتونية جريئة تعكس معنى القوة واللذة، مع كتابة نصوص تسويقية حماسية ومباشرة تعزز الرغبة في التجربة والطلب الفوري.", 
        en: "Combining realistic high-detail food shots with bold illustrative elements that signify strength and indulgence, paired with punchy copy driving instant cravings." 
      },
      gallery: [
        { src: "assets/img/work/booca/bo1.png" },
        { src: "assets/img/work/booca/bo2.png"},
        { src: "assets/img/work/booca/bo3.png"},
        { src: "assets/img/work/booca/bo4.png"},
        { src: "assets/img/work/booca/bo5.png"},
        { src: "assets/img/work/booca/bo6.png"},
      ]
    },
    {
      slug: "al-riwaa", 
      year: "2025", 
      featured: true,
      title: { ar: "مجمع الرواء الطبي", en: "Al-Riwaa Medical Center" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "مجمع الرواء الطبي المتخصص", en: "Al-Riwaa Medical Center" },
      services: ["social"],
      cover: "assets/img/work/al-riwaa/cover12.png", 
      video: "",
      summary: { 
        ar: "تصميم محتوى رقمي وتوعوي لطب وجراحة الأسنان في مجمع الرواء الطبي، يجمع بين الجاذبية البصرية والرسائل الطبية التثقيفية.", 
        en: "Digital and awareness content design for Al-Riwaa Medical Center (Dental Care), combining modern 3D visuals with educational health messages." 
      },
      challenge: { 
        ar: "كسر النمطية والخوف المرتبط بزيارة طبيب الأسنان، وتحويل النصائح الطبية المعقدة إلى محتوى بصري جذاب وسهل الاستيعاب يشجع على المبادرة بالفحص والوقاية.", 
        en: "Overcoming dental anxiety and transforming routine health advice into visually engaging, digestible content that encourages preventive checkups." 
      },
      solution: { 
        ar: "توظيف عناصر ثلاثية الأبعاد (3D Elements) بألوان الهوية المعتمدة (الأحمر والأزرق) مع صياغة رسائل تحفيزية تركز على مفهوم 'الأسنان كاستثمار دائم' لبناء الثقة وزيادة المراجعين.", 
        en: "Utilizing modern 3D dental elements within brand colors, paired with compelling copy framing oral health as a lifelong investment to drive appointments." 
      },
      gallery: [
        { src: "assets/img/work/al-riwaa/rw1.png", size: "half" },
        { src: "assets/img/work/al-riwaa/rw2.jpg", size: "half" },
        { src: "assets/img/work/al-riwaa/rw3.jpg", size: "half" },
        { src: "assets/img/work/al-riwaa/rw4.png", size: "half" },
      ]
    },
    {
      slug: "bello-coffee", 
      year: "2025", 
      featured: true,
      title: { ar: "بيلو كافيه", en: "Bello Specialty Coffee" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "بيلو للقهوة المختصة", en: "Bello Specialty Coffee" },
      services: ["social"],
      cover: "assets/img/work/bello/cover13.jpg", 
      video: "",
      summary: { 
        ar: "تصميم وإخراج محتوى إطلاق 'بوكس الجمعات' لبيلو كافيه، بأسلوب بصري دافئ يعكس كرم الضيافة ولحظات المشاركة مع العائلة والأصدقاء.", 
        en: "Creative campaign design for Bello Specialty Coffee launching the 'Gatherings Box', highlighting hospitality and shared moments." 
      },
      challenge: { 
        ar: "إبراز منتج الجمعات الجديد كخيار أول في المناسبات واللقاءات، وربط القهوة المختصة بأجواء الألفة دون أن يفقد البراند طابعه الهادئ والأنيق.", 
        en: "Positioning the new coffee box as the top choice for social gatherings while maintaining the brand's calm and elegant aesthetic." 
      },
      solution: { 
        ar: "الاعتماد على تصوير واقعي يوثّق لحظة الصب والمشاركة (Lifestyle)، مع اختيار عبارات قريبة من القلب ('صبّة وحدة تكفي المزاج كله') تعزز الارتباط العاطفي بالمنتج.", 
        en: "Using authentic lifestyle photography capturing the pour moment, combined with culturally resonant copywriting to trigger cravings and emotional connection." 
      },
      gallery: [
        { src: "assets/img/work/bello/be1.jpg", size: "half" },
        { src: "assets/img/work/bello/be2.jpeg", size: "half" },
        { src: "assets/img/work/bello/be3.jpg", size: "half" },
        { src: "assets/img/work/bello/be4.jpg", size: "half" },
        { src: "assets/img/work/bello/be5.jpg", size: "half" },
      ]
    },
    {
      slug: "rada-fashion", 
      year: "2025", 
      featured: true,
      title: { ar: "متجر رادا للملابس", en: "RADA Fashion" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "رادا للأزياء العصرية", en: "RADA Clothing Store" },
      services: ["social"],
      cover: "assets/img/work/rada/cover14.png", 
      video: "",
      summary: { 
        ar: "تصميم حملة إعلانية وترويجية لمواسم التخفيضات في متجر رادا للملابس، بأسلوب بصري جريء يناسب ثقافة الأزياء الشبابية (Streetwear).", 
        en: "Promotional campaign and social media design for RADA clothing store sales, utilizing bold visual graphics tailored for youth streetwear." 
      },
      challenge: { 
        ar: "الإعلان عن خصم قوي (50%) بطريقة غير مكررة تبتعد عن شارات الخصومات التقليدية، وتجذب جيل الشباب والمهتمين بالستايل العصري السريع.", 
        en: "Announcing a major 50% discount without resorting to generic sale badges, maintaining an urban, high-fashion aesthetic appealing to Gen-Z." 
      },
      solution: { 
        ar: "ابتكار خطوط بصرية هندسية تجريدية (Optical Lines) تدمج رقم الخصم ضمن تكوين التصميم كخلفية لقطع الملابس، مما لفت الانتباه وحفّز الزيارات السريعة للمتجر.", 
        en: "Developing abstract optical line patterns integrating the discount value into the backdrop of the products, capturing immediate focus and driving store visits." 
      },
      gallery: [
        { src: "assets/img/work/rada/ra1.png", size: "half" },
        { src: "assets/img/work/rada/ra2.png", size: "half" },
        { src: "assets/img/work/rada/ra3.png", size: "half" },
        { src: "assets/img/work/rada/ra4.png", size: "half" },
        { src: "assets/img/work/rada/ra5.png", size: "half" },
        { src: "assets/img/work/rada/ra6.png", size: "half" },
        { src: "assets/img/work/rada/ra7.png", size: "half" },
        { src: "assets/img/work/rada/ra8.png", size: "half" },
        { src: "assets/img/work/rada/ra9.png", size: "half" },
        { src: "assets/img/work/rada/ra10.png", size: "half" },
      ]
    },

    {
      slug: "rada-cafe", 
      year: "2025", 
      featured: true,
      title: { ar: "رادا كافيه", en: "RADA Cafe" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "رادا كافيه للقهوة والحلويات", en: "RADA Cafe" },
      services: ["social"],
      cover: "assets/img/work/rada-cafe/cove15.png", 
      video: "",
      summary: { 
        ar: "صناعة محتوى رقمي لرادا كافيه يسلّط الضوء على أصناف الحلى المبتكرة وتجربة تذوّق التشوروز مع الصوصات الخاصة والقهوة المختصة.", 
        en: "Visual social media content for RADA Cafe, highlighting signature sweet treats like crunchy churros with dips and specialty coffee." 
      },
      challenge: { 
        ar: "إبراز تفاصيل ولذة أصناف الحلى خارج النطاق التقليدي للقهوة، وتقديمها بأسلوب راقٍ وجذاب بصرياً يحفّز الزوار على التجربة المباشرة في الفرع.", 
        en: "Highlighting signature desserts beyond standard coffee visuals with an elegant, craving-inducing style that drives physical cafe visits." 
      },
      solution: { 
        ar: "توظيف إطارات هندسية عصرية بتدرجات ألوان هادئة مستوحاة من المكان (الزيتي والرمادي)، مع التركيز على لقطات تفاعلية للحلى (تغميس التشوروز) لتوصيل الشعور بالطعم الطازج.", 
        en: "Utilizing modern geometric frames in earthy muted tones, complemented by close-up dipping action shots to emphasize freshness and rich textures." 
      },
      gallery: [
        { src: "assets/img/work/rada-cafe/rc1.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc2.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc3.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc4.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc5.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc6.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc7.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc8.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc9.png", size: "half" },
        { src: "assets/img/work/rada-cafe/rc10.png", size: "half" },
      ]
    },
    {
      slug: "nokhbah-medical", 
      year: "2025", 
      featured: true,
      title: { ar: "مجمع نخبة التداوي الطبي", en: "Nokhbah Medical Center" },
      category: { ar: "منشورات وسائل التواصل الاجتماعي", en: "Social Media Posts" },
      client: { ar: "مجمع نخبة التداوي الطبي العام", en: "Nokhbah Altadawi Medical Center" },
      services: ["social"],
      cover: "assets/img/work/nokhbah/cover16.jpg", 
      video: "",
      summary: { 
        ar: "تصميم وإخراج حملة 'عروض الصيف' لمجمع نخبة التداوي الطبي، للترويج لباقات صحة العظام والحقن المفصلي بأسلوب بصري مرح ومناسب لموسم الإجازات.", 
        en: "Summer campaign design for Nokhbah Medical Center, promoting bone health packages and joint treatments through an engaging seasonal theme." 
      },
      challenge: { 
        ar: "عرض تفاصيل باقات طبية دقيقة وقوائم أسعار وتحاليل متعددة دون ازدحام بصري، وكسر الجمود والرهبة المعتادة من الإجراءات الطبية وعلاجات العظام.", 
        en: "Displaying detailed medical tests and pricing without visual clutter, while breaking the intimidating nature of orthopedic and joint procedures." 
      },
      solution: { 
        ar: "ابتكار شخصية كرتونية لطيفة (العظمة المسترخية على الشاطئ) تربط بين عافية العظام وأجواء الصيف، مع تنظيم الأسعار والباقات في جداول بصرية واضحة تحفّز على الحجز والاستفسار.", 
        en: "Creating a playful summer-themed mascot (a relaxing bone character) paired with well-organized, readable pricing cards that encourage quick inquiries and bookings." 
      },
      gallery: [
        { src: "assets/img/work/nokhbah/nk18.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk1.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk2.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk3.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk4.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk5.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk6.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk7.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk8.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk9.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk10.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk11.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk15.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk16.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk17.jpg", size: "half" },
        { src: "assets/img/work/nokhbah/nk12.png", size: "half" },
        { src: "assets/img/work/nokhbah/nk13.png", size: "half" },
        { src: "assets/img/work/nokhbah/nk14.png", size: "half" },
      ]
    },

   /*هنا تكمله الاعمال الاخرى */
    {
      slug: "crumeli-marketing", year: "2026",
      title: { ar: "كرومِلي — تسويق", en: "Crumeli — Marketing" },
      category: { ar: "تطبيقات تسويق", en: "Marketing applications" },
      client: { ar: "كرومِلي", en: "Crumeli" },
      services: ["marketing"],
      cover: "assets/img/work/marketing/cr-1.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/marketing/m1.PNG" },
        { src: "assets/img/work/marketing/m2.PNG" },
        { src: "assets/img/work/marketing/m3.png" },
        { src: "assets/img/work/marketing/m4.jpg" },
        { src: "assets/img/work/marketing/m5.png" },
        { src: "assets/img/work/marketing/m6.png" },
        { src: "assets/img/work/marketing/m7.png" },
        { src: "assets/img/work/marketing/m8.png" },
        { src: "assets/img/work/marketing/m9.png" },
        { src: "assets/img/work/marketing/m10.jpg" },
        { src: "assets/img/work/marketing/m11.jpg" },
        { src: "assets/img/work/marketing/m12.jpg" },
        { src: "assets/img/work/marketing/m13.jpg" },
        { src: "assets/img/work/marketing/m14.jpg" },
        { src: "assets/img/work/marketing/m15.png" },

      ]
    },
    {
      slug: "ai-presentation", year: "2026", display: "long",
      title: { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
      category: { ar: "عرض تقديمي", en: "Presentation" },
      client: { ar: "مقرر مهارات الحاسب", en: "Computer Skills course" },
      services: ["presentations"],
      cover: "assets/img/work/ai/ai-1.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/ai/ai-1.jpg" },
        { src: "assets/img/work/ai/ai-2.jpg" },
        { src: "assets/img/work/ai/ai-3.jpg" },
        { src: "assets/img/work/ai/ai-4.jpg" },
        { src: "assets/img/work/ai/ai-5.jpg" }
      ]
    },
    {
      slug: "moms-heart", year: "2026", display: "long",
      title: { ar: "Mom's Heart", en: "Mom's Heart" },
      category: { ar: "عرض تقديمي", en: "Presentation" },
      client: { ar: "Mom's Heart — متجر ألعاب تعليمية", en: "Mom's Heart — Educational toys store" },
      services: ["presentations"],
      cover: "assets/img/work/moms-heart/mh-1.jpg", video: "",
      summary: { ar: "", en: "" }, challenge: { ar: "", en: "" }, solution: { ar: "", en: "" },
      gallery: [
        { src: "assets/img/work/moms-heart/mh-1.jpg" },
        { src: "assets/img/work/moms-heart/mh-2.jpg" },
        { src: "assets/img/work/moms-heart/mh-3.jpg" },
        { src: "assets/img/work/moms-heart/mh-4.jpg" },
        { src: "assets/img/work/moms-heart/mh-5.jpg" }
      ]
    },
  ],

  /* ---------- شعارات العملاء (شريط متحرك) ---------- */
  clients: [
    { name: "Nakhla", logo: "assets/img/logo-1.png" },
    { name: "Masar", logo: "assets/img/logo-2.png" },
    { name: "Sadu", logo: "assets/img/logo-3.png" },
    { name: "Wafi", logo: "assets/img/logo-4.png" },
    { name: "Rawi", logo: "assets/img/logo-9.png" },
    { name: "Dune", logo: "assets/img/logo-6.png" },
    { name: "Qimam", logo: "assets/img/logo-7.png" },
    { name: "Tamr", logo: "assets/img/logo-8.png" },
    { name: "Ofoq", logo: "assets/img/logo-10.png" },
    { name: "Zeen", logo: "assets/img/logo-12.png" },
    { name: "Logo-13", logo: "assets/img/logo-13.png" },
    { name: "Logo-14", logo: "assets/img/logo-14.png" },
    { name: "Logo-15", logo: "assets/img/logo-15.png" },
    { name: "Logo-16", logo: "assets/img/logo-16.png" },
    { name: "Logo-17", logo: "assets/img/logo-17.png" },
    { name: "Logo-18", logo: "assets/img/logo-18.png" },
    { name: "Logo-19", logo: "assets/img/logo-19.png" },
    { name: "Logo-20", logo: "assets/img/logo-20.png" },
    { name: "Logo-21", logo: "assets/img/logo-21.png" },
    { name: "Logo-22", logo: "assets/img/logo-22.png" },
    { name: "Logo-23", logo: "assets/img/logo-23.png" },
    { name: "Logo-24", logo: "assets/img/logo-24.png" },
    { name: "Logo-25", logo: "assets/img/logo-25.png" },
    { name: "Logo-26", logo: "assets/img/logo-26.png" },
    { name: "Logo-27", logo: "assets/img/logo-27.png" },
    { name: "Logo-28", logo: "assets/img/logo-28.png" },
    { name: "Logo-29", logo: "assets/img/logo-29.png" },
    { name: "Logo-30", logo: "assets/img/logo-30.png" },
    { name: "Logo-31", logo: "assets/img/logo-31.png" },
    { name: "Logo-32", logo: "assets/img/logo-32.png" },
    { name: "Logo-33", logo: "assets/img/logo-33.png" },
    { name: "Logo-34", logo: "assets/img/logo-34.png" },
    { name: "Logo-35", logo: "assets/img/logo-35.png" },
  ],



  /* ---------- صفحة الأعمال ---------- */
  work: {
    eyebrow: { ar: "الأعمال", en: "Work" },
    title: { ar: "مشاريع صنعتها بحب", en: "Projects made with care" },
    text: { ar: "مجموعة مختارة من الهويات والمطبوعات والمواقع التي صممتها لعلامات في قطاعات مختلفة.", en: "A selection of identities, print and websites designed for brands across different sectors." },
    // نصوص المجلدات
    projects: { ar: "مشاريع", en: "projects" },
    designs: { ar: "تصميم", en: "designs" },
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
    title: { ar: "أهلاً، أنا أنوار", en: "Hi, I'm Anwar" },
    // الجملة الكبيرة تحت العنوان
    lead: { ar: "مصممة جرافيك متخصصة في الهويات البصرية", en: "A graphic designer specialising in brand identity" },
    // باقي النبذة (بخط أصغر)
    intro: { ar: "أؤمن أن وراء كل تصميم جيد فكرة واضحة، وأن التفاصيل هي ما يمنحها حضور. أنا مصممة جرافيك أستمتع بتطوير الأفكار وتحويلها إلى حلول بصرية متكاملة. أحرص أن يكون لكل مشروع أسلوبه وشخصيته الخاصة، وأولي التفاصيل عناية كبيرة للوصول إلى نتيجة متناسقه ومدروسة.", en: "I believe that behind every great design lies a clear idea, and it is the details that give it presence. As a graphic designer, I enjoy developing concepts and turning them into cohesive visual solutions. I strive to ensure every project has its own unique style and personality, paying close attention to detail to achieve a harmonious and well crafted result." },

    stepsEyebrow: { ar: "طريقة العمل", en: "Approach" },
    stepsTitle: { ar: "أربع مراحل واضحة", en: "Four clear steps" },
    steps: [
       { icon: "compass", bg: "#c9cbbb", fg: "#1d1b18", title: { ar: "الاكتشاف", en: "Discover" }, text: { ar: "نجلس معاً لنفهم علامتك وجمهورك ومنافسيك، ونحدد الهدف بوضوح.", en: "We sit down to understand your brand, audience and competitors, and define the goal clearly." } },
      { icon: "lightbulb", bg: "#d6c3b2", fg: "#1d1b18", title: { ar: "الفكرة", en: "Define" }, text: { ar: "أحول ما تعلمناه إلى استراتيجية واتجاه بصري واضح نتفق عليه قبل التصميم.", en: "I turn what we learned into a strategy and a clear visual direction we agree on before designing." } },
      { icon: "pen", bg: "#d9cfc1", fg: "#1d1b18", title: { ar: "التصميم", en: "Design" }, text: { ar: "أصمم المقترح وأشرح لك كل قرار، ثم نطوره معاً حتى يكتمل.", en: "I design the proposal and walk you through every decision, then we refine it together." } },
      { icon: "package", bg: "#e4d8c3", fg: "#1d1b18", title: { ar: "التسليم", en: "Deliver" }, text: { ar: "تستلم كل الملفات ودليل استخدام واضح، وأبقى معك بعد الإطلاق.", en: "You get every file and clear guidelines, and I stay with you after launch." } }
    ]
  },

  /* ---------- صفحة التواصل ---------- */
  contact: {
    eyebrow: { ar: "تواصل", en: "Contact" },
    title: { ar: "لنصنع شيئاً جميلاً معاً", en: "Let's make something beautiful together" },
    text: { ar: "أخبرني عن مشروعك، وسأرد عليك .", en: "Tell me about your project and I'll get back to you within two working days." },
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

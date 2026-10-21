/* =====================================================================
   content.js — كل محتوى الموقع في مكان واحد
   ---------------------------------------------------------------------
   • كل نص مكتوب باللغتين: { ar: "…", en: "…" }
   • غيّر النصوص والصور هنا فقط، والصفحات تتحدث تلقائياً.
   • الصور موجودة في assets/img/ — استبدلها بصورك بنفس الاسم،
     أو ضع اسم ملف جديد هنا (jpg / png / webp / svg / avif).
   • المحتوى الحالي تجريبي (أسماء عملاء وآراء وهمية) — استبدله بمحتواك الحقيقي.
   ===================================================================== */

const SITE = {
  /* ---------- معلومات المصمم ---------- */
  brand: {
    name: { ar: "أنوار سيراج", en: "Anwar Siraj" },
    // الكلمتان الكبيرتان في أعلى الصفحة الرئيسية
    wordTop: { ar: "أنوار", en: "Sara" },
    wordBottom: { ar: "سيراج", en: "Nasser" },
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
    { page: "services", label: { ar: "الخدمات", en: "Services" } },
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
      ar: "أصمّم علامات تجارية تضيف طبقة جديدة إلى الحياة اليومية. استراتيجية، هوية، مطبوعات، مواقع، وحضور رقمي: خمس خدمات ورؤية واحدة. ما نصنعه معاً سيجد مكانه في العالم، فلنجعله أجمل.",
      en: "I design brands that add an extra layer to everyday life. Strategy, identity, print, web and digital: five services, one vision. What we make together will find its place in the world, so let's make it beautiful."
    },
    casesEyebrow: { ar: "الأعمال", en: "Work" },
    casesTitle: { ar: "نتائج لعلامات تعرف من هي", en: "Results for brands that know who they are" },
    stickyTitle1: { ar: "من الفكرة", en: "From idea" },
    stickyTitle2: { ar: "إلى التنفيذ", en: "to execution" },
    stickyImages: ["assets/img/work/crumeli/idea-1.jpg", "assets/img/work/crumeli/idea-2.jpg", "assets/img/work/crumeli/execution.jpg"],
    servicesEyebrow: { ar: "الخدمات", en: "Services" },
    servicesTitle: { ar: "كل ما تحتاجه علامتك، من مكان واحد", en: "Everything your brand needs, in one place" },
    aboutEyebrow: { ar: "من أنا", en: "About" },
    aboutTitle: { ar: "مصممة تهتم بالتفاصيل", en: "A designer who sweats the details" },
    aboutText: {
    ar: "أنا أنوار، مصممة جرافيك متخصصة في الهويات البصرية. أبدأ كل مشروع بفهم العلامة وجمهورها، ثم أحوّل الفكرة إلى تصميم واضح ومتناسق في كل تفاصيله.",
    en: "I'm Anwar, a graphic designer specialising in visual identities. I start every project by understanding the brand and its audience, then turn the idea into a clear, consistent design down to the last detail."},
    aboutImage: "assets/img/studio.svg",
        // الأدوات اللي تظهر في قسم "من أنا" (احذف أو أضف براحتك)
    toolsLabel: { ar: "أدواتي", en: "My tools" },
    tools: ["Illustrator", "Photoshop", "InDesign", "Canva"],
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
      slug: "strategy", icon: "circle", bg: "#d4f36b", fg: "#161412",
      title: { ar: "استراتيجية العلامة", en: "Brand strategy" },
      text: {
        ar: "علامَ تقف علامتك؟ ليس ما تبيعه، بل من أنت. أبدأ من هنا، وكل شيء بعدها ينبع من هذه الإجابة: القصة، الاسم، والعبارة.",
        en: "What does your brand stand for? Not what you sell, but who you are. I start there, and everything else flows from it: the story, the name, the tagline."
      },
      tags: [{ ar: "قصة العلامة", en: "Brand story" }, { ar: "التسمية", en: "Naming" }, { ar: "العبارة التسويقية", en: "Tagline" }]
    },
    {
      slug: "identity", icon: "square", bg: "#ff7a59", fg: "#161412",
      title: { ar: "الهوية البصرية", en: "Visual identity" },
      text: {
        ar: "يتعرف الناس على علامتك قبل أن يقرؤوا كلمة واحدة: من لون، أو شكل، أو خط. الهوية ليست زينة تضاف لاحقاً، بل هي طريقة وقوف علامتك في العالم.",
        en: "People recognise your brand before reading a single word: a colour, a shape, a typeface. Identity isn't decoration added later; it's how your brand stands in the world."
      },
      tags: [{ ar: "الشعار", en: "Logo" }, { ar: "النظام البصري", en: "Visual system" }, { ar: "دليل الهوية", en: "Brand guidelines" }]
    },
    {
      slug: "print", icon: "arch", bg: "#c6b6ff", fg: "#161412",
      title: { ar: "المطبوعات والتغليف", en: "Print & packaging" },
      text: {
        ar: "المطبوعات هي علامتك خارج الشاشة: شيء يُمسك ويُحَسّ ويُحتفظ به. التفاصيل هنا يشعر بها الناس حتى لو لم يروها: الورق، الملمس، وطريقة الطباعة.",
        en: "Print is your brand offline: something to hold, feel and keep. The details here are felt even when they aren't seen: paper, texture, printing method, finish."
      },
      tags: [{ ar: "بطاقات العمل", en: "Business cards" }, { ar: "التغليف", en: "Packaging" }, { ar: "الملصقات", en: "Posters" }, { ar: "الكتب والمجلات", en: "Books & magazines" }]
    },
    {
      slug: "web", icon: "triangle", bg: "#0f4d4a", fg: "#f5f0e8",
      title: { ar: "تصميم المواقع", en: "Web design" },
      text: {
        ar: "موقعك هو واجهتك على الإنترنت. ليس قالباً تملؤه، بل مكان يشعر فيه الزائر إن كانت علامتك صادقة أم لا. أصمم مواقع ومتاجر تبدو مألوفة من الثانية الأولى.",
        en: "Your website is your shopfront online. It isn't a template to fill in; it's where people sense whether your brand rings true. I design sites and shops that feel familiar from the first second."
      },
      tags: [{ ar: "المواقع", en: "Websites" }, { ar: "صفحات الهبوط", en: "Landing pages" }, { ar: "المتاجر", en: "E-commerce" }]
    },
    {
      slug: "social", icon: "wave", bg: "#ffc46b", fg: "#161412",
      title: { ar: "الحضور الرقمي", en: "Digital presence" },
      text: {
        ar: "علامتك موجودة كل يوم في عشرات الصفحات والرسائل. أصمم قوالب للسوشيال والبريد والإعلانات تملؤها أنت بنفسك، فتبقى علامتك مميزة دون أن تبدأ من الصفر كل مرة.",
        en: "Your brand shows up every day in feeds and inboxes. I design templates for social, email and ads that you fill in yourself, so your brand stays recognisable without starting from scratch."
      },
      tags: [{ ar: "تصاميم السوشيال", en: "Social media" }, { ar: "النشرات البريدية", en: "Email" }, { ar: "الإعلانات الرقمية", en: "Digital ads" }]
    }
  ],

  /* ---------- الأعمال ---------- */
  // services: أسماء slug من قائمة الخدمات أعلاه (تُستخدم في الوسوم والفلترة)
  // video: اختياري — ضع مسار ملف mp4 ليظهر بدل صورة الغلاف
  // gallery size: full (عرض كامل) أو half (نصف عرض)
  cases: [
    {
      slug: "nakhla-coffee", year: "2025", featured: true,
      title: { ar: "نخلة كوفي", en: "Nakhla Coffee" },
      category: { ar: "مقاهي ومطاعم", en: "Food & beverage" },
      client: { ar: "نخلة كوفي، الرياض", en: "Nakhla Coffee, Riyadh" },
      services: ["strategy", "identity", "print", "social"],
      cover: "assets/img/nakhla-coffee-cover.svg", video: "",
      summary: { ar: "هوية دافئة لمقهى مختص يحتفي بالتمر والقهوة السعودية.", en: "A warm identity for a specialty café celebrating dates and Saudi coffee." },
      challenge: {
        ar: "أراد المؤسسون مقهى حديثاً لا يفقد روح الضيافة السعودية، في سوق مزدحم بالعلامات المتشابهة.",
        en: "The founders wanted a modern café that keeps the spirit of Saudi hospitality, in a market crowded with look-alike brands."
      },
      solution: {
        ar: "بنينا نظاماً بصرياً من أشكال سعف النخل المبسطة وألوان التمر، يمتد من الأكواب إلى القائمة والواجهة.",
        en: "We built a visual system from simplified palm-frond shapes and date-inspired colours, running from cups to menus to the storefront."
      },
      gallery: [
        { src: "assets/img/nakhla-coffee-1.svg", size: "full" },
        { src: "assets/img/nakhla-coffee-2.svg", size: "half" },
        { src: "assets/img/nakhla-coffee-3.svg", size: "half" },
        { src: "assets/img/nakhla-coffee-4.svg", size: "full" }
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
    {
      slug: "rawi-publishing", year: "2023", featured: true,
      title: { ar: "دار راوي للنشر", en: "Rawi Publishing" },
      category: { ar: "نشر", en: "Publishing" },
      client: { ar: "دار راوي", en: "Rawi House" },
      services: ["print"],
      cover: "assets/img/rawi-publishing-cover.svg", video: "",
      summary: { ar: "سلسلة أغلفة كتب لدار نشر مستقلة.", en: "A series of book covers for an independent publisher." },
      challenge: { ar: "سلسلة من اثني عشر كتاباً تحتاج هوية موحدة، مع شخصية خاصة لكل عنوان.", en: "A twelve-book series that needed a unified look, while giving each title its own character." },
      solution: { ar: "شبكة ثابتة للعنوان والمؤلف، وتكوينات هندسية مختلفة لكل كتاب تعبّر عن موضوعه.", en: "A fixed grid for title and author, with a different geometric composition for each book that hints at its theme." },
      gallery: [
        { src: "assets/img/rawi-publishing-1.svg", size: "full" },
        { src: "assets/img/rawi-publishing-2.svg", size: "half" },
        { src: "assets/img/rawi-publishing-3.svg", size: "half" }
      ]
    },
    {
      slug: "dune-skincare", year: "2023", featured: true,
      title: { ar: "ديون للعناية", en: "Dune Skincare" },
      category: { ar: "تجميل", en: "Beauty" },
      client: { ar: "ديون", en: "Dune" },
      services: ["identity", "print", "social"],
      cover: "assets/img/dune-skincare-cover.svg", video: "",
      summary: { ar: "هوية وتغليف لعلامة عناية بالبشرة مستوحاة من الصحراء.", en: "Identity and packaging for a desert-inspired skincare brand." },
      challenge: { ar: "علامة ناشئة تنافس أسماء عالمية على الرف نفسه.", en: "A young brand competing with global names on the same shelf." },
      solution: { ar: "تغليف بألوان الرمل وأشكال الكثبان، وخط أنيق، وقوالب سوشيال يسهل على الفريق استخدامها.", en: "Packaging in sand tones with dune-shaped forms, an elegant typeface and social templates the team can use with ease." },
      gallery: [
        { src: "assets/img/dune-skincare-1.svg", size: "full" },
        { src: "assets/img/dune-skincare-2.svg", size: "half" },
        { src: "assets/img/dune-skincare-3.svg", size: "half" }
      ]
    }
  ],

  /* ---------- آراء العملاء (تجريبية — استبدلها بآراء حقيقية) ---------- */
  testimonials: [
    { name: { ar: "اسم العميل", en: "Client name" }, company: { ar: "نخلة كوفي", en: "Nakhla Coffee" },
      quote: { ar: "فهمت أنوار ما نريده من أول اجتماع. الهوية الجديدة تشبهنا تماماً، وعملاؤنا لاحظوا الفرق فوراً.", en: "Sara understood what we wanted from the very first meeting. The new identity feels exactly like us, and our customers noticed straight away." } },
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
    text: { ar: "مجموعة مختارة من الهويات والمطبوعات والمواقع التي صممتها لعلامات في قطاعات مختلفة.", en: "A selection of identities, print and websites designed for brands across different sectors." }
  },

  /* ---------- صفحة من أنا ---------- */
  about: {
    eyebrow: { ar: "من أنا", en: "About" },
    title: { ar: "أهلاً، أنا أنوار", en: "Hi, I'm Sara" },
    intro: { ar: "مصممة جرافيك متخصصة في الهويات البصرية،أؤمن أن وراء كل تصميم جيد فكرة واضحة، وأن التفاصيل هي ما يمنحها حضور. أنا مصممة جرافيك أستمتع بتطوير الأفكار وتحويلها إلى حلول بصرية متكاملة. أحرص أن يكون لكل مشروع أسلوبه وشخصيته الخاصة، وأولي التفاصيل عناية كبيرة للوصول إلى نتيجة متناسقه ومدروسة.", en: "A graphic designer specialising in brand identity. I believe that behind every great design lies a clear idea, and it I believe that behind every great design lies a clear idea, and it is the details that give it presence. As a graphic designer, I is the details that give it presence. As a graphic designer, I enjoy developing concepts and turning them into cohesive enjoy developing concepts and turning them into cohesive  visual solutions. I strive to ensure every project has its own visual solutions. I strive to ensure every project has its own unique style and personality, paying close attention to detail to unique style and personality, paying close attention to detail to achieve a harmonious and well crafted result." },
    portrait: "assets/img/portrait.svg",
    story: {
      ar: "بدأت رحلتي في وكالات تصميم كبيرة، حيث تعلمت أن كل قرار تصميمي يجب أن يكون له سبب. بعد سنوات من العمل مع علامات كبيرة، أسست الاستوديو الخاص بي لأعمل عن قرب مع أصحاب المشاريع الذين يريدون علامة صادقة تشبههم.",
      en: "My journey began in large design agencies, where I learned that every design decision needs a reason. After years of working with big brands, I set up my own studio to work closely with founders who want an honest brand that feels like them."
    },
    
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

/* لا تعدّل السطر التالي */
if (typeof window !== "undefined") window.SITE = SITE;

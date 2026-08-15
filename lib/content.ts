/**
 * كل نصوص الموقع مستخرجة من الموقع القديم sheikhkasem.com
 * لا يوجد أي محتوى مُختلق. المواضع التي لم يتوفر نصها موسومة بـ TODO.
 */

export const company = {
  nameAr: "شركة الشيخ قاسم لصناعة المواد الغذائية والتوابل",
  shortAr: "الشيخ قاسم",
  nameEn: "Sheikh Kasem For Food Industries & Spices",
  cityAr: "القدس",
  descEn: "SHEIKH KASEM CO FOR FOOD INDUSTRY AND SPICES - JERUSALEM",
  since: "1934",
  sinceLabel: "خبرات ممتدة منذ العام",
  rightsAr: "جميع الحقوق محفوظة لشركة الشيخ قاسم",
  rightsEn: "All Right Reserved to Sheikh Kasem Co.",
};

export const hero = {
  title: "ارث من النكهات",
  titleAccent: "متجذرة في التقاليد",
  cta: "أعرف أكثر",
  ctaHref: "/about-us",
};

/** حقائق مأخوذة من صفحات الموقع القديم فقط — لا أرقام مُقدّرة */
export const facts = [
  { value: "1934", label: "بداية المسيرة", note: "خبرات ممتدة منذ العام" },
  { value: "+90", label: "صنف من البهارات", note: "تُستورد من جميع أنحاء العالم" },
  { value: "7", label: "أصناف رئيسية", note: "تغطي احتياجات المطبخ" },
  { value: "9", label: "مدن للتوزيع", note: "نقاط بيع في الوطن" },
];

/**
 * عدّادات الصفحة الرئيسية في الموقع القديم. القيم لم تكن ظاهرة (تُحسب من
 * الباك اند وتظهر كـ +0)، لذلك تُركت فارغة بانتظار أرقام من الشركة.
 */
export const counters: { label: string; value: number | null }[] = [
  { label: "منتجات معبئة", value: null }, // TODO: رقم من الشركة
  { label: "منتجات مصنعة", value: null }, // TODO: رقم من الشركة
  { label: "طاقم العمل", value: null }, // TODO: رقم من الشركة
];

export type Category = {
  slug: string;
  /** الاسم في شبكة الأصناف */
  name: string;
  /** عنوان صفحة الصنف */
  title: string;
  /** السطر المرافق في الصفحة الرئيسية */
  tagline: string;
  /** الاسم المختصر في التذييل */
  short: string;
  body: string;
  /** لون الصنف من الطيف — مشتق من لون المادة نفسها */
  hue: string;
  hueName: string;
  /** لون النص فوق الـ hue المشبع، مختار لتباين كافٍ */
  ink: "dark" | "light";
  /** صورة المنتج من الموقع القديم */
  image?: string;
  /** يُعرض بدل الصورة حين لا تتوفر صورة منتج لهذا الصنف */
  brandLogo?: string;
  /** وصف الصورة لقارئات الشاشة */
  imageAlt?: string;
  /** أسماء منتجات مقروءة من العبوات في صور الموقع القديم */
  products?: string[];
  /** صفحة الصنف في كتالوج الشركة */
  catalogPage?: number;
};

export const categories: Category[] = [
  {
    slug: "spice",
    name: "بهارات وتوابل",
    title: "البهارات والتوابل",
    tagline: "مليئة بالنكهة",
    short: "بهارات",
    body: "مجموعة متنوعة تصل لأكثر من 90 صنف يتم استيرادها من جميع أنحاء العالم، ثم تُعالج وتُطحن وتُخلط وتُعبّأ قبل أن تصل إلى مطبخك.",
    hue: "#E0A32A",
    image: "/products/spice.webp",
    imageAlt: "عبوتا بهار مقلوبة وبهارات مشكلة من الشيخ قاسم",
    products: ["بهار تحمير الدجاج", "بهار مقلوبة", "بهارات مشكلة"],
    ink: "dark",
    hueName: "كركم",
  },
  {
    slug: "legume",
    name: "بقوليات وحبوب",
    title: "البقوليات والحبوب",
    tagline: "تنوع متناغم",
    short: "بقوليات",
    body: "تشمل العديد من الخيارات الصحية للأشخاص الذين يبحثون عن مصادر البروتين النباتي، وتناسب الأذواق والاحتياجات الغذائية المختلفة. وقد طُوّرت العبوة للحفاظ على البقوليات طازجة وسهلة التخزين.",
    hue: "#7E8B4A",
    image: "/products/legume.webp",
    imageAlt: "كيسا بقوليات الشيخ قاسم بوزن كيلوغرام: فاصولياء حمراء وحمص",
    products: ["فاصولياء حمراء", "حمص", "عدس", "كينوا بيضاء", "كينوا سوداء", "كينوا حمراء", "كينوا ملونة", "شوفان", "فريكة"],
    ink: "dark",
    hueName: "عدس أخضر",
  },
  {
    slug: "baladi",
    name: "منتجات بلدية",
    title: "المنتجات البلدية",
    tagline: "ارث غني عبر الأجيال",
    short: "منتجات بلدية",
    body: "في مسيرة طويلة امتدت من الأجداد الى للأبناء من خلال العمل الدؤوب وصولاً لشركة الشيخ قاسم اليوم. كانت البداية في طحن الزعتر البلدي وخلطه وتعبئته وتوزيعه، حتى صارت خلطتها المقدسية الأشهر على مستوى الوطن.",
    hue: "#46613F",
    image: "/products/tahini.webp",
    imageAlt: "عبوة طحينة الشيخ قاسم بوزن 450 غراماً",
    products: ["زعتر القدس", "طحينة"],
    ink: "light",
    hueName: "زعتر بلدي",
  },
  {
    slug: "sweet",
    name: "مكونات الحلويات",
    title: "مكونات الحلويات",
    tagline: "لجميع الوصفات",
    short: "مكونات الحلويات",
    body: "تتفرد الشيخ قاسم في تصنيع مجموعة كبيرة ومتنوعة من مكونات الحلويات التي تحتاجها معظم وصفات الحلويات. وحرصاً على الجودة، يُعبّأ كل صنف على حدة بغلاف يناسب طبيعته، لتبقى جودته محفوظة حتى لحظة وصوله إلى رفّ مطبخك.",
    hue: "#D8C79A",
    image: "/products/sweet.webp",
    imageAlt: "عبوة جيلي بنكهة الفراولة وعلبة كاكاو من الشيخ قاسم",
    products: ["جيلي بنكهة الفراولة", "كاكاو", "قرشلة", "قرشلة مبهرة"],
    ink: "dark",
    hueName: "محلب",
  },
  {
    slug: "oil",
    name: "زيوت ومنكهات",
    title: "الزيوت والمنكهات",
    tagline: "نقية وعالية الجودة",
    short: "زيوت ومنكهات",
    body: "يوفر الشيخ قاسم مجموعة متنوعة من الخل والمياه العطرية بما في ذلك خل التفاح وغيره. والزيوت والمنكهات مثل دبس الرمان مثالياً لإضافة الطعم الغني للسلطات والأطباق الأخرى، وهي من أساسيات أي مطبخ.",
    hue: "#7A2233",
    image: "/products/oil.webp",
    imageAlt: "دلو صلصة عمبة وبرطمان معجون فليفلة من الشيخ قاسم",
    products: ["خل التفاح", "خل أبيض", "خل فواكه", "خل ثوم", "زيت زيتون بكر", "صلصة عمبة", "معجون فليفلة"],
    ink: "light",
    hueName: "دبس رمان",
  },
  {
    slug: "almonds-seeds",
    name: "لوزيات وبذور",
    title: "اللوزيات والبذور",
    tagline: "خفيفة وصحية",
    short: "لوزيات وبذور",
    body: "مجموعة مختارة من أفضل المصادر وأجودها، يتم معالجتها بعناية لضمان نضارتها ونكهتها وجودتها. سواء كوجبة خفيفة صحية أو كمكوّن في وصفتك المفضلة، فهي تبقى خياراً رائعا.",
    hue: "#96703F",
    image: "/products/almonds-seeds.webp",
    imageAlt: "عبوة فستق حلبي مقشر وبرطمان بذور التشيا من الشيخ قاسم",
    products: ["فستق حلبي مقشر", "بذور التشيا"],
    ink: "light",
    hueName: "قشرة لوز",
    catalogPage: 34,
  },
  {
    slug: "driedfruit",
    name: "فواكه مجففة",
    title: "الفواكه المجففة",
    tagline: "لذيذة ومغذية",
    short: "فواكه مجففة",
    body: "تشكيلة مميزة من الخيارات اللذيذة والمغذية، تُعالج وتُغلّف بعناية لمن يبحث عن غذاء سريع ومفيد. تناسب محبي الهواء الطلق والرحلات كما تناسب مائدة العائلة، وعبوتها خفيفة وسهلة التخزين ومثالية أثناء التنقل.",
    hue: "#C4562B",
    // لا تتوفر صورة منتج لهذا الصنف في الموقع القديم، فتُعرض علامته التجارية
    brandLogo: "/brands/driedfruit.webp",
    imageAlt: "شعار فواكه مجففة الشيخ قاسم",
    ink: "light",
    hueName: "مشمش مجفف",
    catalogPage: 46,
  },
];

export const categoriesIntro =
  "تقدم الشيخ قاسم مجموعة متنوعة من المنتجات الغذائية عالية الجودة والتي تلبي كافة احتياجاتك";

export const catalogUrl = "https://online.fliphtml5.com/skupy/fszc/";
export const catalogLabel = "كتالوج المنتجات";

export const quality = {
  title: "ضمان الجودة",
  lead: "تلتزم شركة الشيخ قاسم بتقديم",
  body: "أعلى معايير الجودة والسلامة الغذائية لضمان سلامة المنتجات وضمان رضا المستهلك",
  more: "المزيد",
};

export const certificates = {
  title: "الشهادات",
  lead: "نؤمن بأن الجودة هي مفتاح النجاح",
  body: "لذلك سعينا للحصول على شهادة الجودة العالمية ISO 22000:2018، وهي تعكس التزاماً مستمراً بأعلى معايير الجودة والسلامة في كل مرحلة من مراحل الإنتاج.",
  standard: "ISO 22000:2018",
  standardLabel: "شهادة الجودة العالمية",
};

/** النصان التاليان غير متوفرين في الموقع القديم (الصفحتان محجوبتان) */
export const general = {
  title: "نظرة عامة",
  body: null as string | null, // TODO: نص «نظرة عامة» من الشركة
};

export const policy = {
  title: "سياسة الشركة",
  body: null as string | null, // TODO: نص «سياسة الشركة» من الشركة
};

export const salesPoints = [
  { slug: "jerusalem", name: "القدس" },
  { slug: "bethlehem", name: "بيت لحم" },
  { slug: "hebron", name: "الخليل" },
  { slug: "ramallah", name: "رام الله" },
  { slug: "tulkarm", name: "طولكرم" },
  { slug: "nablus", name: "نابلس" },
  { slug: "jenin", name: "جنين" },
  { slug: "qalqilya", name: "قلقيلية" },
  { slug: "jericho", name: "أريحا" },
];

export const contact = {
  title: "اتصل بنا",
  headOfficeLabel: "المقر الرئيسي",
  headOffice: "القدس - العيزرية - الشارع الرئيسي - تفرع شارع جامعة القدس المفتوحة",
  addressShort: "العيزرية - شارع أريحا - تفرع ش الجامعة",
  hoursLabel: "مواعيد الدوام",
  days: "ايام العمل: السبت - الخميس",
  hours: "ساعات العمل: 8 صباحاً - 4 مساءً",
  channelsLabel: "وسائل التواصل",
  companyPhoneLabel: "رقم الشركة",
  companyPhone: "022798849",
  companyPhoneDisplay: "+972 02 - 279 - 8849",
  salesPhoneLabel: "المبيعات",
  salesPhone: "0592229270",
  salesPhoneDisplay: "+970 592 - 229 - 270",
  emailLabel: "البريد الألكتروني",
  email: "contact@sheikhkasem.com",
  formLabel: "ارسل لنا",
  whatsapp: "https://wa.me/message/FCDEHNDDYGMPI1",
  salesCtaLine1: "تواصــــل",
  salesCtaLine2: "مع فريــق المبيعات",
  salesCtaButton: "اتصل الان",
};

export const nav = [
  { label: "الرئيسية", href: "/" },
  {
    label: "من نحن",
    href: "/about-us",
    children: [
      { label: "نظرة عامة", href: "/about-us/general" },
      { label: "سياسة الشركة", href: "/about-us/policy" },
      { label: "ضمان الجودة", href: "/about-us/quality" },
      { label: "الشهادات", href: "/about-us/certificates" },
    ],
  },
  { label: "المنتجات", href: "/products" },
  { label: "اتصل بنا", href: "/contact" },
];

export const brandsTitle = "العلامات التجارية";
export const salesPointsTitle = "نقاط البيع";
export const categoriesTitle = "أصناف المنتجات";

/** شعار الشركة — الملفات مأخوذة من الموقع القديم */
export const logo = {
  /** أفقي: النص الإنجليزي + القبة + النص العربي. للترويسة */
  lockup: "/logo-lockup.webp",
  /** عمودي: القبة فوق الاسم. للاستخدامات المربعة */
  stacked: "/logo-stacked.webp",
  alt: "شعار شركة الشيخ قاسم — القدس",
};

/**
 * العلامات التجارية — القسم كان موجوداً في الموقع القديم بلا أسماء ظاهرة.
 * الأسماء هنا مقروءة من الشعارات نفسها الموجودة على الموقع.
 */
export const brands = [
  { slug: "spices", name: "بهارات الشيخ قاسم", nameEn: "Sheikh Kasem Spices", logo: "/brands/spices.webp" },
  { slug: "zaatar", name: "زعتر القدس", nameEn: "Thyme of Jerusalem", logo: "/brands/zaatar.webp" },
  { slug: "legumes", name: "بقوليات الشيخ قاسم", nameEn: "Sheikh Kasem Legumes", logo: "/brands/legumes.webp" },
  { slug: "driedfruit", name: "فواكه مجففة", nameEn: "Sheikh Kasem Dried Fruits", logo: "/brands/driedfruit.webp" },
  { slug: "oliveoil", name: "زيت زيتون بكر", nameEn: "Virgin Olive Oil", logo: "/brands/oliveoil.webp" },
  { slug: "freekeh", name: "فريكة", nameEn: "Grinded Freekeh", logo: "/brands/freekeh.webp" },
  { slug: "gulfgate", name: "بوابة الخليج", nameEn: "Gulf Gate", logo: "/brands/gulfgate.webp" },
];

/** صورة المطحنة — تُستخدم في قسم الإرث */
export const millImage = {
  src: "/products/mill.webp",
  alt: "عامل يفحص الحبوب فوق أكياس الخيش في المطحنة",
};

export function categoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

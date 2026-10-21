import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const SITE = "https://www.sevenoakprestige.com";
const PAGE_URL = `${SITE}/countries/iraq/uk-company-formation`;

const wa = (text: string) => `https://wa.me/447447488755?text=${encodeURIComponent(text)}`;
const WHATSAPP_FORMATION = wa(
  "مرحباً Seven Oak Prestige،\n\nأرغب في تأسيس شركة بريطانية من العراق.\n\nالمدينة:\nطبيعة النشاط:\nالباقة: بريستيج / إيليت / غير متأكد",
);
const WHATSAPP_BANKING = wa(
  "مرحباً Seven Oak Prestige،\n\nلديّ شركة بريطانية LTD قائمة وأرغب في خدمة المساعدة على تقديم طلب حساب تجاري واحد (£300).\n\nاسم الشركة ورقمها:\nطبيعة النشاط:\nبلد الإقامة:",
);
const WHATSAPP_DOCS = wa(
  "مرحباً، أقيم في العراق وأرغب في التحقق من مستندات إثبات العنوان قبل الدفع لتأسيس شركة بريطانية.",
);

const BLOG = {
  iraq: `/blog/uk-company-from-iraq`,
  cost: `/blog/uk-company-formation-from-iraq-cost`,
  banking: `/blog/uk-business-bank-account-for-iraq`,
  identity: `/blog/companies-house-identity-verification-iraqi-residents`,
};

export const IRAQ_PACKAGES = [
  {
    name: "بريستيج",
    latin: "Prestige",
    price: 299,
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    tag: "الخيار المتكامل لمعظم المؤسسين",
    features: [
      "تأسيس شركة LTD وتسجيلها لدى Companies House",
      "رسوم Companies House الحكومية (£100) مشمولة",
      "عنوان المكتب المسجَّل في لندن لمدة 12 شهراً",
      "عنوان خدمة المدير لمدة 12 شهراً",
      "إرشادات حول الخدمات المصرفية التجارية",
    ],
    featured: false,
  },
  {
    name: "إيليت",
    latin: "Elite",
    price: 399,
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    tag: "الحضور البريطاني الأشمل",
    features: [
      "جميع مزايا باقة بريستيج",
      "عنوان تجاري افتراضي لمدة 12 شهراً",
      "المساعدة في التحقق من الهوية لدى Companies House لمدير واحد",
      "مراجعة الملف التعريفي للنشاط التجاري",
    ],
    featured: true,
  },
] as const;

export const BANKING_SERVICE = { price: 300, applications: 1 } as const;

export const POST_PURCHASE_STEPS = [
  ["اختيار الباقة", "اختر باقة بريستيج أو باقة إيليت المناسبة لاحتياجك."],
  ["الدفع الآمن", "أتمم الدفع عبر رابط الدفع الآمن الخاص بالباقة."],
  ["استلام الطلب وإعداد ملفك", "يستلم فريق Seven Oak Prestige طلبك ويُعِدّ حساب الإعداد وملفك يدوياً."],
  ["بريد الإعداد", "يصلك بريد إلكتروني يتضمّن خطوات آمنة وقائمة بالمستندات المطلوبة، بعد مراجعة فريقنا للطلب."],
  ["تقديم المستندات والتفاصيل", "ترسل مستنداتك وتفاصيل الشركة والملكية عبر القناة الآمنة المحدّدة في البريد."],
  ["الامتثال والتحقق من الهوية", "مراجعة اعرف عميلك (KYC) والتحقق من الهوية حيثما ينطبق."],
  ["المراجعة والتقديم", "نراجع البيانات بعناية ثم نقدّم طلب التأسيس إلى Companies House."],
  ["استلام وثائق الشركة", "تصلك شهادة التأسيس ووثائق الشركة بعد اعتماد Companies House للتسجيل."],
] as const;

export const FAQ_AR = [
  ["هل يمكن للمقيم في العراق تأسيس شركة في بريطانيا؟", "نعم. لا يشترط القانون البريطاني أن يكون مدير الشركة أو مساهمها مقيماً في المملكة المتحدة أو حاملاً لجنسيتها، فيمكن للمقيم في العراق تأسيس شركة LTD وامتلاكها بالكامل عن بُعد، شريطة توفير عنوان مكتب مسجَّل داخل المملكة المتحدة واستكمال التحقق من الهوية."],
  ["هل أحتاج إلى السفر إلى بريطانيا أو تعيين مدير بريطاني؟", "لا يلزم عادةً السفر لإتمام التأسيس الإلكتروني المعتاد، ولا يُشترط تعيين مدير مقيم في المملكة المتحدة. تتم الإجراءات إلكترونياً مع فريقنا وCompanies House."],
  ["ما تكلفة تأسيس شركة في بريطانيا من العراق؟", "نقدّم باقتين بسعر ثابت: بريستيج بسعر £299 وإيليت بسعر £399، وتشمل كلتاهما رسوم Companies House الحكومية البالغة £100، إضافة إلى عنوان المكتب المسجَّل وعنوان خدمة المدير لمدة 12 شهراً. أما المحاسبة والإقرارات الضريبية فتُقدَّم كخدمات مستقلة."],
  ["ما المستندات المطلوبة لتسجيل الشركة؟", "جواز سفر ساري المفعول، وإثبات عنوان سكن حديث لا يتجاوز تاريخه ثلاثة أشهر، كفاتورة خدمات أو كشف حساب مصرفي، إلى جانب تفاصيل الملكية ونسب المساهمة ووصف موجز لنشاط الشركة واسمها المقترح."],
  ["هل يمكنني استخدام عنوان منزلي في العراق كعنوان للشركة؟", "يجب أن يكون عنوان المكتب المسجَّل داخل المملكة المتحدة، ولهذا تتضمّن باقتا بريستيج وإيليت عنواناً مسجَّلاً في لندن. ويظل عنوان سكنك الفعلي في العراق محفوظاً لدى Companies House دون نشره، بينما يظهر عنوان خدمة المدير في السجل العام."],
  ["ما هو التحقق من الهوية لدى Companies House؟", "يُلزَم المديرون والأشخاص ذوو السيطرة الجوهرية بالتحقق من هويتهم لدى Companies House. وتتضمّن باقة إيليت مساعدتنا لمدير واحد في استكمال هذه الإجراءات بسلاسة."],
  ["كم تستغرق عملية التأسيس؟", "بعد استكمال المستندات واعتماد إجراءات التحقق، نرفع الطلب إلى Companies House، وتخضع مدة المعالجة لإجراءاتها ومراجعاتها المعتادة."],
  ["هل تشمل باقات التأسيس فتح حساب مصرفي تجاري؟", "تتضمّن الباقتان إرشادات حول الخدمات المصرفية التجارية لمساعدتك على فهم الخيارات المناسبة لنشاطك. أما خدمة المساعدة على تقديم طلب الحساب فهي خدمة مستقلة مخصّصة للشركات البريطانية القائمة."],
  ["لديّ شركة بريطانية قائمة دون حساب تجاري، كيف يمكنكم مساعدتي؟", "نقدّم خدمة مستقلة بسعر £300 تشمل المساعدة في طلب واحد لدى مؤسسة مالية مناسبة: مراجعة ملف الشركة ونشاطها، وتجهيز معلومات الطلب ومستنداته، والمساعدة في تقديمه ومتابعته. تُقدَّم الخدمة وفقاً لمتطلبات المؤسسة المالية، ويخضع فتح الحساب لموافقتها النهائية."],
  ["ما الالتزامات السنوية بعد تأسيس الشركة؟", "تلتزم الشركة البريطانية بتقديم بيان التأكيد السنوي والحسابات السنوية إلى Companies House، وإقرار ضريبة الشركات إلى HMRC حيثما ينطبق. ويسعد فريقنا بتنسيق هذه الخدمات لك بشكل مستقل."],
] as const;

const Price = ({ v }: { v: number }) => <bdi dir="ltr">£{v}</bdi>;
const linkCls = "text-gold-soft underline underline-offset-4 hover:text-gold";

export default function IraqCountryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "الدول", item: `${SITE}/countries` },
      { "@type": "ListItem", position: 3, name: "تأسيس شركة في بريطانيا من العراق", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "تأسيس شركة في بريطانيا من العراق",
    inLanguage: "ar",
    url: PAGE_URL,
    areaServed: "IQ",
    provider: {
      "@type": "Organization",
      name: "Seven Oak Prestige Ltd",
      url: `${SITE}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "124 City Road",
        addressLocality: "London",
        postalCode: "EC1V 2NX",
        addressCountry: "GB",
      },
    },
    offers: IRAQ_PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.latin,
      price: p.price,
      priceCurrency: "GBP",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "ar",
    mainEntity: FAQ_AR.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="arabic-page nonresident-page overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main lang="ar" dir="rtl">
        {/* ── HERO ── */}
        <section className="section-dark relative border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-28 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:pb-20 lg:pt-36">
            <div className="min-w-0">
              <nav aria-label="مسار التنقل" className="text-xs text-muted-foreground">
                <Link href="/" className="hover:text-gold-soft">الرئيسية</Link> / <Link href="/countries" className="hover:text-gold-soft">الدول</Link> / <span>العراق</span>
              </nav>
              <p className="eyebrow mt-6">تأسيس شركة في بريطانيا من العراق</p>
              <h1 className="mt-5 font-display text-[1.9rem] leading-[1.45] sm:text-5xl sm:leading-[1.35]">
                تأسيس شركة بريطانية من العراق — تسجيل شركة <bdi dir="ltr">LTD</bdi> عن بُعد
              </h1>
              <div className="mt-6 h-px w-20 rule-gold" />
              <p className="mt-6 max-w-xl text-[1.05rem] leading-loose text-muted-foreground">
                امنح مشروعك حضوراً دولياً موثوقاً بشركة مسجَّلة في المملكة المتحدة، تُؤسَّس بالكامل من بغداد أو أربيل أو البصرة أو أي مدينة عراقية. يرافقك فريقنا في لندن من اختيار الاسم حتى استلام وثائق التأسيس، بأسعار ثابتة واضحة تشمل الرسوم الحكومية.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#packages" className="btn-gold">اختر باقة التأسيس</a>
                <a href={WHATSAPP_FORMATION} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <MessageCircle aria-hidden="true" className="ms-0 me-2 h-4 w-4" />استشر فريقنا
                </a>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                الباقات من <Price v={299} /> شاملةً رسوم Companies House. يخضع التأسيس لاستكمال المستندات والتحقق من الهوية واعتماد Companies House.
              </p>
            </div>
            <picture>
              <source srcSet="/assets/iraq-hero-640.webp 640w, /assets/iraq-hero-1280.webp 1280w, /assets/iraq-hero-1920.webp 1920w" sizes="(min-width: 1024px) 55vw, 100vw" type="image/webp" />
              <img
                src="/assets/iraq-hero-1280.webp"
                width={1280}
                height={725}
                loading="eager"
                alt="صورة فنية تجمع ضفة نهر دجلة ببيوتها البغدادية التراثية وشناشيلها مع قصر وستمنستر وبرج إليزابيث على نهر التايمز عند الغروب"
                className="aspect-[4/3] w-full border border-border object-cover object-[50%_50%] lg:aspect-[5/4] rounded-lg shadow-2xl"
              />
            </picture>
          </div>
        </section>

        {/* ── SHORT ANSWER ── */}
        <section className="px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">إجابة مختصرة</p>
              <h2 className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl">هل يحق للمقيم في العراق امتلاك شركة بريطانية؟</h2>
            </div>
            <div className="space-y-4 leading-loose text-muted-foreground">
              <p>نعم. يتيح القانون البريطاني لغير المقيمين تأسيس شركة خاصة محدودة بالأسهم (<bdi dir="ltr">Private Limited Company</bdi>) وامتلاكها بنسبة كاملة، دون اشتراط جنسية بريطانية أو إقامة في المملكة المتحدة.</p>
              <p>كل ما تحتاجه عنوان مكتب مسجَّل داخل بريطانيا، ومدير واحد على الأقل، واستكمال التحقق من الهوية لدى Companies House. ولا يلزم عادةً السفر أو تعيين مدير بريطاني لإتمام التأسيس الإلكتروني.</p>
              <p className="text-sm">للتعمّق أكثر، اقرأ <Link href={BLOG.iraq} className={linkCls}>دليل تأسيس شركة بريطانية من العراق</Link> و<Link href={BLOG.cost} className={linkCls}>تكلفة تأسيس شركة في بريطانيا من العراق</Link>.</p>
            </div>
          </div>
        </section>

        {/* ── WHY UK COMPANY ── */}
        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">لماذا شركة بريطانية؟</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">منصة موثوقة لأعمالك الدولية</h2>
            <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["البرمجيات والخدمات الرقمية", "قدّم منتجك لعملاء دوليين بهوية قانونية بريطانية يعرفها السوق ويثق بها."],
                ["الاستشارات والخدمات المهنية", "تعاقد مع شركات في أوروبا والخليج بعقود وفواتير صادرة عن شركة بريطانية."],
                ["التجارة الإلكترونية", "ابنِ علامتك التجارية على منصات البيع الدولية بكيان قانوني راسخ."],
                ["شركة بريطانية للعراقيين", "إطار قانوني واضح وسجل عام شفاف يعزّز ثقة الشركاء والعملاء بمشروعك."],
              ].map(([t, d]) => (
                <article key={t} className="bg-background p-6 sm:p-7">
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="mt-3 text-sm leading-loose text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── REQUIRED DOCUMENTS ── */}
        <section id="documents" className="scroll-mt-24 border-t border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">المستندات المطلوبة من المقيمين في العراق</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">جهّز مستنداتك قبل الدفع بثقة</h2>
            <p className="mt-4 max-w-3xl leading-loose text-muted-foreground">نعلم أن بعض المستندات في العراق تختلف في شكلها عن المتعارف عليه دولياً، لذلك نوضّح المطلوب بدقة لنوفّر عليك الوقت.</p>
            <div className="mt-8 grid gap-px bg-border md:grid-cols-2">
              <article className="bg-background p-6 sm:p-7">
                <p className="text-xs text-gold-soft">إثبات الهوية</p>
                <h3 className="mt-2 font-display text-xl">جواز سفر ساري المفعول</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">لكل مدير ومساهم رئيسي وكل شخص ذي سيطرة جوهرية.</p>
              </article>
              <article className="bg-background p-6 sm:p-7">
                <p className="text-xs text-gold-soft">إثبات عنوان السكن</p>
                <h3 className="mt-2 font-display text-xl">مستند حديث لا يتجاوز تاريخه ثلاثة أشهر</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">يجب أن يظهر فيه <strong className="text-foreground">اسمك الكامل وعنوان سكنك الفعلي مطبوعَين بوضوح</strong>، مثل فاتورة خدمات مقبولة أو كشف حساب مصرفي.</p>
              </article>
            </div>
            <div className="mt-6 border border-gold p-6 sm:p-8 rounded-lg bg-card/30">
              <h3 className="font-display text-xl">إذا كانت فاتورتك أو كشف حسابك لا يتضمّن العنوان</h3>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">هذا أمر شائع في العراق، ولا داعي للقلق. لكن المستند الخالي من العنوان قد لا يكفي لإثبات عنوان السكن. في هذه الحالة يمكن النظر في <strong className="text-foreground">شهادة سكن رسمية صادرة أو مصدّقة أصولاً</strong> تتضمّن اسمك وعنوانك، على أن يخضع قبولها لموافقة جهة الامتثال والتحقق من المستند، فهي لا تُقبل تلقائياً في كل الحالات.</p>
              <p className="mt-3 text-sm leading-loose text-muted-foreground">ننصحك بالتواصل معنا <strong className="text-foreground">قبل الدفع</strong> لنقيّم مستنداتك معك. يُرجى تقديم المستندات الأصلية كما صدرت تماماً، دون أي تعديل أو إضافة.</p>
              <a href={WHATSAPP_DOCS} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">
                <MessageCircle aria-hidden="true" className="me-2 h-4 w-4" />استشرنا بشأن مستنداتك قبل الدفع
              </a>
            </div>
            <div className="mt-6 grid gap-px bg-border md:grid-cols-2">
              <article className="bg-background p-6 sm:p-7">
                <h3 className="font-display text-lg">إثبات العنوان ومصدر الأموال أمران مختلفان</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">قد نطلب كشف حساب مصرفي بشكل منفصل لمراجعة مصدر الأموال، وهو غير مطلوب دائماً، ولا يكفي وحده لإثبات مصدر الأموال. وقد تُطلب أدلة إضافية بحسب المراجعة الفردية للمخاطر والامتثال.</p>
              </article>
              <article className="bg-background p-6 sm:p-7">
                <h3 className="font-display text-lg">تفاصيل الشركة والملكية</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">اسم الشركة المقترح، ووصف موجز للنشاط، وأسماء المساهمين ونسب الأسهم والأشخاص ذوي السيطرة الجوهرية.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section id="packages" className="section-dark scroll-mt-24 border-y border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">تكلفة تأسيس شركة في بريطانيا</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">باقتان واضحتان بسعر ثابت</h2>
            <p className="mt-4 max-w-2xl leading-loose text-muted-foreground">تشمل كلتا الباقتين رسوم Companies House الحكومية وخدمات العنوان البريطاني لمدة 12 شهراً.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {IRAQ_PACKAGES.map((p) => (
                <article key={p.latin} className={`flex flex-col border p-6 sm:p-8 rounded-xl ${p.featured ? "border-gold bg-card/40" : "border-border bg-card/20"}`}>
                  <p className="text-xs text-gold-soft">{p.tag}</p>
                  <h3 className="mt-3 font-display text-2xl">باقة {p.name} <span className="text-sm text-muted-foreground" dir="ltr">{p.latin}</span></h3>
                  <p className="mt-3 font-display text-4xl text-gold"><Price v={p.price} /></p>
                  <p className="text-xs text-muted-foreground">سعر الباقة شاملاً رسوم Companies House البالغة <Price v={100} /></p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${p.featured ? "btn-gold" : "btn-ghost"} mt-8`}>
                    اختر باقة {p.name}
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-xs leading-loose text-muted-foreground">
              بعد السنة الأولى، يمكن تجديد خدمات العنوان اختيارياً. تُقدَّم خدمات المحاسبة وضريبة الشركات وبيان التأكيد بشكل مستقل.
            </p>
          </div>
        </section>

        {/* ── AFTER PURCHASE STEPS ── */}
        <section id="after-purchase" className="scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">ماذا يحدث بعد الدفع؟</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">رحلتك من الدفع إلى استلام وثائق الشركة</h2>
            <p className="mt-4 max-w-3xl leading-loose text-muted-foreground">نوضّح لك كل خطوة مسبقاً، حتى تعرف تماماً ما المطلوب منك ومتى.</p>
            <ol className="mt-10 grid gap-px bg-border sm:grid-cols-2">
              {POST_PURCHASE_STEPS.map(([t, d], i) => (
                <li key={t} className="flex gap-4 bg-background p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold font-display text-gold rounded-md">
                    <bdi dir="ltr">{i + 1}</bdi>
                  </span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm leading-loose text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-3xl text-xs leading-loose text-muted-foreground">يُرسَل بريد الإعداد بعد مراجعة فريقنا لطلبك، وليس فور الدفع تلقائياً. ويبدأ احتساب مدة التأسيس المعتادة بعد اكتمال المستندات واعتماد إجراءات التحقق، مع خضوع القرار النهائي لمراجعة Companies House.</p>
          </div>
        </section>

        {/* ── ADDRESS & IDV ── */}
        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
            <article className="bg-background p-6 sm:p-8">
              <p className="eyebrow">العنوان البريطاني</p>
              <h2 className="mt-4 font-display text-2xl">المكتب المسجَّل وعنوان سكنك في العراق</h2>
              <p className="mt-4 text-sm leading-loose text-muted-foreground">يُشترط أن يكون عنوان المكتب المسجَّل داخل المملكة المتحدة، وهو العنوان الرسمي الذي تتلقى عليه الشركة مراسلات Companies House وHMRC. أما عنوان سكنك في العراق فيُحفظ لدى Companies House دون نشره، ويظهر بدلاً منه عنوان خدمة المدير في السجل العام حفاظاً على خصوصيتك.</p>
            </article>
            <article className="bg-background p-6 sm:p-8">
              <p className="eyebrow">التحقق من الهوية</p>
              <h2 className="mt-4 font-display text-2xl">التحقق لدى Companies House</h2>
              <p className="mt-4 text-sm leading-loose text-muted-foreground">يستكمل المديرون والأشخاص ذوو السيطرة الجوهرية التحقق من هويتهم وفق متطلبات Companies House. وتشمل باقة إيليت مساعدتنا لمدير واحد خلال هذه الإجراءات. <Link href={BLOG.identity} className={linkCls}>اقرأ المزيد عن التحقق من الهوية للمقيمين في العراق</Link>.</p>
            </article>
          </div>
        </section>

        {/* ── BANKING ── */}
        <section id="banking" className="section-dark border-y border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">الخدمات المصرفية التجارية</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">الحساب التجاري لشركتك البريطانية</h2>
            <p className="mt-4 max-w-3xl leading-loose text-muted-foreground">
              تأسيس الشركة وفتح الحساب التجاري مساران مستقلان؛ إذ تقيّم كل مؤسسة مالية نشاط الشركة وملكيتها وفق معاييرها الخاصة. لذلك تتضمّن باقتا التأسيس إرشادات تساعدك على فهم الخيارات المناسبة لنشاطك. <Link href={BLOG.banking} className={linkCls}>دليل الحساب التجاري البريطاني للمقيمين في العراق</Link>.
            </p>

            <div className="mt-10 grid gap-8 border border-gold p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] rounded-xl bg-card/30">
              <div>
                <p className="text-xs text-gold-soft">خدمة مستقلة للشركات البريطانية القائمة</p>
                <h3 className="mt-3 font-display text-2xl leading-relaxed sm:text-3xl">هل تمتلك شركة بريطانية وتبحث عن حساب تجاري يناسب نشاطك؟</h3>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">
                  خدمة مخصّصة لأصحاب الشركات البريطانية المسجَّلة التي لا تمتلك حساباً تجارياً بعد، وتشمل المساعدة في طلب واحد لدى مؤسسة مالية مناسبة لنشاطك:
                </p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {["مراجعة ملف الشركة ونشاطها التجاري", "تجهيز معلومات الطلب ومستنداته", "المساعدة في تقديم الطلب", "متابعة الطلب حتى صدور القرار"].map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center border-t border-border pt-6 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0">
                <p className="font-display text-4xl text-gold"><Price v={BANKING_SERVICE.price} /></p>
                <p className="mt-1 text-sm text-muted-foreground">لطلب واحد لدى مؤسسة مالية واحدة</p>
                <a href={WHATSAPP_BANKING} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
                  <MessageCircle aria-hidden="true" className="me-2 h-4 w-4" />اطلب الخدمة عبر واتساب
                </a>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">تُقدَّم الخدمة وفقاً لمتطلبات المؤسسة المالية، ويخضع فتح الحساب لموافقتها النهائية. هذه الخدمة غير مدرجة في باقات التأسيس.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANNUAL OBLIGATIONS ── */}
        <section className="px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">ما بعد التأسيس</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">التزامات سنوية واضحة</h2>
            <p className="mt-4 leading-loose text-muted-foreground">
              تقدّم الشركة البريطانية سنوياً بيان التأكيد والحسابات السنوية إلى Companies House، وإقرار ضريبة الشركات إلى HMRC حيثما ينطبق، مع الاحتفاظ بسجلات محاسبية منتظمة. ويسعد فريقنا بتنسيق <Link href="/services/uk-accounting-non-residents" className={linkCls}>خدمات المحاسبة والامتثال</Link> لشركتك بشكل مستقل.
            </p>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">الأسئلة الشائعة</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl">أسئلة المؤسسين من العراق</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {FAQ_AR.map(([q, a]) => (
                <details key={q} className="group py-1">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-gold">
                    <span>{q}</span>
                    <span aria-hidden="true" className="text-gold transition-transform duration-200 group-open:rotate-45 text-xl font-mono">+</span>
                  </summary>
                  <p className="pb-5 text-sm leading-loose text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section id="final-cta" className="section-dark border-t border-border px-5 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-relaxed sm:text-4xl">ابدأ تأسيس شركتك البريطانية اليوم</h2>
            <p className="mt-5 leading-loose text-muted-foreground">
              Seven Oak Prestige Ltd — شركة مسجَّلة في إنجلترا وويلز برقم <bdi dir="ltr">16903092</bdi>، ومقرّها <bdi dir="ltr">124 City Road, London EC1V 2NX</bdi>.
              بإشراف إسحاق جاكسون (<bdi dir="ltr">Isaac Jackson</bdi>)، المؤسس والمدير التنفيذي.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#packages" className="btn-gold">اختر باقة التأسيس</a>
              <a href={WHATSAPP_FORMATION} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle aria-hidden="true" className="me-2 h-4 w-4" />استشر فريقنا
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global LTR Footer */}
      <div dir="ltr">
        <Footer />
      </div>

      {/* Sticky Mobile CTA */}
      <div dir="rtl" lang="ar">
        <StickyCta primaryHref="#packages" primaryLabel="اختر باقة التأسيس" secondaryLabel="استشر فريقنا" />
      </div>
    </div>
  );
}

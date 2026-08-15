import Link from "next/link";
import Image from "next/image";
import SpiceSpectrum from "@/components/SpiceSpectrum";
import CategoryCard from "@/components/CategoryCard";
import BrandStrip from "@/components/BrandStrip";
import Reveal from "@/components/Reveal";
import {
  hero,
  facts,
  categories,
  categoriesTitle,
  categoriesIntro,
  quality,
  certificates,
  salesPoints,
  salesPointsTitle,
  contact,
  company,
  catalogUrl,
  catalogLabel,
  categoryBySlug,
  millImage,
} from "@/lib/content";

export default function HomePage() {
  const baladi = categoryBySlug("baladi")!;

  return (
    <>
      {/* ——————————————————— الافتتاحية ——————————————————— */}
      <section className="grain relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 end-[-12%] h-[34rem] w-[34rem] rounded-full bg-molasses opacity-25 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 start-[-14%] h-[26rem] w-[26rem] rounded-full bg-zaatar opacity-20 blur-[110px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
          <p className="eyebrow animate-rise flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-[3px] w-7 bg-brand-deep" />
            {company.cityAr}
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>
              {company.sinceLabel} <span className="num">{company.since}</span>
            </span>
          </p>

          <h1
            className="animate-rise mt-7 text-[clamp(2.5rem,8.5vw,5.5rem)] font-bold tracking-tight"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block text-stone-50">{hero.title}</span>
            <span className="mt-1 block font-normal text-stone-400">
              {hero.titleAccent}
            </span>
          </h1>

          <div
            className="animate-rise mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "160ms" }}
          >
            <p className="max-w-xl text-[1.02rem] leading-[1.9] text-stone-200">
              {categoriesIntro}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={hero.ctaHref}
                className="btn btn-primary"
              >
                {hero.cta}
              </Link>
              <a
                href={catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {catalogLabel}
              </a>
            </div>
          </div>

          {/* العنصر المميز: الكتالوج مرسوماً كطيف */}
          <div className="mt-12 sm:mt-16">
            <div className="mb-3 flex items-baseline justify-between">
              <p className="eyebrow">سبعة أصناف — طيف المطبخ</p>
              <p className="text-[0.72rem] text-stone-600">
                اختر صنفاً للتفاصيل
              </p>
            </div>
            <SpiceSpectrum animate />
          </div>
        </div>
      </section>

      {/* ——————————————————— حقائق ——————————————————— */}
      <section
        aria-label="الشركة بالأرقام"
        className="border-y border-stone-400/12 bg-sumac-950"
      >
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-stone-400/12 sm:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal as="li" key={f.label} delay={i * 70} className="bg-sumac-950">
              <div className="px-5 py-8 sm:px-6 sm:py-10">
                <p className="num font-display text-[2.1rem] leading-none font-bold text-brand-lite sm:text-[2.6rem]">
                  {f.value}
                </p>
                <p className="mt-3 text-[0.88rem] font-medium text-stone-50">
                  {f.label}
                </p>
                <p className="mt-1 text-[0.75rem] leading-relaxed text-stone-400">
                  {f.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ——————————————————— الأصناف ——————————————————— */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">المنتجات</p>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-tight text-stone-50">
            {categoriesTitle}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-[1.9] text-stone-200">
            {categoriesIntro}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 70}>
              <CategoryCard category={c} priority={i < 3} />
            </Reveal>
          ))}
          <Reveal as="li" delay={140}>
            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[13.5rem] flex-col justify-between rounded-sm border border-dashed border-stone-400/25 p-6 transition-colors hover:border-brand-lite/60"
            >
              <span className="eyebrow">الكتالوج الكامل</span>
              <span>
                <span className="block font-display text-[1.35rem] font-semibold text-stone-50">
                  {catalogLabel}
                </span>
                <span className="mt-1.5 flex items-center gap-2 text-[0.85rem] text-stone-400 transition-colors group-hover:text-brand-lite">
                  تصفّح كل الأصناف
                  <svg
                    viewBox="0 0 14 10"
                    className="h-2.5 w-3.5 -scale-x-100 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </Reveal>
        </ul>
      </section>

      {/* ——————————————————— الإرث ——————————————————— */}
      <section className="relative overflow-hidden border-y border-stone-400/12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{ backgroundColor: baladi.hue }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-4 flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-[3px] w-7"
                style={{ backgroundColor: baladi.hue }}
              />
              {baladi.name}
            </p>
            <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold tracking-tight text-stone-50">
              {baladi.tagline}
            </h2>
          </Reveal>

          <Reveal delay={90} className="md:col-span-8">
            <p className="font-naskh text-[clamp(1.25rem,2.6vw,1.7rem)] leading-[1.85] text-stone-50">
              {baladi.body}
            </p>
            <Link
              href={`/products/${baladi.slug}`}
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-stone-400/40 pb-1 text-sm text-stone-200 transition-colors hover:border-stone-50 hover:text-stone-50"
            >
              {baladi.title}
              <svg
                viewBox="0 0 14 10"
                className="h-2.5 w-3.5 -scale-x-100"
                aria-hidden="true"
              >
                <path
                  d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* صورة المطحنة — الفعل الذي بُنيت عليه الشركة */}
        <Reveal className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
          <figure className="overflow-hidden rounded-sm border border-stone-400/12">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={millImage.src}
                alt={millImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>
      </section>

      {/* ——————————————————— العلامات التجارية ——————————————————— */}
      <BrandStrip />

      {/* ——————————————————— الجودة ——————————————————— */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">{quality.title}</p>
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-bold tracking-tight">
              <span className="text-stone-400">{quality.lead}</span>{" "}
              <span className="text-stone-50">{quality.body}</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about-us/quality"
                className="btn btn-ghost"
              >
                {quality.more}
              </Link>
              <Link
                href="/about-us/certificates"
                className="btn btn-ghost"
              >
                {certificates.title}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5">
            <div className="rounded-sm border border-brand/30 bg-brand/[0.07] p-7">
              <p className="eyebrow">{certificates.standardLabel}</p>
              <p className="num mt-3 font-display text-[1.9rem] leading-none font-bold text-brand-lite">
                {certificates.standard}
              </p>
              <p className="mt-5 text-[0.9rem] leading-[1.85] text-stone-200">
                {certificates.lead}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— نقاط البيع ——————————————————— */}
      <section className="border-y border-stone-400/12 bg-sumac-950">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">التوزيع</p>
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-tight text-stone-50">
              {salesPointsTitle}
            </h2>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {salesPoints.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/salespoints/${p.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-stone-400/12 px-4 py-4 transition-colors hover:border-stone-400/35 hover:bg-stone-50/[0.03]"
                >
                  <span className="font-display text-[0.98rem] text-stone-50">
                    {p.name}
                  </span>
                  <svg
                    viewBox="0 0 14 10"
                    className="h-2.5 w-3.5 -scale-x-100 text-stone-600 transition-all group-hover:-translate-x-1 group-hover:text-brand-lite"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ——————————————————— اتصل بنا ——————————————————— */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">{contact.title}</p>
            <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-tight text-stone-50">
              {contact.salesCtaLine1}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-[1.9] text-stone-200">
              {contact.headOffice}
            </p>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7">
            <dl className="grid gap-px bg-stone-400/12 sm:grid-cols-2">
              <div className="bg-sumac-900 p-6">
                <dt className="eyebrow">{contact.companyPhoneLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${contact.companyPhone}`}
                    className="num text-[1.05rem] text-stone-50 transition-colors hover:text-brand-lite"
                  >
                    {contact.companyPhoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="bg-sumac-900 p-6">
                <dt className="eyebrow">{contact.salesPhoneLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${contact.salesPhone}`}
                    className="num text-[1.05rem] text-stone-50 transition-colors hover:text-brand-lite"
                  >
                    {contact.salesPhoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="bg-sumac-900 p-6">
                <dt className="eyebrow">{contact.emailLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[0.95rem] break-all text-stone-50 transition-colors hover:text-brand-lite"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="bg-sumac-900 p-6">
                <dt className="eyebrow">{contact.hoursLabel}</dt>
                <dd className="mt-2 text-[0.85rem] leading-relaxed text-stone-200">
                  {contact.days}
                  <br />
                  {contact.hours}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}

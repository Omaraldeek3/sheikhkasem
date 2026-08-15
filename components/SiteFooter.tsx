import Link from "next/link";
import Image from "next/image";
import {
  categories,
  company,
  contact,
  catalogUrl,
  catalogLabel,
  salesPoints,
  logo,
} from "@/lib/content";

const infoLinks = [
  { label: "من نحن", href: "/about-us" },
  { label: "ضمان الجودة", href: "/about-us/quality" },
  { label: "الشهادات", href: "/about-us/certificates" },
  { label: "نقاط البيع", href: "/salespoints" },
  { label: "اتصل بنا", href: "/contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-400/12 bg-sumac-950">
      {/* شريط المبيعات */}
      <div className="border-b border-stone-400/12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl leading-snug text-stone-50 sm:text-3xl">
            {contact.salesCtaLine1}{" "}
            <span className="text-brand-lite">{contact.salesCtaLine2}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {contact.salesCtaButton}
            </a>
            <a
              href={`tel:${contact.salesPhone}`}
              className="num btn btn-ghost"
            >
              {contact.salesPhoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-12">
        {/* الشركة */}
        <div className="sm:col-span-2 lg:col-span-4">
          <span className="logo-chip mb-5 inline-flex items-center px-3 py-2.5">
            <Image
              src={logo.lockup}
              alt={logo.alt}
              width={900}
              height={176}
              className="h-7 w-auto"
            />
          </span>
          <p className="font-display text-base leading-relaxed text-stone-50">
            {company.nameAr}
          </p>
          <p className="mt-2 text-[0.78rem] leading-relaxed text-stone-400">
            {company.descEn}
          </p>
          <p className="eyebrow mt-5">
            {company.sinceLabel} <span className="num text-brand-lite">{company.since}</span>
          </p>
        </div>

        {/* الأصناف */}
        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-4">الأصناف</h2>
          <ul className="space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group inline-flex min-h-6 items-center gap-2 py-1 text-[0.85rem] text-stone-200 transition-colors hover:text-stone-50"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
                    style={{ backgroundColor: c.hue }}
                  />
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* الشركة والروابط */}
        <div className="lg:col-span-2">
          <h2 className="eyebrow mb-4">الشركة</h2>
          <ul className="space-y-2.5">
            {infoLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block min-h-6 py-1 text-[0.85rem] text-stone-200 transition-colors hover:text-stone-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-h-6 py-1 text-[0.85rem] text-stone-200 transition-colors hover:text-stone-50"
              >
                {catalogLabel}
              </a>
            </li>
          </ul>
        </div>

        {/* التواصل */}
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-4">{contact.title}</h2>
          <address className="space-y-3 not-italic">
            <p className="text-[0.85rem] leading-relaxed text-stone-200">
              {contact.addressShort}
            </p>
            <p>
              <a
                href={`tel:${contact.companyPhone}`}
                className="num inline-block min-h-6 py-1 text-[0.85rem] text-stone-200 transition-colors hover:text-stone-50"
              >
                {contact.companyPhoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block min-h-6 py-1.5 text-[0.85rem] text-stone-200 transition-colors hover:text-brand-lite"
              >
                {contact.email}
              </a>
            </p>
          </address>

          <h2 className="eyebrow mt-6 mb-3">{contact.hoursLabel}</h2>
          <p className="text-[0.8rem] leading-relaxed text-stone-400">
            {contact.days}
            <br />
            {contact.hours}
          </p>
        </div>
      </div>

      {/* نقاط البيع */}
      <div className="border-t border-stone-400/12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1 gap-y-2 px-5 py-6 sm:px-8">
          <span className="eyebrow me-2">نقاط البيع</span>
          {salesPoints.map((p, i) => (
            <span key={p.slug} className="flex items-center">
              {i > 0 && <span className="mx-1.5 text-stone-600">·</span>}
              <Link
                href={`/salespoints/${p.slug}`}
                className="inline-block min-h-6 min-w-6 px-1.5 py-1.5 text-center text-[0.8rem] text-stone-400 transition-colors hover:text-stone-50"
              >
                {p.name}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-400/12">
        <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-5 text-[0.72rem] text-stone-600 sm:flex-row sm:justify-between sm:px-8">
          <p>
            {company.rightsAr} <span className="num">{year}</span>
          </p>
          <p>{company.rightsEn}</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  company,
  quality,
  certificates,
  general,
  policy,
  categoryBySlug,
  facts,
} from "@/lib/content";

export const metadata: Metadata = { title: "من نحن" };

const sections = [
  { title: general.title, href: "/about-us/general", note: "المسيرة والنشاط" },
  { title: policy.title, href: "/about-us/policy", note: "المبادئ والالتزام" },
  { title: quality.title, href: "/about-us/quality", note: "معايير السلامة الغذائية" },
  { title: certificates.title, href: "/about-us/certificates", note: certificates.standard },
];

export default function AboutPage() {
  const baladi = categoryBySlug("baladi")!;

  return (
    <>
      <PageHeader
        eyebrow={`${company.cityAr} · ${company.since}`}
        title="من نحن"
        lead={company.nameAr}
        hue={baladi.hue}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
        ]}
      />

      {/* الإرث */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-4">المسيرة</p>
            <p className="num font-display text-[clamp(3.5rem,10vw,6rem)] leading-none font-bold text-brand-lite">
              {company.since}
            </p>
            <p className="mt-3 text-[0.9rem] text-stone-400">{company.sinceLabel}</p>
          </Reveal>

          <Reveal delay={90} className="md:col-span-8">
            <p className="font-naskh text-[clamp(1.25rem,2.6vw,1.65rem)] leading-[1.9] text-stone-50">
              {baladi.body}
            </p>
            <p className="mt-6 text-[0.95rem] leading-[1.9] text-stone-200">
              {quality.lead} {quality.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* أرقام */}
      <section
        aria-label="الشركة بالأرقام"
        className="border-y border-stone-400/12 bg-sumac-950"
      >
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-stone-400/12 sm:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal as="li" key={f.label} delay={i * 60} className="bg-sumac-950">
              <div className="px-5 py-8 sm:px-6">
                <p className="num font-display text-[1.9rem] leading-none font-bold text-brand-lite">
                  {f.value}
                </p>
                <p className="mt-2.5 text-[0.85rem] text-stone-50">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* الأقسام */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="eyebrow mb-6">الأقسام</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal as="li" key={s.href} delay={(i % 2) * 70}>
              <Link
                href={s.href}
                className="group flex items-center justify-between rounded-sm border border-stone-400/12 p-6 transition-colors hover:border-stone-400/35 hover:bg-stone-50/[0.03]"
              >
                <span>
                  <span className="block font-display text-[1.15rem] font-semibold text-stone-50">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[0.8rem] text-stone-400">
                    {s.note}
                  </span>
                </span>
                <svg
                  viewBox="0 0 14 10"
                  className="h-2.5 w-3.5 shrink-0 -scale-x-100 text-stone-600 transition-all group-hover:-translate-x-1 group-hover:text-brand-lite"
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
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { quality, certificates, company } from "@/lib/content";

export const metadata: Metadata = { title: quality.title };

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={quality.title}
        hue="#E0A32A"
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
          { label: quality.title, href: "/about-us/quality" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[clamp(1.3rem,3vw,1.9rem)] leading-[1.75] font-display font-semibold">
              <span className="text-stone-400">{quality.lead}</span>{" "}
              <span className="text-stone-50">{quality.body}</span>
            </p>
            <p className="mt-8 text-[0.98rem] leading-[1.9] text-stone-200">
              {certificates.lead}. {certificates.body}
            </p>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5">
            <div className="rounded-sm border border-brand/30 bg-brand/[0.07] p-7">
              <p className="eyebrow">{certificates.standardLabel}</p>
              <p className="num mt-3 font-display text-[1.9rem] leading-none font-bold text-brand-lite">
                {certificates.standard}
              </p>
              <Link
                href="/about-us/certificates"
                className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-brand-lite/40 pb-1 text-sm text-brand-lite transition-colors hover:border-brand-lite"
              >
                {certificates.title}
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
            </div>

            <p className="mt-6 text-[0.8rem] leading-relaxed text-stone-400">
              {company.nameAr}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

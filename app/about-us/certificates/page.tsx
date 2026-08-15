import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { certificates, quality } from "@/lib/content";

export const metadata: Metadata = { title: certificates.title };

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={certificates.title}
        lead={certificates.lead}
        hue="#E0A32A"
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
          { label: certificates.title, href: "/about-us/certificates" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <article className="overflow-hidden rounded-sm border border-brand/30">
            <div className="grain relative bg-brand/[0.09] px-7 py-10 sm:px-10 sm:py-12">
              <p className="eyebrow">{certificates.standardLabel}</p>
              <p className="num mt-4 font-display text-[clamp(2.2rem,7vw,3.6rem)] leading-none font-bold text-brand-lite">
                {certificates.standard}
              </p>
            </div>
            <div className="border-t border-brand/25 px-7 py-8 sm:px-10">
              <p className="text-[1rem] leading-[1.95] text-stone-50">
                {certificates.body}
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <Link
            href="/about-us/quality"
            className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-stone-400/40 pb-1 text-sm text-stone-200 transition-colors hover:border-stone-50 hover:text-stone-50"
          >
            {quality.title}
            <svg viewBox="0 0 14 10" className="h-2.5 w-3.5 -scale-x-100" aria-hidden="true">
              <path
                d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { salesPoints, salesPointsTitle, contact } from "@/lib/content";

export const metadata: Metadata = { title: salesPointsTitle };

export default function SalesPointsPage() {
  return (
    <>
      <PageHeader
        eyebrow="التوزيع"
        title={salesPointsTitle}
        lead="منتجات الشيخ قاسم متوفرة في نقاط بيع موزعة على المدن التالية."
        hue="#7E8B4A"
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: salesPointsTitle, href: "/salespoints" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {salesPoints.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 60}>
              <Link
                href={`/salespoints/${p.slug}`}
                className="group flex items-center justify-between rounded-sm border border-stone-400/12 px-6 py-5 transition-colors hover:border-stone-400/35 hover:bg-stone-50/[0.03]"
              >
                <span className="font-display text-[1.1rem] text-stone-50">
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

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 rounded-sm border border-stone-400/12 p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.95rem] leading-relaxed text-stone-200">
              للاستفسار عن أقرب نقطة بيع أو عن التوزيع، تواصل مع فريق المبيعات.
            </p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 btn btn-primary"
            >
              {contact.salesCtaButton}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

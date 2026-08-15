import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CategoryCard from "@/components/CategoryCard";
import SpiceSpectrum from "@/components/SpiceSpectrum";
import Reveal from "@/components/Reveal";
import {
  categories,
  categoriesTitle,
  categoriesIntro,
  catalogUrl,
  catalogLabel,
} from "@/lib/content";

export const metadata: Metadata = { title: categoriesTitle };

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="المنتجات"
        title={categoriesTitle}
        lead={categoriesIntro}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: categoriesTitle, href: "/products" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <SpiceSpectrum />
        </Reveal>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 70}>
              <CategoryCard category={c} priority={i < 3} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80}>
          <a
            href={catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 flex flex-col gap-4 rounded-sm border border-dashed border-stone-400/25 p-7 transition-colors hover:border-brand-lite/60 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="eyebrow block">الكتالوج الكامل</span>
              <span className="mt-2 block font-display text-[1.4rem] font-semibold text-stone-50">
                {catalogLabel}
              </span>
            </span>
            <span className="flex items-center gap-2 text-sm text-stone-400 transition-colors group-hover:text-brand-lite">
              تصفّح كل الأصناف والعبوات
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
          </a>
        </Reveal>
      </section>
    </>
  );
}

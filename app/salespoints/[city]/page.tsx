import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContentPending from "@/components/ContentPending";
import Reveal from "@/components/Reveal";
import { salesPoints, salesPointsTitle } from "@/lib/content";

export function generateStaticParams() {
  return salesPoints.map((p) => ({ city: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const point = salesPoints.find((p) => p.slug === city);
  return { title: point ? `${salesPointsTitle} — ${point.name}` : salesPointsTitle };
}

export default async function SalesPointCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const point = salesPoints.find((p) => p.slug === city);
  if (!point) notFound();

  const others = salesPoints.filter((p) => p.slug !== point.slug);

  return (
    <>
      <PageHeader
        eyebrow={salesPointsTitle}
        title={point.name}
        hue="#7E8B4A"
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: salesPointsTitle, href: "/salespoints" },
          { label: point.name, href: `/salespoints/${point.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          {/* قائمة المتاجر لكل مدينة غير متوفرة في الموقع القديم */}
          <ContentPending what={`نقاط البيع في ${point.name}`} />
        </Reveal>
      </section>

      <section className="border-t border-stone-400/12">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <h2 className="eyebrow mb-6">مدن أخرى</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/salespoints/${p.slug}`}
                  className="inline-block min-h-11 rounded-sm border border-stone-400/15 px-4 py-3 text-[0.85rem] text-stone-200 transition-colors hover:border-stone-400/40 hover:text-stone-50"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  categories,
  categoryBySlug,
  categoriesTitle,
  catalogUrl,
  catalogLabel,
  contact,
} from "@/lib/content";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return { title: categoriesTitle };
  return { title: category.title, description: category.body };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const others = categories.filter((c) => c.slug !== category.slug);
  const catalogHref = category.catalogPage
    ? `${catalogUrl}#p=${category.catalogPage}`
    : catalogUrl;

  return (
    <>
      <PageHeader
        eyebrow={category.hueName}
        title={category.title}
        hue={category.hue}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: categoriesTitle, href: "/products" },
          { label: category.name, href: `/products/${category.slug}` },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[clamp(1.1rem,2.3vw,1.4rem)] leading-[1.95] text-stone-50">
              {category.body}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={catalogHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: category.hue,
                  color: category.ink === "dark" ? "#1B0C0E" : "#EFE7D8",
                }}
              >
                {catalogLabel}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                اسأل فريق المبيعات
              </a>
            </div>
          </Reveal>

          {/* صورة المنتج + بطاقة الصنف */}
          <Reveal delay={90} className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm border border-stone-400/12">
              {(category.image ?? category.brandLogo) && (
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src={(category.image ?? category.brandLogo)!}
                    alt={category.imageAlt ?? category.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    priority
                    className={
                      category.image ? "object-cover" : "object-contain p-10"
                    }
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ backgroundColor: category.hue }}
                  />
                </div>
              )}
              <dl className="divide-y divide-stone-400/12">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="eyebrow">الصنف</dt>
                  <dd className="text-[0.88rem] text-stone-50">{category.name}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="eyebrow">الوصف</dt>
                  <dd className="text-[0.88rem] text-stone-50">{category.tagline}</dd>
                </div>
                {category.catalogPage && (
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <dt className="eyebrow">في الكتالوج</dt>
                    <dd className="text-[0.88rem] text-stone-50">
                      صفحة <span className="num">{category.catalogPage}</span>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* أصناف داخل هذا القسم — مقروءة من العبوات */}
        {category.products && category.products.length > 0 && (
          <Reveal className="mt-14">
            <h2 className="eyebrow mb-5">من هذا الصنف</h2>
            <ul className="flex flex-wrap gap-2">
              {category.products.map((p) => (
                <li
                  key={p}
                  className="rounded-sm border border-stone-400/15 px-4 py-2.5 text-[0.88rem] text-stone-200"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.78rem] text-stone-600">
              القائمة الكاملة في {catalogLabel}.
            </p>
          </Reveal>
        )}
      </section>

      {/* تصنيفات أخرى */}
      <section className="border-t border-stone-400/12">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <h2 className="eyebrow mb-6">تصنيفات أخرى</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-stone-400/12 px-5 py-4 transition-colors hover:border-stone-400/35 hover:bg-stone-50/[0.03]"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="h-6 w-[3px] shrink-0 transition-all duration-300 group-hover:h-8"
                      style={{ backgroundColor: c.hue }}
                    />
                    <span className="font-display text-[0.98rem] text-stone-50">
                      {c.name}
                    </span>
                  </span>
                  <svg
                    viewBox="0 0 14 10"
                    className="h-2.5 w-3.5 -scale-x-100 text-stone-600 transition-all group-hover:-translate-x-1 group-hover:text-stone-200"
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
    </>
  );
}

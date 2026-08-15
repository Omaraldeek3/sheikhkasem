import Link from "next/link";

/** رأس الصفحات الداخلية. اللون الاختياري يأتي من طيف الأصناف. */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  hue = "#E0A32A",
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  hue?: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <header className="grain relative overflow-hidden border-b border-stone-400/12">
      {/* هالة لون الصنف */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 end-[-10%] h-[26rem] w-[26rem] rounded-full opacity-[0.16] blur-[90px]"
        style={{ backgroundColor: hue }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="مسار التنقل" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.75rem] text-stone-400">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true" className="text-stone-600">/</span>}
                  <Link
                    href={c.href}
                    className="inline-block min-h-6 py-1 transition-colors hover:text-stone-50"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-block h-[3px] w-7"
              style={{ backgroundColor: hue }}
            />
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-3xl text-[clamp(2rem,5.5vw,3.5rem)] font-bold tracking-tight text-stone-50">
          {title}
        </h1>

        {lead && (
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.9] text-stone-200">
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}

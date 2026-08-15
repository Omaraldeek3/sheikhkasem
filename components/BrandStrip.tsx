import Image from "next/image";
import { brands, brandsTitle } from "@/lib/content";
import Reveal from "@/components/Reveal";

/**
 * العلامات التجارية. الشعارات ملوّنة ومصمّمة للأبيض، فتُعرض على رقع بيضاء.
 */
export default function BrandStrip() {
  return (
    <section className="border-y border-stone-400/12 bg-sumac-950">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">العلامات</p>
          <h2 className="text-[clamp(1.6rem,4.5vw,2.75rem)] font-bold tracking-tight text-stone-50">
            {brandsTitle}
          </h2>
        </Reveal>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => (
            <Reveal as="li" key={b.slug} delay={(i % 4) * 60}>
              <div className="logo-chip flex h-full flex-col items-center gap-3 p-5">
                <span className="relative flex h-20 w-full items-center justify-center sm:h-24">
                  <Image
                    src={b.logo}
                    alt={`شعار ${b.name}`}
                    fill
                    sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 22vw"
                    className="object-contain"
                  />
                </span>
                <span className="text-center">
                  <span className="block font-display text-[0.92rem] font-semibold text-sumac-950">
                    {b.name}
                  </span>
                  <span className="mt-0.5 block text-[0.65rem] tracking-[0.06em] text-sumac-900/55">
                    {b.nameEn}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

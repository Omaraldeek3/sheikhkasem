import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/content";

/**
 * بطاقة صنف: صورة المنتج فوق، والاسم على لوح مصبوغ بلون الصنف.
 * الصور مصوّرة على خلفية بيضاء، فتُعرض على لوح أبيض يحفظ نظافتها،
 * ويبقى اللون هوية الصنف في الشريط والنص.
 */
export default function CategoryCard({
  category,
  priority = false,
}: {
  category: Category;
  priority?: boolean;
}) {
  const { slug, name, tagline, hue, hueName, image, brandLogo, imageAlt, products } =
    category;
  const src = image ?? brandLogo;

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-stone-400/12 transition-colors duration-500 hover:border-stone-400/30"
    >
      {/* الصورة على لوح أبيض */}
      <span className="relative block aspect-[4/3] overflow-hidden bg-white">
        {src ? (
          <Image
            src={src}
            alt={imageAlt ?? name}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            priority={priority}
            className={
              brandLogo && !image
                ? "object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
                : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            }
          />
        ) : null}
        {/* شريط اللون على حدّ الصورة السفلي */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1"
          style={{ backgroundColor: hue }}
        />
      </span>

      {/* اللوح النصي مصبوغ بلون الصنف */}
      <span
        className="flex flex-1 flex-col justify-between gap-3 p-5"
        style={{ backgroundColor: `color-mix(in oklab, ${hue} 16%, #2A1214)` }}
      >
        <span>
          <span className="block font-display text-[1.2rem] leading-tight font-semibold text-stone-50">
            {name}
          </span>
          <span className="mt-1 block text-[0.82rem] text-stone-400">{tagline}</span>
        </span>

        <span className="flex items-end justify-between gap-3">
          <span className="text-[0.68rem] tracking-[0.08em] text-stone-400">
            {hueName}
          </span>
          {products && products.length > 0 && (
            <span className="text-[0.68rem] text-stone-400">
              <span className="num">{products.length}</span> منتجات
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}

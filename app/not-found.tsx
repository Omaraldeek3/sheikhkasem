import Link from "next/link";
import { categories } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[62vh] max-w-3xl flex-col justify-center px-5 py-20 sm:px-8">
      <span className="mb-8 flex h-2.5 w-40 overflow-hidden rounded-sm" aria-hidden="true">
        {categories.map((c) => (
          <span key={c.slug} className="flex-1" style={{ backgroundColor: c.hue }} />
        ))}
      </span>
      <p className="eyebrow mb-4">
        <span className="num">404</span>
      </p>
      <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-bold tracking-tight text-stone-50">
        الصفحة غير موجودة
      </h1>
      <p className="mt-5 text-[1rem] leading-[1.9] text-stone-200">
        الرابط الذي وصلت منه لم يعد يشير إلى صفحة. ابدأ من الرئيسية أو تصفّح الأصناف.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="btn btn-primary"
        >
          الرئيسية
        </Link>
        <Link
          href="/products"
          className="btn btn-ghost"
        >
          أصناف المنتجات
        </Link>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/content";

/**
 * طيف الأصناف — العنصر المميز للموقع.
 * كتالوج الشركة سبعة أصناف، ولكل صنف لون مأخوذ من لون المادة نفسها.
 * الشريط هو الكتالوج مرسوماً كطيف، ويعمل كتنقل في الوقت ذاته.
 * الألوان مشبعة دائماً — الطيف يجب أن يُقرأ فوراً، لا عند التحويم.
 */
export default function SpiceSpectrum({
  active,
  animate = false,
}: {
  active?: string;
  animate?: boolean;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const current = hovered ?? active ?? null;

  return (
    <div className={animate ? "animate-band" : undefined}>
      {/* الطيف الكامل — من lg وما فوق، حيث يتّسع كل قسم لاسمه */}
      <ul className="hidden lg:flex h-[11rem] w-full overflow-hidden rounded-sm">
        {categories.map((c) => {
          const isOn = current === c.slug;
          const ink = c.ink === "dark" ? "#1B0C0E" : "#EFE7D8";
          return (
            <li
              key={c.slug}
              className="relative flex-1 transition-[flex-grow] duration-500 ease-out"
              style={{ flexGrow: isOn ? 1.7 : 1 }}
            >
              <Link
                href={`/products/${c.slug}`}
                onMouseEnter={() => setHovered(c.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.slug)}
                onBlur={() => setHovered(null)}
                className="grain flex h-full flex-col justify-end gap-1 p-4 transition-[filter] duration-500"
                style={{
                  backgroundColor: c.hue,
                  color: ink,
                  filter:
                    current !== null && !isOn
                      ? "saturate(0.72) brightness(0.82)"
                      : "none",
                }}
              >
                <span className="relative block font-display text-[0.92rem] leading-tight font-semibold">
                  {c.name}
                </span>
                <span
                  className="relative block text-[0.7rem] transition-opacity duration-500"
                  style={{ opacity: isOn ? 0.85 : 0.62 }}
                >
                  {c.hueName}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* الجوال والتابلت: الطيف عمودياً، اللون يبقى مشبعاً */}
      <ul className="flex flex-col gap-px lg:hidden overflow-hidden rounded-sm">
        {categories.map((c) => {
          const ink = c.ink === "dark" ? "#1B0C0E" : "#EFE7D8";
          return (
            <li key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="grain flex items-center justify-between px-4 py-3.5"
                style={{ backgroundColor: c.hue, color: ink }}
              >
                <span className="relative font-display text-[0.95rem] font-semibold">
                  {c.name}
                </span>
                <span className="relative text-[0.72rem] opacity-70">
                  {c.hueName}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

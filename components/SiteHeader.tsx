"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, company, logo } from "@/lib/content";

/**
 * الشعار الأصلي أحمر مصمّم للأبيض، فيُعرض على رقعة بيضاء كما يظهر على العبوة.
 */
function Wordmark() {
  return (
    <Link
      href="/"
      className="flex min-h-11 items-center gap-3"
      aria-label={`${company.nameAr} — الرئيسية`}
    >
      <span className="logo-chip flex items-center px-2.5 py-2 sm:px-3">
        <Image
          src={logo.lockup}
          alt={logo.alt}
          width={900}
          height={176}
          priority
          className="h-6 w-auto sm:h-7"
        />
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-stone-400/12 bg-sumac-950/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />

        {/* التنقل — الشاشات الكبيرة */}
        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 rounded-sm px-3.5 py-2 text-[0.875rem] font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand-lite"
                      : "text-stone-200 hover:text-stone-50"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      viewBox="0 0 10 6"
                      className="h-[5px] w-[9px] opacity-50 transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <ul className="invisible absolute end-0 top-full w-52 translate-y-1 rounded-sm border border-stone-400/15 bg-sumac-950/97 p-1.5 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block rounded-sm px-3 py-2 text-[0.82rem] transition-colors ${
                            pathname === child.href
                              ? "bg-brand/12 text-brand-lite"
                              : "text-stone-200 hover:bg-stone-50/5 hover:text-stone-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            تواصل مع المبيعات
          </Link>
        </div>

        {/* زر القائمة — الشاشات الصغيرة */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-stone-400/20 text-stone-50 lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 h-[1.5px] bg-current transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1/2 h-[1.5px] bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 h-[1.5px] bg-current transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </div>

      {/* القائمة المنسدلة — الشاشات الصغيرة */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-stone-400/12 bg-sumac-950 lg:hidden"
      >
        <nav aria-label="التنقل الرئيسي" className="px-5 py-4 sm:px-8">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block min-h-11 rounded-sm px-3 py-3 font-display text-base ${
                    isActive(item.href) ? "text-brand-lite" : "text-stone-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ms-3 border-s border-stone-400/15 ps-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block min-h-11 px-2 py-3 text-[0.85rem] ${
                            pathname === child.href
                              ? "text-brand-lite"
                              : "text-stone-400"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn btn-primary mt-4 w-full"
          >
            تواصل مع المبيعات
          </Link>
        </nav>
      </div>
    </header>
  );
}

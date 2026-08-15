import type { Metadata } from "next";
import { Reem_Kufi, IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company } from "@/lib/content";

const reem = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-reem",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.nameAr} - ${company.cityAr}`,
    template: `%s | ${company.shortAr}`,
  },
  description: company.descEn,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${reem.variable} ${plex.variable} ${amiri.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-sm focus:bg-brand-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          تخطَّ إلى المحتوى
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

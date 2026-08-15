import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentPending from "@/components/ContentPending";
import Reveal from "@/components/Reveal";
import { general, categoryBySlug } from "@/lib/content";

export const metadata: Metadata = { title: general.title };

export default function GeneralPage() {
  const hue = categoryBySlug("legume")!.hue;

  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={general.title}
        hue={hue}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
          { label: general.title, href: "/about-us/general" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          {general.body ? (
            <p className="text-[1.05rem] leading-[1.95] text-stone-50">
              {general.body}
            </p>
          ) : (
            <ContentPending what={general.title} />
          )}
        </Reveal>
      </section>
    </>
  );
}

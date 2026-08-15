import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentPending from "@/components/ContentPending";
import Reveal from "@/components/Reveal";
import { policy, categoryBySlug } from "@/lib/content";

export const metadata: Metadata = { title: policy.title };

export default function PolicyPage() {
  const hue = categoryBySlug("almonds-seeds")!.hue;

  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={policy.title}
        hue={hue}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
          { label: policy.title, href: "/about-us/policy" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          {policy.body ? (
            <p className="text-[1.05rem] leading-[1.95] text-stone-50">
              {policy.body}
            </p>
          ) : (
            <ContentPending what={policy.title} />
          )}
        </Reveal>
      </section>
    </>
  );
}

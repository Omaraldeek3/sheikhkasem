import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact, salesPoints, categoryBySlug } from "@/lib/content";

export const metadata: Metadata = { title: contact.title };

export default function ContactPage() {
  const hue = categoryBySlug("oil")!.hue;

  return (
    <>
      <PageHeader
        eyebrow="التواصل"
        title={contact.title}
        hue={hue}
        crumbs={[
          { label: "الرئيسية", href: "/" },
          { label: contact.title, href: "/contact" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* المعلومات */}
          <Reveal className="lg:col-span-5">
            <div className="space-y-9">
              <div>
                <h2 className="eyebrow mb-3">{contact.headOfficeLabel}</h2>
                <address className="text-[1rem] leading-[1.9] text-stone-50 not-italic">
                  {contact.headOffice}
                </address>
              </div>

              <div className="rule" />

              <div>
                <h2 className="eyebrow mb-3">{contact.channelsLabel}</h2>
                <dl className="space-y-3.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-[0.85rem] text-stone-400">
                      {contact.companyPhoneLabel}
                    </dt>
                    <dd>
                      <a
                        href={`tel:${contact.companyPhone}`}
                        className="num inline-block min-h-6 py-0.5 text-[0.98rem] text-stone-50 transition-colors hover:text-brand-lite"
                      >
                        {contact.companyPhoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-[0.85rem] text-stone-400">
                      {contact.salesPhoneLabel}
                    </dt>
                    <dd>
                      <a
                        href={`tel:${contact.salesPhone}`}
                        className="num inline-block min-h-6 py-0.5 text-[0.98rem] text-stone-50 transition-colors hover:text-brand-lite"
                      >
                        {contact.salesPhoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-[0.85rem] text-stone-400">
                      {contact.emailLabel}
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-block min-h-6 py-0.5 text-[0.95rem] break-words text-stone-50 transition-colors hover:text-brand-lite"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rule" />

              <div>
                <h2 className="eyebrow mb-3">{contact.hoursLabel}</h2>
                <p className="text-[0.95rem] leading-[1.9] text-stone-200">
                  {contact.days}
                  <br />
                  {contact.hours}
                </p>
              </div>

              <div className="rule" />

              <div>
                <h2 className="eyebrow mb-3">نقاط البيع</h2>
                <ul className="flex flex-wrap gap-2">
                  {salesPoints.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/salespoints/${p.slug}`}
                        className="inline-block min-h-9 rounded-sm border border-stone-400/15 px-3 py-2 text-[0.8rem] text-stone-200 transition-colors hover:border-stone-400/40 hover:text-stone-50"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* النموذج */}
          <Reveal delay={90} className="lg:col-span-7">
            <div className="rounded-sm border border-stone-400/12 p-6 sm:p-8">
              <h2 className="mb-6 font-display text-[1.4rem] font-semibold text-stone-50">
                {contact.formLabel}
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

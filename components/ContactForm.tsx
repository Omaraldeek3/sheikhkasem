"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

/**
 * نموذج التواصل — فرونت اند فقط.
 * يفتح حالياً برنامج البريد لدى المستخدم برسالة مُعدّة مسبقاً، فيعمل بدون سيرفر.
 * لربطه بباك اند لاحقاً: استبدل جسم handleSubmit بطلب POST إلى نقطة النهاية.
 */

const fields = [
  { id: "name", label: "الاسم", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "البريد الألكتروني", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "رقم الهاتف", type: "tel", required: false, autoComplete: "tel" },
  { id: "subject", label: "الموضوع", type: "text", required: true, autoComplete: "off" },
] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `الاسم: ${get("name")}`,
      `البريد الألكتروني: ${get("email")}`,
      get("phone") ? `رقم الهاتف: ${get("phone")}` : null,
      "",
      get("message"),
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      get("subject")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id} className={f.id === "subject" ? "sm:col-span-2" : undefined}>
            <label
              htmlFor={f.id}
              className="mb-2 block text-[0.82rem] font-medium text-stone-200"
            >
              {f.label}
              {f.required && (
                <span className="ms-1 text-brand-lite" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              required={f.required}
              autoComplete={f.autoComplete}
              dir={f.type === "email" || f.type === "tel" ? "ltr" : undefined}
              className="w-full rounded-sm border border-stone-400/20 bg-sumac-950 px-4 py-3 text-[0.92rem] text-stone-50 transition-colors placeholder:text-stone-600 hover:border-stone-400/35 focus:border-brand-lite"
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[0.82rem] font-medium text-stone-200"
        >
          الرسالة
          <span className="ms-1 text-brand-lite" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full resize-y rounded-sm border border-stone-400/20 bg-sumac-950 px-4 py-3 text-[0.92rem] leading-relaxed text-stone-50 transition-colors placeholder:text-stone-600 hover:border-stone-400/35 focus:border-brand-lite"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn btn-primary"
        >
          ارسل الرسالة
        </button>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          واتساب المبيعات
        </a>
      </div>

      <p aria-live="polite" className="min-h-5 text-[0.8rem] text-stone-400">
        {sent
          ? "فُتح برنامج البريد لديك بالرسالة جاهزة. أرسلها لتصل إلينا."
          : "تُرسل الرسالة عبر برنامج البريد على جهازك."}
      </p>
    </form>
  );
}

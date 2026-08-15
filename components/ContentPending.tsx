import Link from "next/link";
import { contact } from "@/lib/content";

/**
 * حالة انتظار نص. تُستخدم في الصفحات التي لم يتوفر نصها في الموقع القديم
 * (نظرة عامة، سياسة الشركة، تفاصيل نقاط البيع) بانتظار محتوى من الشركة.
 */
export default function ContentPending({ what }: { what: string }) {
  return (
    <div className="rounded-sm border border-dashed border-stone-400/25 p-7 sm:p-9">
      <p className="eyebrow mb-3">بانتظار المحتوى</p>
      <p className="text-[1rem] leading-[1.9] text-stone-200">
        نص «{what}» سيُضاف هنا. للحصول عليه الآن، تواصل مع فريق الشركة مباشرة.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="btn btn-primary"
        >
          {contact.title}
        </Link>
        <a
          href={`mailto:${contact.email}`}
          className="btn btn-ghost"
        >
          {contact.email}
        </a>
      </div>
    </div>
  );
}

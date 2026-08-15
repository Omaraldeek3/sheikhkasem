/**
 * محمّل صور مخصّص.
 *
 * next/image لا يضيف basePath تلقائياً لملفات public — يفعل ذلك محسّن الصور
 * وحده، وهو معطّل هنا لأن GitHub Pages ملفات ثابتة. فبدون هذا المحمّل تصبح
 * الصور /products/spice.webp بدل /sheikhkasem/products/spice.webp فتفشل كلها.
 *
 * الصور مصغّرة ومحوّلة webp مسبقاً عبر scripts/prepare-images.mjs، فلا حاجة
 * لتحسين وقت الطلب — تُخدم كما هي مع بادئة المسار.
 */
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }) {
  // المسارات المطلقة (لو أُضيفت صور خارجية لاحقاً) تُترك كما هي
  if (/^https?:\/\//.test(src)) return src;
  return `${prefix}${src}`;
}

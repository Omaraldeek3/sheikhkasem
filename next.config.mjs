/**
 * GitHub Pages يخدم ملفات ثابتة فقط، فيُصدّر الموقع بـ output: "export".
 *
 * الموقع يُخدم على omaraldeek3.github.io/sheikhkasem/ أي داخل مجلد فرعي،
 * فيلزم basePath. لكن `npm run dev` يعمل على الجذر، لذلك يُشتق المسار من
 * NEXT_PUBLIC_BASE_PATH الذي يضبطه ورك فلو النشر وحده.
 *
 * لماذا NEXT_PUBLIC_ ؟ لأن lib/imageLoader.js يحتاج القيمة نفسها داخل
 * حزمة المتصفح ليضيف البادئة لمسارات الصور.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    // محمّل مخصّص لأن محسّن الصور يحتاج سيرفر، ولأنه وحده من يضيف basePath
    // لملفات public. التفاصيل في lib/imageLoader.js
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },

  // كل مسار يصبح مجلداً فيه index.html، وإلا لا تُحلّ المسارات المتداخلة
  // مثل /products/spice على Pages.
  trailingSlash: true,

  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;

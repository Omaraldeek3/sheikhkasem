/**
 * يحاكي GitHub Pages محلياً: يبني التصدير الثابت بنفس basePath، ثم يخدمه
 * من مسار /sheikhkasem/ تماماً كما سيُخدم على omaraldeek3.github.io.
 *
 * الغرض التحقق من أن البادئة صحيحة قبل النشر — أخطاء basePath لا تظهر
 * في `npm run dev` لأنه يعمل على الجذر.
 *
 * التشغيل: npm run preview:pages
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const BASE = "/sheikhkasem";
const ROOT = "out";
const PORT = 4321;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);

  // الجذر يحوّل إلى المسار الفرعي، كما يفعل Pages
  if (path === "/") {
    res.writeHead(302, { Location: `${BASE}/` });
    return res.end();
  }

  if (!path.startsWith(BASE)) {
    res.writeHead(404, types[".html"]);
    return res.end(`<h1>404</h1><p>الموقع على <a href="${BASE}/">${BASE}/</a></p>`);
  }

  path = path.slice(BASE.length) || "/";
  if (path.endsWith("/")) path += "index.html";

  // يمنع الخروج من مجلد out
  const file = join(ROOT, normalize(path).replace(/^(\.\.[/\\])+/, ""));

  try {
    const s = await stat(file);
    if (s.isDirectory()) throw new Error("dir");
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": types[extname(file)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch {
    try {
      const body = await readFile(join(ROOT, "404.html"));
      res.writeHead(404, { "content-type": types[".html"] });
      res.end(body);
    } catch {
      res.writeHead(404, { "content-type": types[".html"] });
      res.end(`<h1>404</h1><p>${path}</p>`);
    }
  }
});

server.listen(PORT, () => {
  console.log(`محاكاة GitHub Pages على http://localhost:${PORT}${BASE}/`);
});

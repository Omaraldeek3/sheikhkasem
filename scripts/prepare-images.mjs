/**
 * سكربت لمرة واحدة: يحوّل صور الموقع القديم إلى أحجام مناسبة للويب داخل public/.
 * الصور الأصلية ضخمة (حتى 8000×4000 و4MB)، فتُصغّر وتُحوّل إلى webp.
 * التشغيل: node scripts/prepare-images.mjs
 */
import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";

const SRC = ".scratch/img";
const OUT_PRODUCT = "public/products";
const OUT_BRAND = "public/brands";
const OUT_ROOT = "public";

/** صور المنتجات — تُصغّر إلى 1600px عرضاً وتُحوّل webp */
const products = {
  "PlYhANxaNdDQQP8kG2NwACGzdYA.png": "spice",
  "63oZVMpTz7BAdAHQEBkBjbRAmI.png": "legume",
  "r4jMdtHgH4qdr9HPZFqk2a9hIA.png": "sweet",
  "huj8v2AeB8mLdPc78iJTpG0G1eQ.png": "oil",
  "iS1aSslOFdupSRyzYbOQObhpNTw.png": "almonds-seeds",
  "IeQTmz6bpW8LVNmIOsXH4yFNQ.png": "tahini",
  "zJscbTOtRrrVVc7yAsjD3VTrD4.jpg": "vinegar",
  "MLdYCHgilaeJvT7IL2Dmf7gBqg.jpg": "quinoa",
  "RyAqiAbhtDqGmCBD22qDlKbkK4.jpg": "oat",
  "1HDXcHX958EroyaPuCXGOP94mE.jpg": "breadcrumbs",
  "nbKIRD3dAe7miS1l5XF3xIGCVc.jpg": "spice-jars",
  "HqeFKY0rMKNMwPXyk59iJZGaV0.jpg": "legume-bags",
  "ZY8KaHqghFDOnhfO7IhAZ9q4s.jpeg": "mill",
};

/** شعارات العلامات التجارية — شفافة، تبقى png بعرض 640px */
const brands = {
  "nC4qstdvUHYvuE0kWKBHAB2BqI.png": "spices",
  "6hu5cIrUJfxQTZvTCCx4lwL1O9o.png": "zaatar",
  "PXIhtn9QuijE758wX61jma3jDk.png": "driedfruit",
  "oS6T6bbswMR76bJMjX2vy2KslRg.png": "oliveoil",
  "uTohhySFdRK0wucA2l0qDSB8jI.png": "freekeh",
  "eeqF9QV5GOHNqVgHAuhqgdWTXe0.png": "gulfgate",
  "eYPhCgBg0VCO0XDEDY2Isq1s378.png": "legumes",
};

/** الشعار الرئيسي */
const logos = {
  "c9hc8uc0N0Ba0wPTsv99NSBFvD0.png": "logo-lockup",
  "eNiUtjBRc9RDoAWr4OxDUNZcKuw.png": "logo-stacked",
  "M8rHQW7eorgmRtBTveUcjfVkqG4.png": "logo-full",
};

await mkdir(OUT_PRODUCT, { recursive: true });
await mkdir(OUT_BRAND, { recursive: true });

let n = 0;

for (const [file, name] of Object.entries(products)) {
  const out = join(OUT_PRODUCT, `${name}.webp`);
  await sharp(join(SRC, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`product ${name}.webp  ${meta.width}x${meta.height}`);
  n++;
}

for (const [file, name] of Object.entries(brands)) {
  const out = join(OUT_BRAND, `${name}.webp`);
  await sharp(join(SRC, file))
    .resize({ width: 560, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`brand   ${name}.webp  ${meta.width}x${meta.height} alpha=${meta.hasAlpha}`);
  n++;
}

for (const [file, name] of Object.entries(logos)) {
  const out = join(OUT_ROOT, `${name}.webp`);
  await sharp(join(SRC, file))
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`logo    ${name}.webp  ${meta.width}x${meta.height} alpha=${meta.hasAlpha}`);
  n++;
}

console.log(`\n${n} ملفاً`);
const listed = await readdir(OUT_PRODUCT);
console.log("products:", listed.join(", "));

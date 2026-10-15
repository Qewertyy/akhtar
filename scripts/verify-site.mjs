import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";


const root = new URL("../", import.meta.url).pathname;
const dist = join(root, "dist");
const requiredPages = [
  "index.html",
  "work/ryvn/index.html",
  "work/gigdash/index.html",
  "work/futti/index.html",
  "work/togetheriv/index.html",
];
const forbidden = ["Sugee", "Barbershop", "GetMyCampus", "MyDeadStock", "Zetro"];


function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}


function resolveInternalHref(href) {
  const pathname = href.split("#", 1)[0].split("?", 1)[0];
  if (!pathname || pathname === "/") return join(dist, "index.html");
  const relative = pathname.replace(/^\//, "");
  if (extname(relative)) return join(dist, relative);
  return join(dist, relative, "index.html");
}


assert.ok(existsSync(dist), "Missing dist directory; run the Astro build first");
for (const page of requiredPages) {
  assert.ok(existsSync(join(dist, page)), `Missing built page: ${page}`);
}

const homepage = readFileSync(join(dist, "index.html"), "utf8");
for (const phrase of ["akhtar.khn.irl@gmail.com", "Ryvn", "Gigdash", "Futti", "TogetherIV"]) {
  assert.ok(homepage.includes(phrase), `Homepage is missing: ${phrase}`);
}

const htmlFiles = filesUnder(dist).filter((file) => file.endsWith(".html"));
const allHtml = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
for (const name of forbidden) {
  assert.ok(!allHtml.includes(name), `Forbidden project found in built HTML: ${name}`);
}
assert.ok(!allHtml.includes("/Volumes/"), "Local absolute path leaked into built HTML");
assert.ok(!allHtml.includes('href="/readme"'), "Legacy /readme link remains");
assert.ok(!allHtml.includes('href="/faq"'), "Legacy /faq link remains");
assert.ok(!allHtml.includes('href="/api"'), "Legacy /api link remains");

const internalHrefs = new Set(
  [...allHtml.matchAll(/href="(\/[^"\s]*)"/g)].map((match) => match[1]),
);
for (const href of internalHrefs) {
  const target = resolveInternalHref(href);
  assert.ok(existsSync(target), `Broken internal link ${href} -> ${target}`);
}

console.log(
  `Site verified: ${requiredPages.length} required pages, ${htmlFiles.length} HTML files, ${internalHrefs.size} internal links`,
);

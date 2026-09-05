#!/usr/bin/env node
/**
 * Favorites-page 「複製 Prompt」 wiring gate (LOCAL static).
 * Proves broken double-quoted JSON.stringify onclick vs fixed single-quoted attribute.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import vm from "node:vm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const appSrc = fs.readFileSync(path.join(root, "app.js"), "utf8");

function extractFn(src, name) {
  const start = src.search(new RegExp(`^function ${name}\\(`, "m"));
  if (start < 0) throw new Error(`missing ${name}`);
  let i = start;
  let depth = 0;
  let started = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") {
      depth++;
      started = true;
    } else if (ch === "}") {
      depth--;
      if (started && depth === 0) {
        i++;
        break;
      }
    }
  }
  return src.slice(start, i);
}

function parsedOnclickDoubleAttr(html) {
  const m = String(html).match(/\sonclick="([^"]*)"/);
  return m ? m[1] : null;
}

function parsedOnclickSingleAttr(html) {
  const m = String(html).match(/\sonclick='([^']*)'/);
  return m ? m[1] : null;
}

const SAMPLE = {
  id: "study-explain-levels",
  categoryZh: "學習",
  categoryEn: "Study",
  promptZh: "請用三個不同程度解釋「[概念]」：\n1. 兒童\n2. 高中\n3. 大學\n\n標點：，。！？",
  promptEn: "Explain at three levels:\n1. child\n2. high school\n3. college"
};

// Prove historical bug class
{
  const broken = `<button onclick="copyPrompt(${JSON.stringify(SAMPLE.id)})">x</button>`;
  assert.equal(parsedOnclickDoubleAttr(broken), "copyPrompt(");
  assert.notEqual(parsedOnclickDoubleAttr(broken), `copyPrompt(${JSON.stringify(SAMPLE.id)})`);
}

assert.ok(appSrc.includes("function copyFavoritePrompt("), "copyFavoritePrompt required");
assert.ok(appSrc.includes("onclick='copyFavoritePrompt("), "favorites button must use single-quoted onclick");
assert.ok(
  !/onclick="copyPrompt\(\$\{JSON\.stringify\(prompt\.id\)\}\)\"/.test(appSrc),
  "must not retain broken double-quoted copyPrompt(JSON.stringify) favorites wiring"
);

const ctx = {
  state: { lang: "zh" },
  L: (k) => (k === "prompts.copy" ? "複製 Prompt" : k),
  getPromptCategoryLabel: (p) => p.categoryZh,
  getPromptPreviewText: (p) => {
    const oneLine = String(p.promptZh).replace(/\s+/g, " ").trim();
    return oneLine.length <= 140 ? p.promptZh : `${oneLine.slice(0, 140).trim()}…`;
  },
  renderFavoriteToggleButton: () => `<button type="button">toggle</button>`,
  String,
  JSON
};
vm.createContext(ctx);
vm.runInContext(extractFn(appSrc, "renderFavoritePromptCard"), ctx);
const html = ctx.renderFavoritePromptCard(SAMPLE);
const onclick = parsedOnclickSingleAttr(html);
assert.ok(onclick, "single-quoted onclick present");
assert.equal(onclick, `copyFavoritePrompt(${JSON.stringify(SAMPLE.id)})`);
assert.equal(parsedOnclickDoubleAttr(html), null);

// Full body available via catalog lookup path (not preview)
assert.ok(SAMPLE.promptZh.includes("\n"));
assert.ok(SAMPLE.promptZh.length > 40);
const previewShown = ctx.getPromptPreviewText(SAMPLE);
assert.ok(previewShown.length <= SAMPLE.promptZh.length || previewShown.endsWith("…"));

console.log(JSON.stringify({
  ok: true,
  onclick,
  previewLen: previewShown.length,
  fullLen: SAMPLE.promptZh.length,
  previewTruncated: previewShown !== SAMPLE.promptZh
}, null, 2));
console.log("PASS favorites-copy-wiring-gate");

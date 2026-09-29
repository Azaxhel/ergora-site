import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("preserva conteúdo e interações da landing Carbon", async () => {
  const [page, styles, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(page, /Automação para rotinas administrativas e relatórios operacionais/);
  assert.match(page, /Quero organizar uma rotina/);
  assert.match(page, /Manifesto \/ 01/);
  assert.match(page, /Manifesto \/ 03/);
  assert.match(page, /De uma rotina dispersa para um fluxo mais claro/);
  assert.match(styles, /\.concern-list li:hover/);
  assert.match(styles, /\.compare-card:hover/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(layout, /Ergora \| Automação administrativa/);
  assert.doesNotMatch(page, /setor cartorário|resultados financeiros/i);
});

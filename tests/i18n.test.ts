import assert from "node:assert/strict";
import test from "node:test";
import { localePath, modernUzbek } from "../src/lib/i18n";
import { getServicePages } from "../src/lib/localized-content";

test("modern Uzbek changes only display spelling and respects case", () => {
  assert.equal(modernUzbek("O‘zbekiston G‘oya Shahar Chiroq"), "Özbekiston Ğoya Şahar Çiroq");
  assert.equal(modernUzbek("oʻrganish gʻisht shoshilinch chora"), "örganiş ğişt şoşilinç çora");
  assert.equal(modernUzbek("Search Console"), "Search Console");
});

test("language URLs preserve service paths", () => {
  assert.equal(localePath("en", "/xizmatlar/landing-page"), "/en/xizmatlar/landing-page");
  assert.equal(localePath("ru", "/en/loyihalar"), "/ru/loyihalar");
  assert.equal(localePath("uz", "/ru"), "/");
  assert.equal(getServicePages("en")[0].href, "/en/xizmatlar/landing-page");
  assert.equal(getServicePages("uz")[0].slug, "landing-page");
});

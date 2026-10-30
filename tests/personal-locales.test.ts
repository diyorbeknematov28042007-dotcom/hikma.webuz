import assert from "node:assert/strict";
import test from "node:test";
import { personalText, personalDescription } from "../src/lib/personal-copy";
import { personalMetadata } from "../src/lib/personal-metadata";
import { localePath } from "../src/lib/i18n";

test("personal portfolio translates content while preserving product and tool names", () => {
  assert.equal(personalText("en", "Men haqimda"), "About me");
  assert.equal(personalText("ru", "Men haqimda"), "Обо мне");
  for (const locale of ["uz", "ru", "en"] as const) {
    assert.equal(personalText(locale, "YURISTIM"), "YURISTIM");
    assert.equal(personalText(locale, "TypeScript"), "TypeScript");
    assert.ok(personalText(locale, personalDescription).includes("YURISTIM"));
  }
  assert.throws(() => personalText("ru", "Untranslated new content"), /Missing personal portfolio translation/);
});

test("personal language routes and search alternates point to the same profile", () => {
  for (const locale of ["uz", "ru", "en"] as const) {
    const metadata = personalMetadata(locale);
    assert.equal(metadata.alternates?.canonical, localePath(locale, "/diyorbeknematov"));
    assert.equal(metadata.alternates?.languages?.["ru-RU"], "/ru/diyorbeknematov");
    assert.equal(metadata.alternates?.languages?.en, "/en/diyorbeknematov");
  }
});

import assert from "node:assert/strict";
import test from "node:test";
import { motionDurationMs } from "../src/lib/personal-motion";

test("normalizes authored and optimized CSS durations for WAAPI", () => {
  assert.equal(motionDurationMs("420ms"), 420);
  assert.equal(motionDurationMs(".42s"), 420);
  assert.equal(motionDurationMs("0.42s"), 420);
  assert.equal(motionDurationMs(" 180ms "), 180);
  assert.equal(motionDurationMs("0.2s"), 200);
  assert.equal(motionDurationMs("0ms"), 0);
});

test("uses the intended short entrance for missing or invalid duration tokens", () => {
  for (const value of ["", "invalid", "-100ms", "Infinitys", "420"]) {
    assert.equal(motionDurationMs(value), 420);
  }
});

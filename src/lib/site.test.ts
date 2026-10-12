import assert from "node:assert/strict";
import test from "node:test";
import { getSiteUrl } from "./site.ts";

test("uses the production Vercel origin by default", () => {
  assert.equal(getSiteUrl(""), "https://autohisab.vercel.app");
});
test("normalises a configured future domain to its origin", () => {
  assert.equal(getSiteUrl("https://www.example.com/path/"), "https://www.example.com");
});

test("falls back safely for invalid or non-web URLs", () => {
  assert.equal(getSiteUrl("not a URL"), "https://autohisab.vercel.app");
  assert.equal(getSiteUrl("ftp://example.com"), "https://autohisab.vercel.app");
});

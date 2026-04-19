import { describe, expect, it } from "vitest";
import { NumberSchema } from "../src/schemas/number.js"

describe("NumberSchema", () => {
    const s = new NumberSchema();

    it("accepts numbers", () => {
        expect(s.parse(123)).toBe(123);
    })

    it("rejects non-numbers", () => {
        expect(() => s.parse("hello")).toThrow(`Expected number, got ${typeof "hello"}`);
        expect(() => s.parse(NaN)).toThrow(`Expected number, got ${typeof NaN}`);
        expect(() => s.parse(null)).toThrow();
        expect(() => s.parse(undefined)).toThrow();
    })
})
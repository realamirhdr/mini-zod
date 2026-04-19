import { describe, expect, it } from "vitest";
import { StringSchema } from "../src/schemas/string.js"

describe("StringSchema", () => {
    const s = new StringSchema();

    it("accepts strings", () => {
        expect(s.parse("hello")).toBe("hello");
    })

    it("rejects non-strings", () => {
        expect(() => s.parse(12)).toThrow(`Expected string, got ${typeof 12}`);
        expect(() => s.parse(null)).toThrow();
        expect(() => s.parse(undefined)).toThrow();
    })
})
import { describe, expect, it } from "vitest";
import { BooleanSchema } from "../src/schemas/boolean.js"

describe("BooleanSchema", () => {
    const s = new BooleanSchema();

    it("accepts booleans", () => {
        expect(s.parse(true)).toBe(true);
    })

    it("rejects non-booleans", () => {
        expect(() => s.parse("hello")).toThrow(`Expected boolean, got ${typeof "hello"}`);
        expect(() => s.parse(null)).toThrow();
        expect(() => s.parse(undefined)).toThrow();
    })
})
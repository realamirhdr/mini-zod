import { describe, expect, it } from "vitest";
import { LiteralSchema } from "../src/schemas/literal.js"

describe("LiteralSchema", () => {
    const s = new LiteralSchema("none");

    it("accepts matching literals", () => {
        expect(new LiteralSchema("admin").parse("admin")).toBe("admin");
        expect(new LiteralSchema(123).parse(123)).toBe(123);
        expect(new LiteralSchema(true).parse(true)).toBe(true);
    })

    it("rejects non-matching literals", () => {
        expect(() => s.parse("hello")).toThrow('Expected "none", got "hello"');
        expect(() => s.parse(null)).toThrow('Expected "none", got null');
        expect(() => s.parse(undefined)).toThrow('Expected "none", got undefined');
    })
})

import { describe, expect, it } from "vitest";
import * as v from "../src/index.js"

describe("UnionSchema", () => {
    const schema = v.union([v.string(), v.boolean(), v.number()]);

    it("parses a string", () => expect(schema.parse("hello")).toBe("hello"));
    it("parses a boolean", () => expect(schema.parse(true)).toBe(true));
    it("parses a number", () => expect(schema.parse(42)).toBe(42));
    it("throws for unmatched type", () => expect(() => schema.parse(null)).toThrow("None of the values matched"));
});

import { describe, expect, it } from "vitest";
import * as v from "../src/index.js"

describe("factories", () => {
    it("creates a working schema", () => {
        expect(v.string().parse("hello")).toBe("hello");
        expect(v.number().parse(1234)).toBe(1234);
        expect(v.boolean().parse(false)).toBe(false);
        expect(v.literal("admin").parse("admin")).toBe("admin");
    })
})
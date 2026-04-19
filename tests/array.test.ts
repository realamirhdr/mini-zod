import { describe, expect, it } from "vitest";
import { ArraySchema } from "../src/schemas/array.js"
import * as v from "../src/index.js"

describe("BooleanSchema", () => {
    const s = v.array(v.string());

    it("accepts arrays", () => {
        expect(s.parse([])).toStrictEqual([]);
        expect(s.parse(["amir", "parimah"])).toStrictEqual(["amir", "parimah"])
    })

    it("rejects non-arrays, rejects arrays containing elements with the wrong type", () => {
        expect(() => s.parse("hello")).toThrow(`Expected Array`);
        expect(() => s.parse([1, 2, 3])).toThrow(`At index 0: Expected string, got ${typeof 1}`);
        expect(() => s.parse(["1", 2, 3])).toThrow(`At index 1: Expected string, got ${typeof 2}`);
    })
})
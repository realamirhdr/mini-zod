import { Schema } from "../schema.js";

export class NumberSchema extends Schema<number> {
    parse(input: unknown): number {
        if (typeof input !== "number" || Number.isNaN(input)) {
            throw new Error(`Expected number, got ${typeof input}`)
        }
        return input
    }
}



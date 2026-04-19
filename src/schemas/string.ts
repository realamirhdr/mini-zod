import { Schema } from "../schema.js";

export class StringSchema extends Schema<string> {
    parse(input: unknown): string {
        if (typeof input !== "string") {
            throw new Error(`Expected string, got ${typeof input}`)
        }
        return input
    }
}
import { Schema } from "../schema.js";


export class BooleanSchema extends Schema<boolean> {
    parse(input: unknown): boolean {
        if (typeof input !== "boolean") {
            throw new Error(`Expected boolean, got ${typeof input}`);
        }
        return input;
    }
}

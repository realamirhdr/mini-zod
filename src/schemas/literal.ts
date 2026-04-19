import { Schema } from "../schema.js";

type Literal = string | number | boolean;

export class LiteralSchema<T extends Literal> extends Schema<T> {

    constructor(private readonly value: T) {
        super();
    }

    parse(input: unknown): T {
        if (input !== this.value) {
            throw new Error(`Expected ${JSON.stringify(this.value)}, got ${JSON.stringify(input)}`);
        }
        return input as T;
    }
}
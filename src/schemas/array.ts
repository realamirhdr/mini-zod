import { Schema } from "../schema.js";

export class ArraySchema<T> extends Schema<Array<T>> {
    constructor(private readonly element: Schema<T>) {
        super();
    }
    parse(input: unknown): Array<T> {
        if (!Array.isArray(input)) {
            throw new Error(`Expected Array`)
        }

        return input.map((item, i) => {
            try {
                return this.element.parse(item)
            } catch (err) {
                throw new Error(`At index ${i}: ${(err as Error).message}`)
            }
        })
    }
}
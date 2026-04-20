import { Infer, Schema } from "../schema.js";

export class UnionSchema<T extends Schema<unknown>[]> extends Schema<Infer<T[number]>> {

    constructor(private readonly values: T) {
        super();
    }

    parse(input: unknown): Infer<T[number]> {
        for (const element of this.values) {
            try {
                return element.parse(input) as Infer<T[number]>
            }
            catch (err) {
            }
        }

        throw new Error("None of the values matched");
    }

}
import { Schema } from "../schema.js";

export class ObjectSchema<T> extends Schema<T> {

    parse(input: unknown): T {
        if (typeof input !== "object")
            throw new Error("Expected an object")

        // TODO: complete this

        throw new Error("Method not implemented.");
    }

}
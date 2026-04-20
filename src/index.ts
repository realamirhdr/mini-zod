import { StringSchema } from "./schemas/string.js";
import { NumberSchema } from "./schemas/number.js";
import { BooleanSchema } from "./schemas/boolean.js";
import { LiteralSchema } from "./schemas/literal.js";
import { ArraySchema } from "./schemas/array.js";
import { Infer, Schema } from "./schema.js";
import { UnionSchema } from "./schemas/union.js";

export const string = () => new StringSchema();
export const number = () => new NumberSchema();
export const boolean = () => new BooleanSchema();
export const literal = <T extends string | number | boolean>(value: T) => new LiteralSchema(value);
export const array = <T>(elements: Schema<T>) => new ArraySchema(elements);
export const union = <T extends Schema<unknown>[]>(elements: T) => new UnionSchema(elements);


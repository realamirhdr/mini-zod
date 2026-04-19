import { StringSchema } from "./schemas/string.js";
import { NumberSchema } from "./schemas/number.js";
import { BooleanSchema } from "./schemas/boolean.js";
import { LiteralSchema } from "./schemas/literal.js";
import { ArraySchema } from "./schemas/array.js";
import { Infer, Schema } from "./schema.js";

export const string = () => new StringSchema();
export const number = () => new NumberSchema();
export const boolean = () => new BooleanSchema();
export const literal = <T extends string | number | boolean>(value: T) => new LiteralSchema(value);
export const array = <T>(elements: Schema<T>) => new ArraySchema(elements);

type Unwrap<T> = T extends Array<infer U> ? U : never;
type A = Unwrap<string[]>;  // string
type B = Unwrap<number[]>;  // number

const a: number[] = new Array(5).fill(0);
console.log(array(string()).parse([]));


const s = string()
type a = Infer<typeof s> 

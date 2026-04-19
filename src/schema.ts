export abstract class Schema<T> {
    abstract parse(input: unknown): T;
}

export type Infer<S> = S extends Schema<infer T> ? T : never;
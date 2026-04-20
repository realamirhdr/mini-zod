# mini-zod

A minimal schema validation library inspired by [Zod](https://zod.dev), built with TypeScript.

> This project is a learning exercise to explore and practice complex TypeScript types. I add a new schema type to it each time I learn a new TypeScript type concept.

## Installation

```bash
npm install
```

## Usage

```ts
import * as v from "./src/index.js";
```

### Primitives

```ts
v.string().parse("hello");   // "hello"
v.number().parse(42);        // 42
v.boolean().parse(true);     // true
```

### Literal

```ts
v.literal("active").parse("active"); // "active"
v.literal(1).parse(2);               // throws
```

### Array

```ts
v.array(v.number()).parse([1, 2, 3]); // [1, 2, 3]
```

### Union

```ts
v.union([v.string(), v.number()]).parse("hi"); // "hi"
v.union([v.string(), v.number()]).parse(42);   // 42
```

### Type Inference

```ts
const schema = v.union([v.string(), v.number()]);
type T = Infer<typeof schema>; // string | number
```

## Running Tests

```bash
npm test
```

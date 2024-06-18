type CamelizeString<S extends string> = S extends `${infer Head}_${infer Tail}`
  ? `${Lowercase<Head>}${Capitalize<CamelizeString<Tail>>}`
  : S;

type CamelizeArray<T> = T extends (infer U)[] ? Camelize<U>[] : T;

export type Camelize<T> = T extends object
  ? T extends unknown[]
    ? CamelizeArray<T>
    : {
        [K in keyof T as CamelizeString<K & string>]: Camelize<T[K]>;
      }
  : T;

// UTILITY --------------------------------------------------------------------------------------------------------------------------------------

/** @Alias An `unknown` that that need to be resolved. */
export type _todoUnknown = unknown

/** @Alias */
export type HexColor = string

/** @Alias */
export type UUID = string

export function isNullish(value: unknown): boolean {
  return value === undefined || value === null
}

// Lazy

export type Lazy<V> = () => V

export function lazy<T>(factory: () => NonNullable<T>) {
  let value: T | undefined
  return () => value ?? (value = factory())
}

/** @Pair as a flexible variation of built-in `<Record>` type. */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

/** @Pair as a flexible variation of built-in `<Record>` type. */
export type LazyRecord<K extends keyof any, T> = Record<K, Lazy<T>>

/** @Pair as a flexible variation of built-in `<Record>` type. */
export type LazyPartialRecord<K extends keyof any, T> = {
  [P in K]?: Lazy<T>
}

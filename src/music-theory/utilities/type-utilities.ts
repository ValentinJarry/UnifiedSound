// UTILITY --------------------------------------------------------------------------------------------------------------------------------------

/** @Alias An `unknown` that that need to be resolved. */
export type _todoUnknown = unknown

/** @Alias */
export type HexColor = string

/** @Alias */
export type UUID = string

/** @Pair as a flexible variation of built-in `<Record>` type. */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export function isNullish(value: unknown): boolean {
  return value === undefined || value === null
}

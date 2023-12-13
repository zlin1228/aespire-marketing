export type valueof<T> = T[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T extends object>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T extends object>(object: T) => (keyof T)[];

/**
 * Will recursively return a union of literals extracted from an object (works with nested objects)
 */
export type ExtractLiteralsFromObject<T> = {
  [K in keyof T]: T[K] extends object ? ExtractLiteralsFromObject<T[K]> : T[K] extends string | number ? T[K] : never;
}[keyof T];

/**
 * Returns a tuple of literals from a string assuming it is split at the delimiter.
 * Has util function `splitString()` that implements .split() and returns this type
 */
export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ''
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

/**
 * @param string String to be split to array "ie: 'this-string'"
 * @param delimiter Where to split the string "ie: '-'"
 * @returns `[...T as const]` => Tuple of string literals
 */
export const splitString = <T extends string, D extends string>(string: T, delimiter: D) => string.split(delimiter);

/**
 * Works like `Object.entries()` but returns accurate types
 * @param object Any JS object
 * @returns an array of tuples with each key and value of the object
 */
export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;

/**
 * Works like `Object.keys()` but returns accurate types
 * @param object Any JS object
 * @returns An array of the keys of the object
 */
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];

/**
 * Works like `Object.hasOwnProperty()` but infers type of the passed key
 * @param object Any JS object
 * @param potentialKey Any key that may or may not exist on the object
 * @returns boolean representing whether the key exists on the object
 */
export const keyExistsOnObject = <T extends Record<string, unknown>>(
  object: T,
  potentialKey: string | number | symbol,
): potentialKey is keyof T => object[potentialKey as keyof object] !== undefined;

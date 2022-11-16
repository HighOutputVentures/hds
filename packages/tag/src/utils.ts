export function omit<T extends Record<string, any>>(obj: T, ...keys: (keyof T | string)[]) {
  const copy = { ...obj }; /* do NOT mutate original object 😏 */

  for (const key of keys) {
    if (Object.hasOwn(copy, key)) {
      delete copy[key];
    }
  }

  return copy;
}

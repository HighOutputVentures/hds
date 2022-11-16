export function omit<T extends Record<string, any>, K extends (keyof T)[]>(
  subject: T,
  ...keys: K
): Omit<T, K[number]> {
  const copy = {...subject}; /* do NOT mutate original object 😏 */

  for (const key of keys) {
    if (Object.hasOwn(copy, key)) {
      delete copy[key];
    }
  }

  return copy;
}

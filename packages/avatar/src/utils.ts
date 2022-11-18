export function omit<T extends Record<string, any>, K extends (keyof T)[]>(
  subject: T,
  ...keys: K
): Omit<T, K[number]> {
  const copy = { ...subject }; /* do NOT mutate original object 😏 */

  for (const key of keys) {
    if (key in copy) {
      delete copy[key];
    }
  }

  return copy;
}

export function pick<T extends Record<string, any>, K extends (keyof T)[]>(obj: T, ...keys: K) {
  const copy = { ...obj };
  const picked: Partial<Record<K[number], T[K[number]]>> = {};

  for (const key of keys) {
    if (key in copy) {
      picked[key] = copy[key];
    }
  }

  return picked;
}

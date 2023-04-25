export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const copy = { ...obj };

  for (const key of keys) {
    if (copy[key]) {
      delete copy[key];
    }
  }

  return copy;
}

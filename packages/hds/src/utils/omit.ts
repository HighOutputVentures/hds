export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: K[]
) {
  const copy = { ...obj };

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(copy, key)) {
      delete copy[key];
    }
  }

  return copy as Omit<T, K>;
}

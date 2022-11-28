export default function pick<T extends Record<string, any>, K extends keyof T>(
  subject: T,
  ...keys: K[]
) {
  const copy = { ...subject };
  const picked: Partial<Record<K, T[K]>> = {};

  for (const key of keys) {
    if (key in copy) {
      picked[key] = copy[key];
    }
  }

  return picked;
}

export default function pick<T extends Record<string, any>, K extends keyof T>(subject: T, ...keys: K[]): Partial<Record<K, T[K]>>;

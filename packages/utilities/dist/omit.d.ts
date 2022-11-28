export default function omit<T extends Record<string, any>, K extends string[]>(subject: T, ...keys: K): Omit<T, K[number]>;

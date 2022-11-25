export declare function omit<T extends Record<string, any>, K extends (keyof T)[]>(subject: T, ...keys: K): Omit<T, K[number]>;

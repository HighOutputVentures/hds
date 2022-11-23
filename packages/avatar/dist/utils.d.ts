import { Breakpoints } from "./types";
export declare function omit<T extends Record<string, any>, K extends (keyof T)[]>(subject: T, ...keys: K): Omit<T, K[number]>;
export declare function pick<T extends Record<string, any>, K extends (keyof T)[]>(obj: T, ...keys: K): Partial<Record<K[number], T[K[number]]>>;
export declare function findClosestBreakpoint(breakpoints: (Breakpoints | string)[], base: string): string;

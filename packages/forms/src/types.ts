export type Nullable<T> = T | null;

export type Size = "sm" | "md";

export type Prettify<T extends Record<string, any>> = Pick<T, keyof T>;

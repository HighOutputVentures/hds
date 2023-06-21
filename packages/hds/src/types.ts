export type Pretty<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export type Assign<T, U> = Pretty<DistributiveOmit<T, keyof U> & U>;

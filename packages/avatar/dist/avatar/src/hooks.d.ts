declare type ResponsiveSize = string | Partial<Record<string, string>>;
export declare function useActualSize<T extends ResponsiveSize>(size: T, fallback?: string): any;
export {};

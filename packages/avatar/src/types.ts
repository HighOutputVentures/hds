export type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveSize<T extends string> = Partial<Record<Breakpoints, T>>;

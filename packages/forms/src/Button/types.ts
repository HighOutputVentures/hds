export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Variant = 'solid' | 'outline' | 'ghost' | 'subtle' | 'link' | 'unstyled';

export type Accent = 'primary' | 'error' | 'gray';

export type Prettify<T> = Pick<T, keyof T>;

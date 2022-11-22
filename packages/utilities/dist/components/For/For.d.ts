/// <reference types="react" />
export declare type ForProps<T extends unknown[]> = {
    each: T;
    getKey?: (context: T[number], index: number) => string | number;
    children: (context: T[number], index: number) => JSX.Element;
    fallback?: JSX.Element | null;
};
export default function For<T extends unknown[]>(props: ForProps<T>): JSX.Element | null;

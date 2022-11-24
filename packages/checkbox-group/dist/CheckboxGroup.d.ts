import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
declare type GetPropsArgs = {
    disabled?: boolean;
};
declare type RenderChildrenContext<T> = {
    item: T;
    index: number;
    selected: boolean;
    getProps(args?: GetPropsArgs): {
        icon: Record<string, any>;
        checkbox: Record<string, any>;
        container: Record<string, any>;
    };
};
declare type CheckboxGroupSize = "sm" | "md";
declare type CheckboxGroupVariant = "circle" | "square" | "dot";
declare type CheckboxGroupBaseProps<T extends unknown[]> = {
    size?: CheckboxGroupSize;
    variant?: CheckboxGroupVariant;
    items: T;
    children(context: RenderChildrenContext<T[number]>): React.ReactNode;
    compareFn?: (item: T[number]) => unknown;
} & ({
    multiple: true;
    value: T[number][];
    onChange(value: T[number][]): void;
} | {
    multiple?: false;
    value: T[number];
    onChange(value: T[number]): void;
});
export declare type CheckboxGroupProps<T extends unknown[]> = SystemStyleObject & CheckboxGroupBaseProps<T>;
export default function CheckboxGroup<T extends unknown[]>(props: CheckboxGroupProps<T>): JSX.Element;
export {};

import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import { Breakpoints, ResponsiveSize } from "./types";
declare type AvatarGroupSize = "xs" | "sm" | "md";
declare type AvatarGroupBaseProps = {
    max?: number | Partial<Record<Breakpoints, number>>;
    size?: AvatarGroupSize | ResponsiveSize<AvatarGroupSize>;
    hasAddButton?: boolean;
    onAddButtonClick?(): void;
};
export declare type AvatarGroupProps = SystemStyleObject & AvatarGroupBaseProps;
export default function HdsAvatarGroup(props: React.PropsWithChildren<AvatarGroupProps>): JSX.Element;
export {};

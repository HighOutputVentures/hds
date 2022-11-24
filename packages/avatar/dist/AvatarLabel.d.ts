import { SystemStyleObject } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { AvatarBaseProps } from "./Avatar";
import { Badgeable, Clickable, FreeSize } from "./types";
declare type Size = "sm" | "md" | "lg" | "xl";
declare type AvatarLabelBaseProps = {
    size?: Size;
    fallback?: boolean;
    supportText?: string;
};
export declare type AvatarLabelProps = SystemStyleObject & FreeSize<AvatarBaseProps> & AvatarLabelBaseProps & Badgeable & Clickable;
export default function AvatarLabel(props: PropsWithChildren<AvatarLabelProps>): JSX.Element;
export {};

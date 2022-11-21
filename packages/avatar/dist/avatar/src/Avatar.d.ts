/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { Badgeable, Clickable, ResponsiveSize } from "./types";
declare type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
export declare type AvatarBaseProps = {
    src?: string;
    name?: string;
    size?: AvatarSize | ResponsiveSize<AvatarSize>;
    online?: boolean;
    onlineIndicator?: boolean;
    verified?: boolean;
    __elevated?: boolean;
    __bordered?: boolean;
};
export declare type AvatarProps = SystemStyleObject & AvatarBaseProps & Badgeable & Clickable;
/**
 *
 * ### HDS Avatar
 *
 * 💡
 *
 * Please only use the `size`s `2xl` and below.
 * `3xl` and up are only used for profile internally
 * and will be removed in the future.
 * They also does not support `badge` and other stuffs
 *
 */
export default function HdsAvatar(props: AvatarProps): JSX.Element;
export {};

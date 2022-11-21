/// <reference types="react" />
import { SystemStyleObject } from "@chakra-ui/react";
import { AvatarBaseProps } from "./Avatar";
import { Clickable, ResponsiveSize } from "./types";
declare type AvatarProfileSize = "sm" | "md" | "lg";
declare type AvatarProfileBaseProps = {
    size?: AvatarProfileSize | ResponsiveSize<AvatarProfileSize>;
};
declare type InheritedAvatarProps = Pick<AvatarBaseProps, "src" | "name" | "verified">;
export declare type AvatarProfileProps = SystemStyleObject & InheritedAvatarProps & AvatarProfileBaseProps & Clickable;
export default function AvatarProfile(props: AvatarProfileProps): JSX.Element;
export {};

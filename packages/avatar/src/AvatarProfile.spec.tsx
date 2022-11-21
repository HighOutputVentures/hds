import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import Avatar, { AvatarBaseProps } from "./Avatar";
import { useActualSize } from "./hooks";
import { Clickable, ResponsiveSize } from "./types";

type AvatarProfileSize = "sm" | "md" | "lg";

type AvatarProfileBaseProps = {
  size?: AvatarProfileSize | ResponsiveSize<AvatarProfileSize>;
};

type InheritedAvatarProps = Pick<AvatarBaseProps, "src" | "name" | "verified">;

// prettier-ignore
export type AvatarProfileProps =
  SystemStyleObject &
  InheritedAvatarProps &
  AvatarProfileBaseProps &
  Clickable;

export default function AvatarProfile(props: AvatarProfileProps) {
  const { size, ...others } = Object.assign({ size: "md" }, props);

  const actualSize = useActualSize(size);
  const psuedoSize = { sm: "3xl", md: "4xl", lg: "5xl" } as const;

  return <Avatar size={psuedoSize[actualSize]} {...others} __elevated __bordered />;
}

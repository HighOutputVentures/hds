import * as React from "react";
import Avatar, { AvatarProps } from "./Avatar";

type Size = "sm" | "md" | "lg";

type Base = Pick<AvatarProps, "src" | "name" | "onClick" | "__testId">;

export interface AvatarProfileProps extends Base {
  size?: Size;
}

export default function AvatarProfile(props: AvatarProfileProps) {
  const { size = "sm", ...others } = props;

  return <Avatar size={sizeMap[size]} isElevated isBordered {...others} />;
}

const sizeMap = {
  sm: "3xl",
  md: "4xl",
  lg: "5xl",
} as const;

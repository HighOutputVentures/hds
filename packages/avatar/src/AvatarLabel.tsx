import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import Avatar, { AvatarProps } from "./Avatar";

type Size = "sm" | "md" | "lg" | "xl";

export interface AvatarLabelProps extends AvatarProps {
  size?: Size;
  supportText?: string;
}

export default function AvatarLabel(props: AvatarLabelProps) {
  const { size = "md", name, supportText, ...others } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ...(size === "sm" && { gap: "10px" }),
        ...(size === "md" && { gap: "12px" }),
        ...(size === "lg" && { gap: "12px" }),
        ...(size === "xl" && { gap: "16px" }),
      }}
      data-testid="hds.avatar-label"
    >
      <Avatar name={name} size={size} {...others} />

      <Box>
        <Text
          sx={{
            color: "neutrals.800",

            ...(size === "sm" && { fontSize: "14px", lineHeight: "14px" }),
            ...(size === "md" && { fontSize: "14px", lineHeight: "14px" }),
            ...(size === "lg" && { fontSize: "18px", lineHeight: "18px" }),
            ...(size === "xl" && { fontSize: "20px", lineHeight: "20px" }),
          }}
          data-testid="hds.avatar-label.name"
        >
          {name}
        </Text>

        <Text
          sx={{
            color: "neutrals.600",
            marginTop: "4px",

            ...(size === "sm" && { fontSize: "12px", lineHeight: "12px" }),
            ...(size === "md" && { fontSize: "14px", lineHeight: "14px" }),
            ...(size === "lg" && { fontSize: "14px", lineHeight: "14px" }),
            ...(size === "xl" && { fontSize: "18px", lineHeight: "18px" }),
          }}
          data-testid="hds.avatar-label.support-text"
        >
          {supportText}
        </Text>
      </Box>
    </Box>
  );
}

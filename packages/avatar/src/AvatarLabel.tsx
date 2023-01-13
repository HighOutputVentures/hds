import { Box, SystemStyleObject, Text, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";
import { PropsWithChildren } from "react";
import { AvatarBaseProps } from "./Avatar";
import { Badgeable, Clickable, FreeSize } from "./types";
import { omit, pick } from "./utils";

type Size = "sm" | "md" | "lg" | "xl";

type AvatarLabelBaseProps = {
  size?: Size;
  fallback?: boolean;
  supportText?: string;
};

// prettier-ignore
export type AvatarLabelProps = 
  SystemStyleObject &
  FreeSize<AvatarBaseProps> &
  AvatarLabelBaseProps &
  Badgeable &
  Clickable;

export default function AvatarLabel(props: PropsWithChildren<AvatarLabelProps>) {
  const {
    src,
    name,
    size = "md",
    fallback = true,
    children,
    supportText,
    online,
    onlineIndicator,
    ...others
  } = props;

  const styles = useMultiStyleConfig("AvatarLabel", { size, variant: "hds" });

  if (!React.isValidElement(children)) {
    console.error("'AvatarLabel' only accepts a single 'Avatar' child");

    return null;
  }

  return (
    <Box
      sx={{
        ...omit(
          others,
          "badge",
          "clickable",
          "verified",
          /* @ts-ignore "This uses type guards here" */
          "onClick",
          "badgeIcon",
        ),
        ...styles.container,
      }}
    >
      <Box sx={styles.avatar}>
        {React.cloneElement<any>(children, {
          src,
          name: fallback ? name : undefined,
          size,
          online,
          onlineIndicator,
          ...pick(
            others,
            "badge",
            "verified",
            "clickable",
            /* @ts-ignore "This uses type guards here" */
            "onClick",
            "badgeIcon",
          ),
        })}
      </Box>

      <Box sx={styles.label}>
        <Text sx={styles.heading} color="neutrals.800" size="labels-xs-default">
          {name}
        </Text>
        <Text sx={styles.supportText} color="neutrals.600" size="labels-xxs-default">
          {supportText}
        </Text>
      </Box>
    </Box>
  );
}

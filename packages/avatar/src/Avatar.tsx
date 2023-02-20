import { Avatar, AvatarBadge, Box, Icon, useMultiStyleConfig } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import * as React from "react";
import UserIcon from "./icons/UserIcon";
import VerifiedIcon from "./icons/VerifiedIcon";
import { Badgeable, Clickable, ResponsiveSize } from "./types";
import { omit } from "./utils";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export type AvatarBaseProps = {
  src?: string;
  name?: string;
  size?: AvatarSize | ResponsiveSize<AvatarSize>;
  online?: boolean;
  onlineIndicator?: boolean;
  verified?: boolean;
  /* 🔒 internals  */
  __elevated?: boolean;
  __bordered?: boolean;
  __testId?: string;
};

export type AvatarProps = SystemStyleObject & AvatarBaseProps & Badgeable & Clickable;

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
export default function HdsAvatar(props: AvatarProps) {
  const { src, name, size = "md", onlineIndicator, online, __bordered, __elevated,__testId, ...p } = props;

  const styles = useMultiStyleConfig("Avatar", { size, variant: "hds" });

  return (
    <Avatar
      variant="hds"
      src={src}
      size={size}
      name={name}
      icon={<Icon as={UserIcon} color="#475467" />}
      data-online={!!online}
      data-fallback={!src}
      data-testid={__testId ?? "hds-avatar"}
      data-elevated={!!__elevated}
      data-bordered={!!__bordered}
      data-clickable={!!p.clickable}
      {...(p.clickable && {
        tabIndex: 0,
        onClick: p.onClick,
      })}
      sx={{
        ...omit(
          p,
          "badge",
          "clickable",
          /* @ts-ignore "Include types which utilizes type guard-ing." */
          "onClick",
          "badgeIcon",
        ),
      }}
    >
      {!!onlineIndicator /* <!-- Online Indicator --> */ && (
        <AvatarBadge role="presentation" aria-label={online ? "Online" : "Offline"} />
      )}

      {!!p.verified /* <!-- Verified --> */ && (
        <Icon as={VerifiedIcon} role="presentation" aria-label="Verified" sx={styles.verified} />
      )}

      {!!p.badge /* <!-- Badge --> */ && (
        <Box role="presentation" aria-label="Company Icon" sx={styles.customIcon}>
          <Icon as={p.badgeIcon} />
        </Box>
      )}
    </Avatar>
  );
}

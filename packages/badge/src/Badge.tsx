import { Avatar, chakra } from "@chakra-ui/react";
import * as React from "react";
import { BadgeAccent, BadgeSize } from "./types";
import useBadgeStyle from "./useBadgeStyle";

export interface BadgeProps {
  size?: BadgeSize;
  label: string;
  accent?: BadgeAccent;
  avatar?: JSX.Element | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  hasIndicator?: boolean;
}

export default React.forwardRef<HTMLDivElement, BadgeProps>(function Badge({
  label,
  avatar,
  leftIcon,
  rightIcon,
  hasIndicator,
  size = "md",
  accent = "primary",
  // capture non-jsx passed props
  // like aria-label, etc.
  ...props
}) {
  const styles = useBadgeStyle({
    size,
    accent,
    hasAvatar: !!avatar,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    hasIndicator,
  });

  return (
    <chakra.div role="status" {...props} sx={styles.container}>
      {/* <!-- Dot --> */}
      {!!hasIndicator && <chakra.div sx={styles.dot} />}

      {/* <!-- Avatar --> */}
      {!!avatar && typeof avatar === "string" && <Avatar src={avatar} sx={styles.icon} />}
      {!!avatar && typeof avatar !== "string" && <>{clone(avatar, styles.icon)}</>}

      {/* <!-- Left Icon --> */}
      {!!leftIcon && (
        <>
          {clone(leftIcon, {
            ...styles.icon,
            role: "button",
          })}
        </>
      )}

      {/* <!-- Label --> */}
      <chakra.p sx={styles.label}>{label}</chakra.p>

      {/* <!-- Right Icon --> */}
      {!!rightIcon && (
        <>
          {clone(rightIcon, {
            ...styles.icon,
            role: "button",
          })}
        </>
      )}
    </chakra.div>
  );
});

function clone(element: any, props: Record<string, any> = {}) {
  if (React.isValidElement(element)) return React.cloneElement(element, props);

  throw new Error("Couldn't clone element");
}

import { chakra } from "@chakra-ui/react";
import * as React from "react";
import { BadgeGroupSize } from "./types";
import useBadgeGroupStyle from "./useBadgeGroupStyle";
import { clone } from "./utils";

type BadgeGroupAccent = "primary" | "gray" | "error" | "warning" | "success";
type BadgeGroupVariant = "dark" | "light" | "default";

export interface BadgeGroupProps {
  size?: BadgeGroupSize;
  accent?: BadgeGroupAccent;
  variant?: BadgeGroupVariant;
  icon?: JSX.Element;
  title: string;
  description: string;
  descriptionFirst?: boolean;
  onClick?(): void;
}

export default function BadgeGroup({
  icon,
  title,
  description,
  descriptionFirst,
  onClick,
  size = "md",
  accent = "primary",
  variant = "default",
}: BadgeGroupProps) {
  const isReversed = React.useMemo(() => descriptionFirst, [descriptionFirst]);

  const styles = useBadgeGroupStyle({
    size,
    accent,
    variant,
    isReversed,
  });

  return (
    <chakra.div role="alert" sx={styles.container}>
      {!descriptionFirst && <chakra.div sx={styles.title}>{title}</chakra.div>}

      <chakra.div sx={styles.description}>
        {description}
        {!descriptionFirst && (
          <chakra.button role="button" onClick={onClick} sx={styles.button}>
            {clone(icon, styles.icon)}
          </chakra.button>
        )}
      </chakra.div>

      {descriptionFirst && (
        <chakra.div sx={styles.title}>
          {title}
          <chakra.button role="button" onClick={onClick} sx={styles.button}>
            {clone(icon, styles.icon)}
          </chakra.button>
        </chakra.div>
      )}
    </chakra.div>
  );
}

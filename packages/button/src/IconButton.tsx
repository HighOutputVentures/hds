import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/react";
import * as React from "react";
import { useStyles } from "./hooks";
import { Accent, Prettify, Size, Variant } from "./types";

/* prettier-ignore */
type Picked = Omit<
  ChakraIconButtonProps,
  | "sx" 
  | "size" 
  | "accent" 
  | "variant" 
  | "colorScheme"
  | "aria-label"
>;

type Base = {
  size?: Size;
  accent?: Accent;
  variant?: Variant;
  __testId?: string;
};

export type IconButtonProps = Prettify<Picked & Base>;

export default React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  props,
  ref,
) {
  const {
    size = "md",
    accent = "primary",
    variant = "solid",
    __testId = "hds.icon-button",
    ...others
  } = props;

  const styles = useStyles({
    size,
    accent,
    variant,
  });

  return (
    <ChakraIconButton
      {...others}
      ref={ref}
      aria-label=""
      sx={styles.iconButton}
      data-testid={__testId}
    />
  );
});

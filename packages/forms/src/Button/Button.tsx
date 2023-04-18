import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import * as React from "react";
import { useStyles } from "./hooks";
import { Accent, Prettify, Size, Variant } from "./types";

/* prettier-ignore */
type Picked = Omit<
  ChakraButtonProps,
  | "sx" 
  | "size" 
  | "accent" 
  | "variant" 
  | "colorScheme"
>;

type Base = {
  size?: Size;
  accent?: Accent;
  variant?: Variant;
  /**
   *
   * Only applicable when using `ghost` variant.
   * If `true`, button will be forced to use the accent in default state.
   * Otherwise, button's default state color will be neutral
   *
   */
  forceAccent?: boolean;
  __testId?: string;
};

export type ButtonProps = Prettify<Picked & Base>;

export default React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const {
    size = "md",
    accent = "primary",
    variant = "solid",
    children = null,
    forceAccent = false,
    __testId = "hds.button",
    ...others
  } = props;

  const styles = useStyles({
    size,
    accent,
    variant,
    forceAccent,
  });

  return (
    <ChakraButton
      ref={ref}
      {...others}
      sx={styles.button}
      data-testid={__testId}
    >
      {props.children}
    </ChakraButton>
  );
});

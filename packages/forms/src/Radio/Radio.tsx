import {
  Box,
  Radio as ChakraRadio,
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
  RadioProps as ChakraRadioProps,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { Size, Variant } from "../types";
import { useRadioStyleConfig } from "./hooks";

type BaseProps = Omit<
  ChakraRadioProps,
  "sx" | "size" | "variant" | "colorScheme" | "styleConfig" | "inputProps"
>;

export type RadioProps = BaseProps & {
  size?: Size;
  hint?: string;
  label?: string;
  variant?: Variant;
  __testId?: string;
};

export default React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref,
) {
  const {
    size = "md",
    hint,
    label,
    variant = "outline",
    __testId = "hds.radio.input",
    ...others
  } = props;

  const styleConfig = useRadioStyleConfig({
    size,
    variant,
  });

  const shouldShowLabelSect = !!label || !!hint;

  return (
    <ChakraRadio
      ref={ref}
      styleConfig={styleConfig}
      data-testid={__testId}
      {...others}
    >
      {shouldShowLabelSect && (
        <Box>
          <Text
            sx={{
              color: "neutrals.900",
              margin: "0px",
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "0.02em",
            }}
            data-testid="hds.radio.label"
          >
            {label}
          </Text>
          <Text
            sx={{
              color: "neutrals.600",
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "0.02em",

              ...(size === "sm" && { marginTop: "0px" }),
              ...(size === "md" && { marginTop: "2px" }),
            }}
            data-testid="hds.radio.hint"
          >
            {hint}
          </Text>
        </Box>
      )}
    </ChakraRadio>
  );
});

export const RadioGroup = ChakraRadioGroup;

export type RadioGroupProps = Omit<
  ChakraRadioGroupProps,
  "size" | "variant" | "colorScheme"
> & {
  size?: Size;
  variant?: Variant;
};

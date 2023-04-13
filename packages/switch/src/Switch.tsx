import { Box, FormControl, FormHelperText, FormLabel, Switch } from "@chakra-ui/react";
import * as React from "react";

type Size = "sm" | "md";

export type SwitchProps = {
  size?: Size;
  isChecked?: boolean;
  isDisabled?: boolean;
  onCheck?(value: boolean): void;
  hint?: string;
  label?: string;
  colorScheme?: "dark" | "light";
};

export default React.forwardRef<HTMLInputElement, SwitchProps>(function HdsSwitch(
  props,
  ref,
) {
  const {
    size = "md",
    isChecked,
    isDisabled,
    onCheck,
    hint,
    label,
    colorScheme = "light",
    ...others
  } = props;

  const uniqid = React.useId();

  return (
    <FormControl
      variant="unstyled"
      sx={{
        ...others,
        display: "flex",
        ...(size === "sm" && { gap: "8px" }),
        ...(size === "md" && { gap: "12px" }),
      }}
      data-testid="hds.switch.form-group"
    >
      <Switch
        ref={ref}
        id={uniqid}
        size={size}
        variant="hdsSwitch"
        isChecked={isChecked}
        isDisabled={isDisabled}
        colorScheme={colorScheme}
        onChange={(e) => {
          onCheck?.(e.target.checked);
        }}
        data-testid="hds.switch"
      />

      <Box>
        {!!label && (
          <FormLabel
            htmlFor={uniqid}
            sx={{
              color: "#344054",
              fontWeight: "medium",

              ...(size === "sm" && {
                margin: "0px",
                fontSize: "14px",
                lineHeight: "20px",
              }),
              ...(size === "md" && {
                margin: "0px",
                fontSize: "16px",
                lineHeight: "24px",
              }),
            }}
            data-testid="hds.switch.label"
          >
            {label}
          </FormLabel>
        )}

        {!!hint && (
          <FormHelperText
            sx={{
              color: "#667085",
              ...(size === "sm" && {
                fontSize: "14px",
                lineHeight: "20px",
                marginTop: "unset",
              }),
              ...(size === "md" && {
                fontSize: "16px",
                lineHeight: "24px",
                marginTop: "2px",
              }),
            }}
            data-testid="hds.switch.hint"
          >
            {hint}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  );
});

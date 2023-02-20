import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Switch,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

type SwitchSize = "sm" | "md";

type ResponsiveSize<T> = Record<"base" | "sm" | "md" | "lg" | "xl", T>;

export type SwitchBaseProps = {
  size?: SwitchSize | ResponsiveSize<SwitchSize>;
  disabled?: boolean;
  checked?: boolean;
  onCheck?(value: boolean): void;
  label?: string;
  helperText?: string;
  colorScheme?: "dark" | "light";
};

export type SwitchProps = SwitchBaseProps & Omit<SystemStyleObject, "colorScheme">;

export default React.forwardRef<HTMLInputElement, SwitchProps>(function HdsSwitch(props, ref) {
  const { size, checked, onCheck, label, helperText, disabled, colorScheme, ...others } =
    Object.assign(defaultProps, props);

  const styles = useMultiStyleConfig("Switch", { variant: "hds", size, colorScheme });
  const uniqid = React.useId();

  return (
    <FormControl variant="unstyled" sx={{ ...others, ...styles.control }} data-testid="hds.switch.form.control">
      <Switch
        variant="hds"
        ref={ref}
        id={uniqid}
        size={size}
        data-testid="hds.switch"
        isChecked={checked}
        colorScheme={colorScheme}
        isDisabled={disabled}
        onChange={(e) => {
          onCheck(e.target.checked);
        }}
      />

      <Box>
        {label && (
          <FormLabel htmlFor={uniqid} sx={styles.label} data-testid="hds.switch.label">
            {label}
          </FormLabel>
        )}
        {helperText && <FormHelperText sx={styles.helperText} data-testid="hds.switch.helper.text">{helperText}</FormHelperText>}
      </Box>
    </FormControl>
  );
});

const defaultProps = {
  size: "md",
  checked: false,
  onCheck() {},
  colorScheme: "light",
};

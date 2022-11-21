import {
  FormControl,
  FormHelperText,
  FormLabel,
  Switch,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

type SwitchValue = "on" | "off";

type SwitchSize = "sm" | "md";

type ResponsiveSize<T> = Record<"base" | "sm" | "md" | "lg" | "xl", T>;

export type SwitchBaseProps = {
  size?: SwitchSize | ResponsiveSize<SwitchSize>;
  value?: SwitchValue;
  onToggle?(value: SwitchValue): void;
  label?: string;
  helperText?: string;
};

export type SwitchProps = SwitchBaseProps & SystemStyleObject;

export default React.forwardRef<HTMLInputElement, SwitchProps>(function HdsSwitch(props, ref) {
  const { size, value, onToggle, label, helperText, ...others } = Object.assign(
    defaultProps,
    props,
  );

  const styles = useMultiStyleConfig("Switch", { size, variant: "hds" });
  const uniqid = React.useId();

  return (
    <FormControl sx={{ ...others, ...styles.control }}>
      <Switch
        ref={ref}
        id={uniqid}
        isChecked={value === "on"}
        onChange={(e) => {
          onToggle(e.target.checked ? "on" : "off");
        }}
      />

      {label && (
        <FormLabel htmlFor={uniqid} sx={styles.label}>
          {label}
        </FormLabel>
      )}
      {helperText && <FormHelperText sx={styles.helperText}>{helperText}</FormHelperText>}
    </FormControl>
  );
});

const defaultProps = {
  size: "md",
  value: "off",
  onToggle() {},
};

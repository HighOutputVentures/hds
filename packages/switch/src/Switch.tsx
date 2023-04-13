import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MultiStyleConfig,
  Switch as ChakraSwitch,
} from "@chakra-ui/react";
import * as React from "react";

type Size = "sm" | "md";

type ColorScheme = "dark" | "light";

export type SwitchProps = {
  size?: Size;
  isChecked?: boolean;
  isDisabled?: boolean;
  onCheck?(value: boolean): void;
  hint?: string;
  label?: string;
  colorScheme?: ColorScheme;
};

export default React.forwardRef<HTMLInputElement, SwitchProps>(function Switch(
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
  } = props;

  const uniqid = React.useId();
  const styleConfig = useSwitchStyleConfig({
    size,
    colorScheme,
  });

  return (
    <FormControl
      variant="unstyled"
      sx={{
        display: "flex",
        ...(size === "sm" && { gap: "8px" }),
        ...(size === "md" && { gap: "12px" }),
      }}
      data-testid="hds.switch.form-group"
    >
      <ChakraSwitch
        ref={ref}
        id={uniqid}
        size={size}
        isChecked={isChecked}
        isDisabled={isDisabled}
        onChange={(e) => {
          onCheck?.(e.target.checked);
        }}
        styleConfig={styleConfig}
        data-testid="hds.switch"
      />

      <Box>
        {!!label && (
          <FormLabel
            htmlFor={uniqid}
            sx={{
              color: "Gray.700",
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
              color: "Gray.500",
              ...(size === "sm" && {
                fontSize: "14px",
                lineHeight: "20px",
                marginTop: "0px",
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

type UseSwitchStyleConfigArg = {
  size: Size;
  colorScheme: ColorScheme;
};

function useSwitchStyleConfig(arg: UseSwitchStyleConfigArg) {
  const styleConfig = React.useMemo<MultiStyleConfig>(
    function getStyleConfig() {
      return {
        parts: ["container", "thumb", "track"],
        sizes: {},
        variants: {},
        defaultProps: {},
        baseStyle: {
          container: {},
          track: {
            padding: "2px",
            rounded: "full",

            ...(arg.size === "sm" && { width: "32px", height: "16px" }),
            ...(arg.size === "md" && { width: "40px", height: "20px" }),

            ...(arg.colorScheme === "light" && {
              bgColor: "neutrals.200",
              _hover: {
                bgColor: "neutrals.100",
              },
              _focus: {
                bgColor: "Gray.50",
                boxShadow: "0px 0px 0px 4px #F4EBFF",
              },
              _checked: {
                bgColor: "brand.primary.700",
                _hover: {
                  bgColor: "brand.primary.900",
                },
              },
              "&[data-disabled]": {
                bgColor: "#F0F0F0!important",
                opacity: 1,
              },
            }),

            ...(arg.colorScheme === "dark" && {
              bgColor: "brand.primary.50",
              _hover: {
                bgColor: "brand.primary.100",
              },
              _focus: {
                boxShadow: "0px 0px 0px 4px #F4EBFF",
              },
              _checked: {
                bgColor: "brand.primary.200",
                _hover: {
                  bgColor: "brand.primary.300",
                },
              },
              "&[data-disabled]": {
                bgColor: "#F0F0F0!important",
                opacity: 1,
              },
            }),
            transition:
              "background-color 300ms ease-in-out, box-shadow 300ms ease-in-out",
          },
          thumb: {
            ...(arg.size === "sm" && {
              width: "16px",
              height: "16px",
            }),

            ...(arg.size === "md" && {
              width: "20px",
              height: "20px",
            }),

            rounded: "full",
            padding: "0px",
            bgColor: "white!important",
            transition: "all 300ms ease-in-out",
            boxShadow:
              "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
            _checked: {
              transform: "translateX(100%)",
            },
          },
        },
      };
    },
    [arg],
  );

  return styleConfig;
}

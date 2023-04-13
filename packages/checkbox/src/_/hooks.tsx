import { MultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";
import { Size, Variant } from "./types";

type UseCheckboxStyleConfigArg = {
  size: Size;
  variant: Variant;
};

export function useCheckboxStyleConfig(arg: UseCheckboxStyleConfigArg) {
  const styleConfig = React.useMemo<MultiStyleConfig>(
    function getStyleConfig() {
      return {
        parts: ["icon", "container", "control", "label"],
        baseStyle: {
          container: {
            display: "flex",
            alignItems: "start",

            ...(arg.size === "sm" && { gap: "8px" }),
            ...(arg.size === "md" && { gap: "12px" }),
          },
          control: {
            color: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 0,
            flexShrink: 0,
            height: "full",
            width: "full",
            border: "1px",
            bgColor: "white",
            borderColor: "neutrals.300",
            transition: "all 300ms ease-in-out",
            _hover: {
              bgColor: "brand.primary.500",
              borderColor: "brand.primary.700",
            },
            _checked: {
              color: "brand.primary.700",
              bgColor: "brand.primary.500",
              borderColor: "brand.primary.700",
            },
            _focus: {},
            _active: {
              boxShadow: "0px 0px 0px 4px #F4EBFF",
            },
            _indeterminate: {
              color: "brand.primary.700",
              bgColor: "brand.primary.500",
              borderColor: "brand.primary.700",
            },
            _disabled: {
              color: "transparent",
              bgColor: "neutrals.100",
              borderColor: "neutrals.200",
              cursor: "not-allowed",
              _active: {
                boxShadow: "none",
              },
              _hover: {},
              _indeterminate: {},
            },

            ...(arg.size === "sm" && {
              width: "16px",
              height: "16px",
              rounded: "4px",
            }),

            ...(arg.size === "md" && {
              width: "20px",
              height: "20px",
              rounded: "6px",
            }),

            ...(arg.variant === "solid" && {
              _checked: {
                color: "white",
                bgColor: "brand.primary.700",
                borderColor: "brand.primary.700",
                _hover: {
                  bgColor: "brand.primary.900",
                  borderColor: "brand.primary.900",
                },
                _disabled: {
                  color: "white",
                  bgColor: "neutrals.300",
                  borderColor: "neutrals.300",
                },
              },

              /* Styles are same as checked */
              _indeterminate: {
                color: "white",
                bgColor: "brand.primary.700",
                borderColor: "brand.primary.700",
                _hover: {
                  bgColor: "brand.primary.900",
                  borderColor: "brand.primary.900",
                },
                _disabled: {
                  color: "white",
                  bgColor: "neutrals.300",
                  borderColor: "neutrals.300",
                },
              },
            }),
          },
          label: {
            margin: "0",
            _disabled: {
              cursor: "not-allowed",
            },
          },
          icon: {
            ...(arg.size === "sm" && {
              width: "10px",
              height: "10px",
            }),

            ...(arg.size === "md" && {
              width: "14px",
              height: "14px",
            }),
          },
        },
        sizes: {},
        variants: {},
        defaultProps: {},
      };
    },
    [arg],
  );

  return styleConfig;
}

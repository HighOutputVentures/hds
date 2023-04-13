import { MultiStyleConfig, SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";

type Size = "sm" | "md" | "lg";

type UseStylesArg = {
  size: Size;
};

type OnlineIndicatorArg = {
  isOnline?: boolean;
};

type UseStylesReturn = {
  tag(): SystemStyleObject;
  icon(): SystemStyleObject;
  label(): SystemStyleObject;
  badge(): SystemStyleObject;
  avatar(): SystemStyleObject;
  closeButton(): SystemStyleObject;
  onlineIndicator(arg?: OnlineIndicatorArg): SystemStyleObject;
};

export function useStyles(arg: UseStylesArg) {
  const styles = React.useMemo<UseStylesReturn>(
    () => ({
      tag() {
        return {
          bgColor: "white",
          border: "1px",
          borderColor: "neutrals.200",
          paddingX: "0px",
          rounded: "6px",
          ...(arg.size === "sm" && { paddingY: "3px" }),
          ...(arg.size === "md" && { paddingY: "3px" }),
          ...(arg.size === "lg" && { paddingY: "4px" }),
        };
      },
      label() {
        return {
          fontWeight: "medium",
          color: "#525252",
          margin: "0px",
          ...(arg.size === "sm" && { fontSize: "12px", lineHeight: "18px" }),
          ...(arg.size === "md" && { fontSize: "14px", lineHeight: "20px" }),
          ...(arg.size === "lg" && { fontSize: "14px", lineHeight: "20px" }),
        };
      },
      icon() {
        return {
          width: "16px",
          height: "16px",
          margin: "0px",
          ...(arg.size === "sm" && {}),
          ...(arg.size === "md" && {}),
          ...(arg.size === "lg" && {}),
        };
      },
      badge() {
        return {
          color: "#2E2E2E",
          margin: "0px",
          ...(arg.size === "sm" && { fontSize: "12px", lineHeight: "18px" }),
          ...(arg.size === "md" && { fontSize: "12px", lineHeight: "18px" }),
          ...(arg.size === "lg" && { fontSize: "14px", lineHeight: "20px" }),
        };
      },
      avatar() {
        return {
          width: "16px",
          height: "16px",
          margin: "0px",
          ...(arg.size === "sm" && {}),
          ...(arg.size === "md" && {}),
          ...(arg.size === "lg" && {}),
        };
      },
      closeButton() {
        return {
          minWidth: "unset",
          minHeight: "unset",
          color: "neutrals.200",
          rounded: "3px",
          margin: "0px",
          _hover: {
            color: "neutrals.700",
          },
          _active: {
            boxShadow: "0px 0px 0px 4px #F2F4F7",
          },
          ...(arg.size === "sm" && { width: "10px", height: "10px" }),
          ...(arg.size === "md" && { width: "12px", height: "12px" }),
          ...(arg.size === "lg" && { width: "14px", height: "14px" }),
        };
      },
      onlineIndicator() {
        return {
          width: "6px",
          height: "6px",
          bgColor: "#00C408",
          rounded: "full",
          margin: "0px",
          ...(arg.size === "sm" && {}),
          ...(arg.size === "md" && {}),
          ...(arg.size === "lg" && {}),
        };
      },
    }),
    [arg],
  );

  return styles;
}

type UseCheckboxStyleConfigArg = {
  size: Size;
};

export function useCheckboxStyleConfig(arg: UseCheckboxStyleConfigArg) {
  const styleConfig = React.useMemo<MultiStyleConfig>(
    function getStyleConfig() {
      return {
        parts: ["icon", "container", "control", "label"],
        baseStyle: {
          container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            border: "1px",
            rounded: "4px",
            bgColor: "white",
            borderColor: "neutrals.200",
            transition: "all 300ms ease-in-out",
            _hover: {
              bgColor: "brand.primary.500",
              borderColor: "brand.primary.700",
            },
            _checked: {
              bgColor: "brand.primary.700",
              borderColor: "brand.primary.700",
              _hover: {
                bgColor: "brand.primary.900",
                borderColor: "brand.primary.900",
              },
            },
            _focus: {},
            _active: {
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF",
            },

            ...(arg.size === "sm" && { width: "14px", height: "14px" }),
            ...(arg.size === "md" && { width: "16px", height: "16px" }),
            ...(arg.size === "lg" && { width: "18px", height: "18px" }),
          },
          label: {},
          control: {
            color: "transparent",
            _checked: {
              color: "white",
            },
          },
          icon: {
            ...(arg.size === "sm" && { w: "10px", h: "10px" }),
            ...(arg.size === "md" && { w: "12px", h: "12px" }),
            ...(arg.size === "lg" && { w: "14px", h: "14px" }),
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

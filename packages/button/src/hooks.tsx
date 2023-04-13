import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";
import { Accent, Size, Variant } from "./types";

type UseStylesConfig = {
  size?: Size;
  accent?: Accent;
  variant?: Variant;
};

type UseStylesReturn = {
  button: SystemStyleObject;
  iconButton: SystemStyleObject;
};

export function useStyles({ size, accent, variant }: UseStylesConfig): UseStylesReturn {
  const button = React.useMemo(
    () => ({
      rounded: "4px",
      fontFamily: "inherit",
      fontWeight: 500,
      transition: "all 300ms ease-in-out",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      _active: {},

      /*
       *  SIZES
       */

      ...(size === "sm" && {
        height: "36px",
        paddingY: "8px",
        paddingX: "14px",
        fontSize: "12px",
        lineHeight: "12px",
        letterSpacing: "0.02em",
      }),

      ...(size === "md" && {
        height: "40px",
        paddingY: "10px",
        paddingX: "16px",
        fontSize: "14px",
        lineHeight: "14px",
        letterSpacing: "0.02em",
      }),

      ...(size === "lg" && {
        height: "44px",
        paddingY: "10px",
        paddingX: "18px",
        fontSize: "18px",
        lineHeight: "24px",
      }),

      ...(size === "xl" && {
        height: "48px",
        paddingY: "12px",
        paddingX: "20px",
        fontSize: "20px",
        lineHeight: "20px",
      }),

      ...(size === "2xl" && {
        height: "56px",
        paddingY: "16px",
        paddingX: "28px",
        fontSize: "18px",
        lineHeight: "24px",
      }),

      /*
       *  SOLID
       */

      ...(variant === "solid" && {
        color: "neutrals.100",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",

        ...(accent === "primary" && {
          bgColor: "brand.primary.700",
          _hover: {
            bgColor: "brand.primary.900",
          },
          _active: {
            bgColor: "brand.primary.900",
          },
          _focus: {
            outline: "none",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF",
          },
          _disabled: {
            cursor: "not-allowed",
            bgColor: "brand.primary.500",
            _hover: {
              bgColor: "brand.primary.500",
            },
          },
        }),

        ...(accent === "error" && {
          bgColor: "interface.error.700",
          _hover: {
            bgColor: "interface.error.900",
          },
          _active: {
            bgColor: "interface.error.900",
          },
          _focus: {
            outline: "none",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2",
          },
          _disabled: {
            cursor: "not-allowed",
            bgColor: "interface.error.500",
            _hover: {
              bgColor: "interface.error.500",
            },
          },
        }),
      }),

      /*
       *  OUTLINE
       */

      ...(variant === "outline" && {
        bgColor: "white",

        ...(accent === "primary" && {
          color: "brand.primary.700",
          border: "1px",
          borderColor: "brand.primary.700",
          _hover: {
            color: "brand.primary.900",
            bgColor: "brand.primary.500",
            borderColor: "brand.primary.600",
          },
          _active: {
            color: "brand.primary.900",
            bgColor: "brand.primary.500",
            borderColor: "brand.primary.600",
          },
          _focus: {
            color: "brand.primary.900",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF",
          },
          _disabled: {
            cursor: "not-allowed",
            color: "brand.primary.600",
            borderColor: "brand.primary.600",
            _hover: {
              color: "brand.primary.600",
              bgColor: "white",
              borderColor: "brand.primary.600",
            },
          },
        }),

        ...(accent === "error" && {
          color: "interface.error.700",
          border: "1px",
          borderColor: "interface.error.700",
          _hover: {
            color: "interface.error.900",
            bgColor: "interface.error.500",
            borderColor: "interface.error.600",
          },
          _active: {
            color: "interface.error.900",
            bgColor: "interface.error.500",
            borderColor: "interface.error.600",
          },
          _focus: {
            color: "interface.error.900",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2",
          },
          _disabled: {
            cursor: "not-allowed",
            color: "interface.error.600",
            borderColor: "interface.error.600",
            _hover: {
              color: "interface.error.600",
              bgColor: "white",
              borderColor: "interface.error.600",
            },
          },
        }),

        ...(accent === "gray" && {
          color: "neutrals.700",
          border: "1px",
          borderColor: "neutrals.300",
          _hover: {
            bgColor: "neutrals.100",
          },
          _active: {
            bgColor: "neutrals.100",
          },
          _focus: {
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
          },
          _disabled: {
            color: "neutrals.200",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.200",
              bgColor: "white",
            },
          },
        }),
      }),

      /*
       *  GHOST
       */

      ...(variant === "ghost" && {
        bgColor: "white",
        boxShadow: "none",

        ...(accent === "primary" && {
          color: "brand.primary.700",
          _hover: {
            color: "brand.primary.900",
            bgColor: "brand.primary.500",
          },
          _active: {
            color: "brand.primary.900",
            bgColor: "brand.primary.500",
          },
          _focus: {
            color: "brand.primary.900",
            boxShadow: "none",
          },
          _disabled: {
            color: "neutrals.300",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.300",
              bgColor: "white",
            },
          },
        }),

        ...(accent === "error" && {
          color: "interface.error.700",
          _hover: {
            color: "interface.error.900",
            bgColor: "interface.error.500",
          },
          _active: {
            color: "interface.error.900",
            bgColor: "interface.error.500",
          },
          _focus: {
            color: "interface.error.900",
            boxShadow: "none",
          },
          _disabled: {
            color: "interface.error.500",
            cursor: "not-allowed",
            _hover: {
              color: "interface.error.500",
              bgColor: "white",
            },
          },
        }),

        ...(accent === "gray" && {
          color: "neutrals.700",
          _hover: {
            color: "neutrals.900",
            bgColor: "neutrals.200",
          },
          _active: {
            color: "neutrals.900",
            bgColor: "neutrals.200",
          },
          _focus: {
            color: "neutrals.900",
            boxShadow: "none",
          },
          _disabled: {
            color: "neutrals.300",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.300",
              bgColor: "white",
            },
          },
        }),
      }),

      /*
       *  SUBTLE
       */

      ...(variant === "subtle" && {
        ...(accent === "primary" && {
          color: "brand.primary.700",
          bgColor: "brand.primary.500",
          _hover: {
            color: "brand.primary.900",
            bgColor: "brand.primary.600",
          },
          _active: {
            color: "brand.primary.900",
            bgColor: "brand.primary.600",
          },
          _focus: {
            color: "brand.primary.900",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF",
          },
          _disabled: {
            color: "neutrals.100",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.100",
              bgColor: "brand.primary.500",
            },
          },
        }),

        ...(accent === "error" && {
          color: "interface.error.700",
          bgColor: "interface.error.500",
          _hover: {
            color: "interface.error.900",
            bgColor: "rgba(220, 24, 12, 0.15)",
          },
          _active: {
            color: "interface.error.900",
            bgColor: "rgba(220, 24, 12, 0.15)",
          },
          _focus: {
            color: "interface.error.900",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2",
          },
          _disabled: {
            color: "rgba(220, 24, 12, 0.3)",
            bgColor: "rgba(252, 234, 232, 0.5)",
            cursor: "not-allowed",
            _hover: {
              color: "rgba(220, 24, 12, 0.3)",
              bgColor: "rgba(252, 234, 232, 0.5)",
            },
          },
        }),

        ...(accent === "gray" && {
          color: "interface.error.700",
          bgColor: "interface.error.500",
          _hover: {
            color: "interface.error.900",
            bgColor: "rgba(220, 24, 12, 0.15)",
          },
          _active: {
            color: "interface.error.900",
            bgColor: "rgba(220, 24, 12, 0.15)",
          },
          _focus: {
            color: "interface.error.900",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2",
          },
          _disabled: {
            color: "rgba(220, 24, 12, 0.3)",
            bgColor: "rgba(252, 234, 232, 0.5)",
            cursor: "not-allowed",
            _hover: {
              color: "rgba(220, 24, 12, 0.3)",
              bgColor: "rgba(252, 234, 232, 0.5)",
            },
          },
        }),
      }),

      /*
       *  LINK
       */

      ...(variant === "link" && {
        width: "fit-content",
        height: "fit-content",
        padding: "0px",
        bgColor: "unset",
        boxShadow: "none",

        ...(accent === "primary" && {
          color: "brand.primary.700",
          _hover: {
            color: "brand.primary.900",
          },
          _active: {
            color: "brand.primary.900",
          },
          _disabled: {
            color: "neutrals.300",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.300",
            },
          },
        }),

        ...(accent === "error" && {
          color: "interface.error.700",
          _hover: {
            color: "interface.error.900",
          },
          _active: {
            color: "interface.error.900",
          },
          _disabled: {
            color: "interface.error.500",
            cursor: "not-allowed",
            _hover: {
              color: "interface.error.500",
            },
          },
        }),

        ...(accent === "gray" && {
          color: "neutrals.600",
          _hover: {
            color: "neutrals.700",
          },
          _active: {
            color: "neutrals.700",
          },
          _disabled: {
            color: "neutrals.300",
            cursor: "not-allowed",
            _hover: {
              color: "neutrals.300",
            },
          },
        }),
      }),

      ...(variant === "unstyled" && {
        width: "fit-content",
        height: "fit-content",
        padding: "0px",
        bgColor: "unset",
        boxShadow: "none",
        color: "neutrals.700",
        _hover: {
          color: "neutrals.900",
        },
        _active: {
          color: "neutrals.900",
        },
        _disabled: {
          color: "neutrals.500",
          cursor: "not-allowed",
          _hover: {
            color: "neutrals.500",
          },
        },
      }),
    }),
    [
      //
      size,
      accent,
      variant,
    ],
  );

  /**
   *
   * Only add width to button
   * If variant is not "link" or "unstyled"
   *
   */
  const shouldAdjustIconButtonWidth = variant !== "link" && variant !== "unstyled";

  const iconButton = React.useMemo(
    () => ({
      ...button,

      ...(!shouldAdjustIconButtonWidth && {
        minWidth: "unset",
        paddingY: "unset",
        paddingX: "unset",
      }),

      ...(shouldAdjustIconButtonWidth && {
        ...(size === "sm" && { width: "36px" }),
        ...(size === "md" && { width: "40px" }),
        ...(size === "lg" && { width: "44px" }),
        ...(size === "xl" && { width: "48px" }),
        ...(size === "2xl" && { width: "56px" }),
      }),
    }),
    [size, accent, variant],
  );

  const styles = {
    button,
    iconButton,
  };

  return styles;
}

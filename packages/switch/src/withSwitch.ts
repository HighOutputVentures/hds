import { MultiStyleConfig } from "@chakra-ui/react";

export default function withSwitch() {
  const Switch: MultiStyleConfig = {
    parts: ["container", "thumb", "track"],
    variants: {
      hdsSwitch({ colorScheme }) {
        return {
          container: {},
          track: {
            padding: "2px",
            ...(colorScheme === "light" && {
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
            ...(colorScheme === "dark" && {
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
            padding: "0px",
            boxShadow:
              "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
            _checked: {
              transform: "translateX(100%)",
            },
          },
        };
      },
    },
    sizes: {
      sm: {
        track: {
          width: "32px",
          height: "16px",
        },
        thumb: {
          width: "16px",
          height: "16px",
        },
      },
      md: {
        track: {
          width: "40px",
          height: "20px",
        },
        thumb: {
          width: "20px",
          height: "20px",
        },
      },
    },
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { Switch } };
}

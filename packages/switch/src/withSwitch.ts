import { MultiStyleConfig } from "@chakra-ui/react";

export default function withSwitch() {
  const Switch: MultiStyleConfig = {
    parts: ["container", "thumb", "track", "control", "label", "helperText"],
    variants: {
      hds({ colorScheme }) {
        return {
          container: {},
          track: {
            padding: "2px",
            ...(colorScheme === "light" && {
              bgColor: "#F9F5FF",
              _hover: {
                bgColor: "#F4EBFF",
              },
              _focus: {
                boxShadow: "0px 0px 0px 4px #F4EBFF",
              },
              _checked: {
                bgColor: "#E9D7FE",
                _hover: {
                  bgColor: "#D6BBFB",
                },
              },
              "&[data-disabled]": {
                bgColor: "#F0F0F0!important",
                opacity: 1,
              },
            }),
            ...(colorScheme === "dark" && {
              bgColor: "#F0F0F0",
              _hover: {
                bgColor: "#FCFCFC",
              },
              _focus: {
                boxShadow: "0px 0px 0px 4px #F4EBFF",
              },
              _checked: {
                bgColor: "#8A68EF",
                _hover: {
                  bgColor: "#4A3880",
                },
              },
              "&[data-disabled]": {
                bgColor: "#F0F0F0!important",
                opacity: 1,
              },
            }),
            transition: "background-color 300ms ease-in-out, box-shadow 300ms ease-in-out",
          },
          thumb: {
            padding: "0px",
            boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
            _checked: {
              transform: "translateX(100%)",
            },
          },
          control: {
            display: "flex",
          },
          label: {
            fontWeight: "medium",
            color: "#344054",
          },
          helperText: {
            color: "#667085",
          },
        };
      },
    },
    sizes: {
      sm: {
        track: {
          width: "32px" /* exclude padding */,
          height: "16px" /* exclude padding */,
        },
        thumb: {
          width: "16px",
          height: "16px",
        },
        control: {
          gap: "8px",
        },
        label: {
          margin: "0px",
          fontSize: "14px",
          lineHeight: "20px",
        },
        helperText: {
          fontSize: "14px",
          lineHeight: "20px",
          marginTop: "unset",
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
        control: {
          gap: "12px",
        },
        label: {
          margin: "0px",
          fontSize: "16px",
          lineHeight: "24px",
        },
        helperText: {
          fontSize: "16px",
          lineHeight: "24px",
          marginTop: "2px",
        },
      },
    },
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { Switch } };
}

import { MultiStyleConfig } from "@chakra-ui/react";

export default function withSlider() {
  const Slider: MultiStyleConfig = {
    parts: ["container", "track", "thumb", "filledTrack", "floatingLabel", "staticLabel"],
    variants: {
      hds() {
        return {
          container: {},
          track: {
            rounded: "4px",
            height: "8px",
            bgColor: "#F0F0F0",
          },
          thumb: {
            position: "relative",
            width: "24px",
            height: "24px",
            border: "1.5px solid",
            borderColor: "#8A68EF",
            bgColor: "#FFFFFF",
            outline: "none",
            boxShadow: [
              "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
              "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            ].join(),
            _focusVisible: {
              boxShadow: "none",
            },
            /* this maintains position and discard scaling */
            _active: {
              transform: "translateY(-50%)",
            },
          },
          filledTrack: {
            bgColor: "#8A68EF",
          },
          floatingLabel: {
            bottom: "0%",
            marginBottom: "calc(24px + 12px)",
            position: "absolute",
            padding: "8px 12px",
            width: "unset",
            color: "#525252",
            bgColor: "#FFFFFF",
            fontSize: "14px",
            lineHeight: "14px",
            letterSpacing: "0.02em",
            border: "1px solid #F0F0F0",
            rounded: "8px",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
              "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
            ].join(),
          },
          staticLabel: {
            transform: "translateY(100%)",
            marginTop: "19px",
            fontSize: "18px",
            lineHeight: "18px",
            color: "#0F0F0F",
          },
        };
      },
    },
    sizes: {},
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { Slider } };
}

import { MultiStyleConfig } from "@chakra-ui/react";

export default function withSlider() {
  const Slider: MultiStyleConfig = {
    parts: ["container", "track", "thumb", "filledTrack"],
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
            width: "24px",
            height: "24px",
            border: "1.5px solid",
            borderColor: "#8A68EF",
            bgColor: "#FFFFFF",
            boxShadow: [
              "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
              "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            ].join(),
          },
          filledTrack: {
            bgColor: "#8A68EF",
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

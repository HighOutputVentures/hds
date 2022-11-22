import { MultiStyleConfig } from "@chakra-ui/react";

export default function withRangeSlider() {
  const RangeSlider: MultiStyleConfig = {
    parts: [],
    sizes: {},
    variants: {},
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { RangeSlider } };
}

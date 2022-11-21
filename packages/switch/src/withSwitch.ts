import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  ...switchAnatomy.keys,
  "label",
  "control",
  "helperText",
]);

export default function withSwitch() {
  const Switch = defineMultiStyleConfig({
    variants: {
      hds: definePartsStyle({
        container: {},
        thumb: {},
        track: {},
        control: {},
        label: {},
        helperText: {},
      }),
    },
  });

  return { components: { Switch } };
}

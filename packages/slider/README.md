### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-range-slider
```

### Usage

```typescript
import { Slider, RangeSlider, withSlider } from "@highoutput/hds-slider";
import { ThemeProvider, extendTheme } from "@highoutput/hds";

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withSlider())}>
      <Slider
        defaultValue={25}
        onChange={function noop(value) {
          console.log(value);
        }}
      />

      <RangeSlider
        mt={4}
        default={[25, 50]}
        onChange={function noop([value_0, value_1]) {
          console.log(value_0);
          console.log(value_1);
        }}
      />
    </ThemeProvider>
  );
}
```

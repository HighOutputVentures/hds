### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-range-slider
```

### Usage

```typescript
import { RangeSlider, withRangeSlider } from "@highoutput/hds-range-slider";
import { ThemeProvider, extendTheme } from "@highoutput/hds";

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withRangeSlider())}>
      <RangeSlider size="md" value={[25, 50]} onChange={function noop() {}} />
    </ThemeProvider>
  );
}
```

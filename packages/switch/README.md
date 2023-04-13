### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-switch
```

### Usage

```tsx
import { Switch } from "@highoutput/hds-switch";
import { ThemeProvider } from "@highoutput/hds";

export default function Example() {
  return (
    <ThemeProvider>
      <Switch label="Hello" hint="world" onCheck={function noop(isChecked) {}} />
    </ThemeProvider>
  );
}
```

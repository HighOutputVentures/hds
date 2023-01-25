### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-toast
```

### Usage

```tsx
import { useToast } from "@highoutput/hds-toast";
import { ThemeProvider, extendTheme } from "@highoutput/hds";

export default function Example() {
  const toast = useToast();

  return (
    <ThemeProvider>
      <button
        onClick={function () {
          toast.success("Hello world!");
        }}
      >
        Click me
      </button>
    </ThemeProvider>
  );
}
```

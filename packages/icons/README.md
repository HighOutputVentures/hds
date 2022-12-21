### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-icons
```

### Usage

```tsx
import { ThemeProvider, Box } from '@highoutput/hds';
import { ChevronUpIcon, ChevronDownIcon } from '@highoutput/hds-icons';

export default function Component() {
  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <ChevronUpIcon fill="neutrals.600" />
        <ChevronDownIcon fill="neutrals.600" />
      </VStack>
    </ThemeProvider>
  );
}
```

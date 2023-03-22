### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-popover
```

### Usage

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@highoutput/hds-popover';
import { ThemeProvider, extendTheme, Box, Text } from '@highoutput/hds';
import { Button } from '@highoutput/hds-button';
import * as React from 'react';

export default function Example() {
  return (
    <ThemeProvider>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ThemeProvider>
  );
}
```

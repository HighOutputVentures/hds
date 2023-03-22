### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-button
```

### Usage

```tsx
import * as React from "react";
import Button,{ CloseButton, SocialButton } from "@highoutput/hds-button";
import { ThemeProvider, HStack, Box, Text } from "@highoutput/hds";


export default function Example() {
  return (
    <ThemeProvider>
      <Button {...args} >Submit</Button>
      <CloseButton {...args} />
      <SocialButton {...args} />
    </ThemeProvider>
  );
}
```

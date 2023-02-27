### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/CTA
```

### Usage

```tsx
import { CTA } from '@highoutput/hds-CTA';

export const CTASample = () => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <CTA {...args} />
      </Flex>
    </ThemeProvider>
  );
};
```

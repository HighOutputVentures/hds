### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-tooltip
```

### Usage

```jsx
import { Tooltip } from '@highoutput/hds-tooltip';

export const SamplePage = ({ children }) => {
  return (
    <Tooltip label="This is a tooltip" arrow={true} theme="dark">
      {children}
    </Tooltip>
  );
};
```

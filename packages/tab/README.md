### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-tab
```

### Usage

```tsx
import { Tab } from '@highoutput/hds-tab'
import { ThemeProvider, extendTheme } from '@highoutput/hds';
import { useCallback } from 'react';

export default function Example() {
  const handleClose = useCallback(() => {
    /* heavy logic after close */
  }, []);

  return (
    <ThemeProvider theme={extendTheme(withTag())}>
      <Tab tabLabels={['Label 1', 'Label 2']} 
      tabItems={
        <TabPanels>
          <TabPanel>Label 1</TabPanel>
          <TabPanel>Label 2</TabPanel>
      </TabPanels>
      }/>
    </ThemeProvider>
  );
}
```

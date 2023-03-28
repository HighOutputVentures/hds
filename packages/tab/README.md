### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-tab
```

### Usage

```tsx
import { Tabs } from '@highoutput/hds-tab';
import { ThemeProvider, extendTheme } from '@highoutput/hds';

export default function Example() {
  return (
    <ThemeProvider>
      <Tabs
        items={[
          {
            label: 'One',
            render() {
              return <div>One</div>;
            },
          },
          {
            label: 'Two',
            render() {
              return <div>Two</div>;
            },
          },
          {
            label: 'Three',
            render() {
              return <div>Three</div>;
            },
          },
        ]}
      />
    </ThemeProvider>
  );
}
```

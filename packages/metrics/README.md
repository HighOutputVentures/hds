### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-metrics
```

### Usage

```tsx
import { ThemeProvider, extendTheme, Flex } from '@highoutput/hds';
import { ArrowPositiveChange } from '@highoutput/hds-icons';
import { Metrics } from '@highoutput/hds-metrics';

export default function Example() {
  return (
    <ThemeProvider>
      <Metrics
        metricLabel="Views 24 hours"
        metricValue="4000"
        metricChange="positive"
        lastViewedText="vs last month"
        viewDetailsText="View Details"
        percentage={23}
        icon={
          <Flex
            w={8}
            h={8}
            bg="green.100"
            alignItems="center"
            justify="center"
            borderRadius={100}
          >
            <ArrowPositiveChange />
          </Flex>
        }
      />
    </ThemeProvider>
  );
}
```

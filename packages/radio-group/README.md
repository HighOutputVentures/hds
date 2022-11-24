### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-radio-group
```

### Usage

```tsx
import * as React from "react";
import { RadioGroup } from "@highoutput/hds-radio-group";
import { ThemeProvider, HStack, Box, Text } from "@highoutput/hds";
import DollarIcon from "./DollarIcon";

const users = [
  { id: 1, name: "Mary", salary: 1500 },
  { id: 1, name: "Will", salary: 2000 },
  { id: 1, name: "Sean", salary: 2500 },
];

export default function Example() {
  const [value, setValue] = React.useState<typeof users>([]);

  return (
    <ThemeProvider theme={extendTheme(withRadioGroup())}>
      <RadioGroup
        size="lg"
        variant="dot"
        items={users}
        value={value}
        onChange={setValue}
        compareFn={(user) => user.id}
      >
        {({ item, index, getProps }) => {
          const { container, icon, radio } = getProps(/* { disabled: true } */);

          return (
            <HStack key={id} spacing={4} {...container}>
              <Box {...icon}>
                <Icon as={DollarIcon} />
              </Box>

              <Box flexGrow={1}>
                <Text>{name}</Text>
                <Text>{salary}</Text>
              </Box>

              <Box {...radio} />
            </HStack>
          );
        }}
      </RadioGroup>
    </ThemeProvider>
  );
}
```

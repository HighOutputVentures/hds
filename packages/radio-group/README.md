### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-radio-group
```

### Usage

```tsx
import { RadioGroup, RadioGroupItem, withRadioGroup } from "@highoutput/hds-radio-group";
import { ThemeProvider, extendTheme, Text } from "@highoutput/hds";

const users = [
  { id: 1, name: "Mary", salary: 1500 },
  { id: 1, name: "Will", salary: 2000 },
  { id: 1, name: "Sean", salary: 2500 },
];

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withRadioGroup())}>
      <RadioGroup items={users} onChange={function noop(/* users */) {}}>
        {({ id, name, salary }) => {
          return (
            <RadioGroupItem key={id}>
              <Text>{name}</Text>
              <Text>{salary}</Text>
            </RadioGroupItem>
          );
        }}
      </RadioGroup>
    </ThemeProvider>
  );
}
```

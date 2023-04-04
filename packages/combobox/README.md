### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-combobox
```

### Usage

```tsx
import { ThemeProvider, Box, Icon } from '@highoutput/hds';
import { Combobox } from '@highoutput/hds-comoobox';
import { SearchIcon } from './icons';

export default function Component() {
  return (
    <ThemeProvider>
      <Box h="500px">
        <Combobox
          options={[
            { value: 1, label: 'John' },
            { value: 2, label: 'Paul' },
            { value: 3, label: 'Mark' },
            { value: 4, label: 'Mary' },
            { value: 5, label: 'Jake' },
          ]}
          placeholder="Select something"
          onChange={function (newValue) {
            console.log(newValue);
          }}
          zIndex={9}
          leftIcon={<Icon as={SearchIcon} w={5} h={5} />}
          isClearable
        />
      </Box>
    </ThemeProvider>
  );
}
```

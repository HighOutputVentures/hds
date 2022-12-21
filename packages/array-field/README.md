### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-array-field
```

### Usage

```tsx
import { ArrayField } from '@highoutput/hds-array-field';

export const SamplePage = () => {
  return (
    <>
      <ArrayField
        defaultValues={{
          input: [
            {
              value: '',
            },
          ],
        }}
        maxValue={10}
        onAppend={() => {}}
        onBlur={function noRefCheck() {}}
        onChange={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        placeholder="Enter an Input"
      />
    </>
  );
};
```

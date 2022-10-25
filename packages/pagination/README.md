### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-pagination
```

### Usage


```jsx
import { Pagination } from '@highoutput/hds-pagination';

export const SamplePage = () => {

  return (
    <>
       <Pagination
          onPageChange={() => {}}
          onSizeChange={function noRefCheck() {}}
          options={{
            sizes: [
              5,
              10,
              25,
              50
            ]
          }}
          page={1}
          size={5}
          total={75}
        />
    </>
  );
};
```



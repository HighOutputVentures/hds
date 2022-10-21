### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-spinner
```

### Usage



```typescript
import { LogoSpinner } from '@highoutput/hds-spinner';

export const SamplePage = () => {
  return (
    <>
     <LogoSpinner duration={3000}>
        <div>Hello, World!</div>
      </LogoSpinner>
    </>
  );
};
```

## Other Documented Usage

- [Components Live Preview](https://hov-hds-highoutput.vercel.app/)

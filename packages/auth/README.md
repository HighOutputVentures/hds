### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-auth
```

### Usage

```tsx
import { CredentialLoginForm } from '@highoutput/hds-auth';

export const SamplePage = () => {
  return (
    <>
      <CredentialLoginForm />
    </>
  );
};
```

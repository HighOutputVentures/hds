### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-avatar
```

### Usage

```typescript
import { Avatar, AvatarGroup, withAvatar } from '@highoutput/hds-avatar';
import { ThemeProvider, extendTheme } from '@highoutput/hds';

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withAvatar())}>
      <Avatar src="" name="" />
      <AvatarGroup />
    </ThemeProvider>
  );
}
```

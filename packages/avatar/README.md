### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-avatar
```

### Usage

```typescript
import { Avatar, AvatarGroup, AvatarLabel, withAvatar } from '@highoutput/hds-avatar';
import { ThemeProvider, extendTheme } from '@highoutput/hds';

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withAvatar())}>
      <Avatar
        size="xl"
        src="https://i.pravatar.cc/300"
        name="John Doe"
        onlineIndicator
        isOnline
        clickable
        onClick={function () {}}
      />

      <AvatarGroup size="md" max={3} mt={8}>
        <Avatar src="https://i.pravatar.cc/300?u=1" />
        <Avatar src="https://i.pravatar.cc/300?u=2" />
        <Avatar src="https://i.pravatar.cc/300?u=3" />
        <Avatar src="https://i.pravatar.cc/300?u=4" />
        <Avatar src="https://i.pravatar.cc/300?u=5" />
      </AvatarGroup>

      <AvatarLabel
        mt={8}
        size="sm"
        src="https://i.pravatar.cc/300"
        name="Mary Doe"
        supportText="marydoe@dummy.bla"
        fallback={false}
      >
        <Avatar size="xl" />
      </AvatarLabel>
    </ThemeProvider>
  );
}
```

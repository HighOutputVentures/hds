### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-avatar
```

### Usage

```tsx
import { Avatar, AvatarGroup, AvatarLabel, withAvatar } from "@highoutput/hds-avatar";
import { ThemeProvider, extendTheme } from "@highoutput/hds";

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withAvatar())}>
      <Avatar
        size="xl"
        src="https://i.pravatar.cc/300"
        name="John Doe"
        hasOnlineIndicator
        isOnline
        onClick={function () {}}
      />

      <AvatarGroup
        size="md"
        max={3}
        items={[
          { name: "", src: "https://i.pravatar.cc/300?u=1" },
          { name: "", src: "https://i.pravatar.cc/300?u=2" },
          { name: "", src: "https://i.pravatar.cc/300?u=3" },
          { name: "", src: "https://i.pravatar.cc/300?u=4" },
          { name: "", src: "https://i.pravatar.cc/300?u=5" },
        ]}
      />

      <AvatarLabel
        size="sm"
        src="https://i.pravatar.cc/300"
        name="Mary Doe"
        supportText="marydoe@dummy.bla"
      />
    </ThemeProvider>
  );
}
```

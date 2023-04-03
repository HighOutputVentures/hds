### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-breadcrumbs
```

### Usage

```tsx
import { Breadcrumbs } from '@highoutput/hds-breadcrumbs';

export function SamplePage() {
  return (
    <Breadcrumbs
      homeHref="/dashboard"
      items={[
        {
          href: '/settings',
          label: 'Settings',
        },
        {
          href: '#',
          label: '...',
          isDisabled: true,
        },
        {
          href: '/settings/teams',
          label: 'Teams',
          isActive: true,
        },
      ]}
    />
  );
}
```

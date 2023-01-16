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

export const SamplePage = () => {
  return (
    <Breadcrumbs
      separator={<ChevronRightIcon color="#D6D6D6" />}
      icon={<AttachmentIcon />}
      breadCrumbLinks={[
        { link: '#hello', name: 'Home' },
        { link: '#Settings', name: 'Settings' },
        { link: '#Faqs', name: 'Faqs' },
        { link: '#Logout', name: 'Logout' },
        { link: '#New', name: 'New' },
        { link: '#Create', name: 'Create' },
        { link: '#Contact', name: 'Contact' },
        { link: '#Read', name: 'Read' },
        { link: '#Save', name: 'Save' },
        { link: '#Copy', name: 'Copy' },
      ]}
    />
  );
};
```

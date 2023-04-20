### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

### To install package, use

**NPM**

```bash
npm i @highoutput/hds-contact-us
```

**Yarn**

```bash
yarn add @highoutput/hds-contact-us
```

### Install the required dependency

**NPM**

```bash
npm i @highoutput/hds @highoutput/hds-forms
```

**Yarn**

```bash
yarn add @highoutput/hds @highoutput/hds-forms
```

### Usage

```tsx
import { ContactUs } from "@highoutput/hds-contact-us";

export function SamplePage() {
  return <ContactUs url="https://dumm.y/messages" />;
}
```

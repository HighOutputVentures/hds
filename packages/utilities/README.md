### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```
npm i @highoutput/hds-utilities
```

### Usage

```tsx
import For from "./src";

const each = [
  { id: 1, name: "Mary" },
  { id: 2, name: "John" },
  { id: 3, name: "Will" },
  { id: 4, name: "Susan" },
  { id: 5, name: "Karen" },
];

export default function Component() {
  return (
    <For each={each} getKey={({ id }) => id}>
      {({ name }) => <div>{name}</div>}
    </For>
  );
}
```

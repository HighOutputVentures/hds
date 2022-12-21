### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```
npm i @highoutput/hds-autocomplete-input
```

### Usage

```tsx
import * as React from 'react';
import { AutoCompleteInput } from './src';

export default function Component() {
  return (
    <AutoCompleteInput options={options} onChangeValue={function noop() {}} />
  );
}

const options = [
  {
    value: 'Phoenix',
    label: 'Phoenix',
    avatar:
      'https://assets.teenvogue.com/photos/626abe370979f2c5ace0ab29/16:9/w_2560%2Cc_limit/GettyImages-1352932505.jpg',
  },
  {
    value: 'Olivia',
    label: 'Olivia',
    avatar:
      'https://static01.nyt.com/images/2021/05/21/arts/21review-rodrigo01/merlin_188054001_2a34e77d-e653-488a-a4d9-1a0f1ddf73e4-superJumbo.jpg',
  },
];
```

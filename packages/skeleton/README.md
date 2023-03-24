### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-skeleton
```

### Usage

```tsx
import { Skeleton } from "@highoutput/hds-skeleton";
import { Pagination } from "@highoutput/hds-pagination";
import { ThemeProvider,Box } from "@highoutput/hds";
import * as React from "react";

export default function Example() {
  const { data, loading, error } = useRemoteData()
  if (error) return <Box children='error' />

  return (

    <ThemeProvider>
      <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>{data.title}</Heading>
      </Skeleton>
    </ThemeProvider>
  );
}
```

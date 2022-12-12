### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-pagination
```

### Usage

```tsx
import { Pagination } from "@highoutput/hds-pagination";
import * as React from "react";

export const SamplePage = () => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      {/* More codes... */}

      <Pagination
        variant="minimal"
        page={1}
        size={5}
        total={100}
        onPageChange={setPage}
        hasLegend={false}
        hasPageControls
        maxPageControls={4}
      />

      {/* More codes... */}
    </>
  );
};
```

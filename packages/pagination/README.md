### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-pagination
```

### Usage

```tsx
import { ThemeProvider, Box } from "@highoutput/hds";
import { Pagination } from "@highoutput/hds-pagination";
import { Table } from "@highoutput/hds-table";
import * as React from "react";

export const SamplePage = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <ThemeProvider>
      <Table
        /*
         *
         * more codes here...
         *
         */
        renderFooter={
          <Box p={4}>
            <Pagination
              variant="minimal"
              page={page}
              pageSize={pageSize}
              count={100}
              hasLegend={false}
              hasPageControls
              onChange={function ({ page, pageSize }) {
                setPage(page);
                setPageSize(pageSize);
              }}
            />
          </Box>
        }
      />
    </ThemeProvider>
  );
};
```

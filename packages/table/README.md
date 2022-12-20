### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```bash
npm i @highoutput/hds-table
```

### Usage

```tsx
import { Table, withTable } from "@highoutput/hds-table";
import { Pagination } from "@highoutput/hds-pagination";
import { ThemeProvider, extendTheme, Box, Text, Button } from "@highoutput/hds";
import * as React from "react";

export default function Example() {
  return (
    <ThemeProvider>
      <Table
        data={arrayOfItemsFromDb}
        columns={[
          {
            label: "Name",
            renderRow({ name }) {
              return (
                <Box>
                  <Text>{name}</Text>
                </Box>
              );
            },
            onSort({ direction }) {
              // sort handler
            },
            onClick() {
              // click handler
            },
            tooltip: "Some hint",
            onCheck({ isChecked, item }) {
              // check handler
            },
            // could also be a boolean
            defaultChecked(data) {
              // conditional default check
              return data.isActive;
            },
            onCheckAll({ isChecked, items }) {
              // check all handler
            },
          },
        ]}
        renderHeader={
          <Box>
            <Text>Users</Text>
          </Box>
        }
        renderFooter={
          <Pagination
            variant="minimal"
            page={1}
            pageSize={10}
            total={100}
            onPageChange={function noop() {}}
          />
        }
      />
    </ThemeProvider>
  );
}
```

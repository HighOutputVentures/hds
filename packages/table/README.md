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
import { ThemeProvider, extendTheme, Box, Text, Button } from "@highoutput/hds";
import * as React from "react";

export default function Example() {
  return (
    <ThemeProvider theme={extendTheme(withTable())}>
      <Table
        data={arrayOfItemsFromDb}
        columns={[
          {
            label: "Profile",
            colSpan: 1,
            getData(item) {},
            // (optional) renders the row data
            // defaults to whatever getData returns
            renderRow(data /* returned from "getData" */, context) {},
            tooltip(item) {
              return {
                enable: true,
                label: "",
              };
            },
            click(item) {
              return {
                enable: true,
                action() {},
              };
            },
            sort(item) {
              return {
                enable: true,
                action({ direction /* "asc" | "desc" */ }) {},
              };
            },
            checkbox(item) {
              return {
                enable: true,
                action({ isSelected }) {},
              };
            },
          },
        ]}
        fallback={
          <Box>
            <Text>No records found</Text>
            <Button>Refresh</Button>
          </Box>
        }
      />
    </ThemeProvider>
  );
}
```

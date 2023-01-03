### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-expiremental
```

### Usage

```tsx
// layout.tsx
import { Navbar } from "@highoutput/hds-expiremental";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Box minHeight="100vh">
      <Navbar>
        <Link href="/">
          <Heading as="h2">Logo</Heading>
        </Link>

        <Box as="nav" role="navigation">
          <Flex as="ul" gap={2}>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </Flex>
        </Box>
      </Navbar>

      <Box as="main">{children}</Box>
    </Box>
  );
}
```

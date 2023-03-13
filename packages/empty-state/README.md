### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/empty-state
```

### Usage

```tsx
import { EmptyState } from '@highoutput/hds-empty-state';
import { SearchIcon } from '@highoutput/hds-icons';

export const CTASample = () => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <EmptyState
          header={`No projects found`}
          subHeader="Your search “Landing page design” did not match any projects. Please try again."
          primaryLabel="Changelog"
          secondaryLabel="Dismiss"
          icon={<Icon color="#7F56D9" h="1.5rem" w="1.5rem" as={SearchIcon} />}
        />
      </Flex>
    </ThemeProvider>
  );
};
```

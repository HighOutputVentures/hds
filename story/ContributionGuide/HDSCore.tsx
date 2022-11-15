import { Box, Code, Link, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import ThemeProvider from "../../packages/hds/src/components/ThemeProvider";

const HDSCore = () => {
  return (
    <ThemeProvider>
      <Text size="heading-web-3" mb={5}>
        HDS Contribution - Core
      </Text>

      <OrderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">Component</Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">Hook</Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">Utility</Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">Theme</Text>
        </ListItem>
      </OrderedList>

      <Text size="paragraph-md-default" mb={5}>
        Folder structure under{" "}
        <Code colorScheme="gray" children="./packages/hds/src" /> folder
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`- src
    - components
    - hooks
    - utils
    - theme
    - index.tsx
`}
      </SyntaxHighlighter>

      <Text size="heading-web-5" mt={5} mb={5}>
        Component Guide
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        <Code colorScheme="gray" children="component" /> - under components is
        where the reusable single ui components are located, each component has
        a file structued within it
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// sample component
- components
    - RadioImage [folder name for component]
        - RadioImage.tsx [reusable component]
        - RadioImage.stories.tsx [storybook component for testing/demo the component]
        - RadioImage.docs.mdx [to customize docs tab]
        - RadioImage.test.tsx [test file]
`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        after creating all those files you can now import your component into{" "}
        <Code colorScheme="gray" children="src/index.tsx" /> file and then
        export it which would make it available for anyone who use the library.
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// index.tsx
import RadioImage, {
  RadioImageProps,
} from "./components/RadioImage/RadioImage";

export {
  RadioImage,
  RadioImageProps, // note: always include exporting the component props
};
`}
      </SyntaxHighlighter>

      <Text size="heading-web-5" mt={5} mb={5}>
        Hook Guide
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        <Code colorScheme="gray" children="hooks" /> - you can put all the
        reusable hooks in this folder and then you can export a file from hooks
        into the <Code colorScheme="gray" children="src/index.tsx" /> file if
        needed.
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// sample hook
const useSampleHook = () => {
  const save = () => {
    // do anything here
  };

  return {
    save,
  };
};

export default useSampleHook;
`}
      </SyntaxHighlighter>

      <Box mt={5}></Box>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// index.tsx
import useSampleHook './hooks/useSampleHook/useSampleHook';

export { useSampleHook }
`}
      </SyntaxHighlighter>

      <Text size="heading-web-5" mt={5} mb={5}>
        Utility Guide
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        <Code colorScheme="gray" children="utils" /> - this is where we save the
        utility function files that our library needed, you can also export this
        one in the <Code colorScheme="gray" children="src/index.tsx" />
        ame as hook if needed only.
      </Text>

      <Text size="heading-web-5" mt={5} mb={5}>
        Theme Guide
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        <Code colorScheme="gray" children="theme " /> - this is where we save
        the default design system that we setup in our library (user can overide
        this one)
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`- theme
    - components
    - config.ts
    - color.ts
    - fonts.ts
    - fontSizes.ts
    - index.ts
    - styles.ts
`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        <Code colorScheme="gray" children="theme/components" /> - is where we
        set up default style of chakra ui components if we want to
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// theme/components/button.tsx
import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    _focus: { boxShadow: "none" },
    alignItems: "center",
    alignSelf: "center",
    borderRadius: "4px",
    color: "gray.800",
    outline: "none",
  },
};

export default Button;
`}
      </SyntaxHighlighter>

      <Box mt={5}></Box>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// theme/index.ts
import { extendTheme } from "@chakra-ui/react";

import { Button } from "./components";

const theme = extendTheme({
  components: {
    Button,
  },
});

export default theme;
`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        to know more about component styling please go to this documentation{" "}
        <Link
          color="blue"
          href="https://chakra-ui.com/docs/styled-system/theming/component-style"
          isExternal
        >
          chakra ui component styling.
        </Link>
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        <Code colorScheme="gray" children="colors.ts" /> - is where we setup are
        global colors that we can specify and use.
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// color.ts
export const colors = {
  amber: {
    50: "#FFF8E1",
    100: "#FFECB3",
    200: "#FFE082",
    300: "#FFD54F",
    400: "#FFCA28",
    500: "#FFC107",
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00",
  },
};
`}
      </SyntaxHighlighter>

      <Box mt={5}></Box>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`// usage
<Button backgroundColor="amber.500" />
`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        to know more about theme/color styling please go to this documentation{" "}
        <Link
          color="blue"
          href="https://chakra-ui.com/docs/styled-system/theming/theme"
          isExternal
        >
          chakra ui theme.
        </Link>
      </Text>

      <Text size="heading-web-5" mb={5}>
        How to run library
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        To run library storybook go to hds root directory and run command:
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`npm install
npm run storybook
`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        To run library storybook go to hds root directory and run command:
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`npm run test:hds`}
      </SyntaxHighlighter>

      <Text size="paragraph-md-default" mt={5} mb={5}>
        To test build of components, run command:
      </Text>

      <SyntaxHighlighter language="typescript" style={docco}>
        {`npm run build:hds`}
      </SyntaxHighlighter>
    </ThemeProvider>
  );
};

export default HDSCore;

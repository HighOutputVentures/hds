import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Code,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import { atomOneLight as colorScheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ThemeProvider from "../packages/hds/src/components/ThemeProvider";
import { HovIcon } from "../packages/icons/src/index";

SyntaxHighlighter.registerLanguage("typescript", ts);

const packageList = [
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-icons",
    packageName: "@highoutput/hds-icons",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-auth",
    packageName: " @highoutput/hds-auth",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-spinner",
    packageName: " @highoutput/hds-spinner",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-pagination",
    packageName: " @highoutput/hds-pagination",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-array-field",
    packageName: " @highoutput/hds-array-field",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-auto-form",
    packageName: " @highoutput/hds-hds-auto-form",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-contact-us",
    packageName: " @highoutput/hds-hds-contact-us",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-forms",
    packageName: " @highoutput/hds-hds-forms",
  },
  {
    packageLink:
      "https://www.npmjs.com/package/@highoutput/hds-autocomplete-inputs",
    packageName: " @highoutput/hds-autocomplete-input",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-utilities",
    packageName: " @highoutput/hds-utilities",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-tag",
    packageName: " @highoutput/hds-tag",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-switch",
    packageName: " @highoutput/hds-switch",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-avatar",
    packageName: " @highoutput/hds-avatar",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-slider",
    packageName: " @highoutput/hds-slider",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-checkbox-group",
    packageName: " @highoutput/hds-checkbox-group",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-dropdown",
    packageName: " @highoutput/hds-dropdown",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-tooltip",
    packageName: " @highoutput/hds-tooltip",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-alerts",
    packageName: " @highoutput/hds-alerts",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-carousel",
    packageName: " @highoutput/hds-carousel",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-date-picker",
    packageName: " @highoutput/hds-date-picker",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-experimental",
    packageName: " @highoutput/hds-experimental",
  },
  {
    packageLink: "https://www.npmjs.com/package/@highoutput/hds-file-upload",
    packageName: " @highoutput/hds-file-upload",
  },
];

const GettingStarted = () => {
  return (
    <ThemeProvider>
      <Box>
        <Stack direction="row" mb={5}>
          <HovIcon />
          <Text pos="relative" top={-1} size="header-3">
            HOV Design System
          </Text>
        </Stack>

        <Text size="paragraph-md-default" mb={5}>
          <strong>@highoutput/hds</strong> we aim to build a library of custom
          ReactJS components that implements our unique UI design conventions
          (HDS). Our components will be based primarily on Chakra UI. React
          Storybook will be used for documentation and testing.
        </Text>

        <UnorderedList mb={5}>
          <ListItem>
            <Text size="paragraph-md-default">
              Reusable block of components
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">HDS integrated styling</Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">Easy to implement</Text>
          </ListItem>
        </UnorderedList>

        <Text size="paragraph-md-default" marginBottom={2}>
          To install package, run command:
        </Text>
        <Code mb={5} colorScheme="yellow" children="npm i @highoutput/hds" />

        <Text size="paragraph-md-default" mb={5}>
          In your main app file import theme provider and make it a parent of
          all components.
        </Text>

        <Snippet>{snippet1}</Snippet>

        <Text size="paragraph-md-default" mt={5} mb={5}>
          After that you can use all the components within hds core.
        </Text>

        <Snippet>{snippet2}</Snippet>

        <Text mt={5} mb={5} size="header-4">
          Check out for more information
        </Text>

        <UnorderedList mb={5}>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link
                href="https://hds-highoutput.vercel.app/?path=/story/getting-started--page"
                isExternal
              >
                Storybook Documentation and Preview{" "}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://chakra-ui.com/docs/components" isExternal>
                Chakra Components <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </ListItem>
        </UnorderedList>

        <Text mb={5} size="header-4">
          Other Packages
        </Text>

        <UnorderedList mb={5}>
          {packageList.map((p) => (
            <ListItem key={p.packageName}>
              <Text size="paragraph-md-default">
                <Link href={p.packageLink} isExternal>
                  {p.packageName}
                </Link>
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </ThemeProvider>
  );
};

const snippet1 = `
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@highoutput/hds';

const App = () => {
  return (<ThemeProvider>{...components here}</ThemeProvider>);
};

ReactDOM.render(<App />, document.getElementById('root'));
`.trim();

const snippet2 = `
import * as React from "react";
import * as ReactDOM from "react-dom";
import { InputField, Box } from "@highoutput/hds";

const Form = () => {
  return (
    <Box>
      <InputField
        helperMsg="This is a hint text to help user"
        id="name"
        label="Name"
        onBlur={function noop() {}}
        onChange={function noop() {}}
        onPressEnter={function noop() {}}
        placeholder="Input your name"
      />
    </Box>
  );
};

export default Form;
`.trim();

function Snippet({ children, ...props }: BoxProps) {
  return (
    <Box
      as={SyntaxHighlighter}
      style={colorScheme}
      language="typescript"
      padding="24px!important"
      {...props}
    >
      {children}
    </Box>
  );
}

export default GettingStarted;

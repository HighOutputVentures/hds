import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Code, Link, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import { atomOneLight as colorScheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ThemeProvider from "../packages/hds/src/components/ThemeProvider";
import { HovIcon } from "../packages/icons/src/index";

SyntaxHighlighter.registerLanguage("typescript", ts);

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
          <strong>@highoutput/hds</strong> we aim to build a library of custom ReactJS components
          that implements our unique UI design conventions (HDS). Our components will be based
          primarily on Chakra UI. React Storybook will be used for documentation and testing.
        </Text>

        <UnorderedList mb={5}>
          <ListItem>
            <Text size="paragraph-md-default">Reusable block of components</Text>
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
          In your main app file import theme provider and make it a parent of all components.
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
                Storybook Documentation and Preview <ExternalLinkIcon mx="2px" />
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
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-icons" isExternal>
                @highoutput/hds-icons
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-auth" isExternal>
                @highoutput/hds-auth
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-spinner" isExternal>
                @highoutput/hds-spinner
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-pagination" isExternal>
                @highoutput/hds-pagination
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-array-field" isExternal>
                @highoutput/hds-array-field
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-auto-form" isExternal>
                @highoutput/hds-auto-form
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-contact-us" isExternal>
                @highoutput/hds-contact-us
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-forms" isExternal>
                @highoutput/hds-forms
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link
                href="https://www.npmjs.com/package/@highoutput/hds-autocomplete-input"
                isExternal
              >
                @highoutput/hds-autocomplete-input
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-utilities" isExternal>
                @highoutput/hds-utilities
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-tag" isExternal>
                @highoutput/hds-tag
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-switch" isExternal>
                @highoutput/hds-switch
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-avatar" isExternal>
                @highoutput/hds-avatar
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-slider" isExternal>
                @highoutput/hds-slider
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-md-default">
              <Link href="https://www.npmjs.com/package/@highoutput/hds-checkbox-group" isExternal>
                @highoutput/hds-checkbox-group
              </Link>
            </Text>
          </ListItem>
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

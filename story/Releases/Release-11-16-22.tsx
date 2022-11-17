import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Nov. 16, 2022)
      </Text>

      <Text size="paragraph-md-default" mb={5}>
        Contains API breaking changes and new features.
      </Text>

      <Text size="header-5" mb={5}>
        🚀 Features:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">
            added core package @highoutput/hds-forms
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-utilities
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-autocomplete-input
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added button component in storybook
          </Text>
        </ListItem>
      </UnorderedList>

      <Text size="header-5" mb={5}>
        ❗ Refactor/ Breaking Changes:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">remove shadow in button hover</Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            remove styling options in contact us components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            remove styling options in button components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            refactor name heading web text size to header
          </Text>
        </ListItem>
      </UnorderedList>

      {/* <Text size="header-5" mb={5}>
        🐛 Fixes:
      </Text> */}
      <Text size="header-5" mb={5}>
        🧹 Chores:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">
            update getting started document
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            update contribute guide core document
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            update contribute guide package document
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            update color design system document
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            update typography design system document
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ReleaseDetails;

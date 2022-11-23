import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Nov. 22, 2022)
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
            added core package @highoutput/hds-avatar
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-switch
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-tag
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">added new checkbox component</Text>
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
            remove styling options in array-field components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            remove styling options in icons components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            remove styling options in auto-form components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            remove styling options in pagination components
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ReleaseDetails;

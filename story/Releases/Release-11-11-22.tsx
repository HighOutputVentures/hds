import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Nov. 11, 2022)
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
            added core package @highoutput/hds
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-array-field
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-auth
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-auto-form
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-contact-us
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-icons
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-pagination
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added new style for button components
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added new style for input components
          </Text>
        </ListItem>
      </UnorderedList>

      {/* <Text size="header-5" mb={5}>
        ❗ Refactor/ Breaking Changes:
      </Text>
      <Text size="header-5" mb={5}>
        🐛 Fixes:
      </Text>
      <Text size="header-5" mb={5}>
        🧹 Chores:
      </Text> */}
    </Box>
  );
};

export default ReleaseDetails;

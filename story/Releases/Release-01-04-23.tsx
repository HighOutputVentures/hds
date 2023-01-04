import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Jan. 04, 2023)
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
            added package @highoutput/hds-date-picker
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-experimental
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ReleaseDetails;

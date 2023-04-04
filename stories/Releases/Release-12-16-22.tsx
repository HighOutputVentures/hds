import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Dec. 12, 2022)
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
            added package @highoutput/hds-tooltip
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-alerts
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-carousel
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ReleaseDetails;

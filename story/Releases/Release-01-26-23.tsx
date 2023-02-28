import React from "react";
import { ListItem, UnorderedList, Text, Box } from "@chakra-ui/react";

const ReleaseDetails = () => {
  return (
    <Box>
      <Text size="header-3" mb={5}>
        Release (Jan. 26, 2023)
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
            added package @highoutput/hds-file-upload
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-badge
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-modal
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-tab
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-metrics
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-table with pagination
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added package @highoutput/hds-breadcrumbs
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added password field component in hds-forms
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            integrated new variant/usage for pagination component#105
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">button tab under tab package</Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added type, isLoading, isDisabled, loadingText, in button
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            added storybook controls in Icons#84
          </Text>
        </ListItem>
      </UnorderedList>

      <Text size="header-5" mb={5}>
        ❗ Refactor/ Breaking Changes:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">
            removed exported HelperTextProps and shouldShowFallbackImage
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">updated primary color in hds</Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            refactor package.json path on dropdown, alerts, and breadcrumbs
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            remove tabs in hds core all option should be in hds-tab package
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            refactor credentials form props requirement
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            remove modal in hds core, add variants props on hds-modal
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            metrics add props for chart icon and make button optional
          </Text>
        </ListItem>
      </UnorderedList>

      <Text size="header-5" mb={5}>
        🧹 Chores:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">
            expose all interface and type props in table component#161
          </Text>
        </ListItem>

        <ListItem>
          <Text size="paragraph-md-default">
            update readme file for @highoutput/hds-metris
          </Text>
        </ListItem>
      </UnorderedList>

      <Text size="header-5" mb={5}>
        🐛 Fixes:
      </Text>

      <UnorderedList mb={5}>
        <ListItem>
          <Text size="paragraph-md-default">
            fix avatar label name text too big
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            stroke-width error (hds-icons) upon installing in nextjs
          </Text>
        </ListItem>
        <ListItem>
          <Text size="paragraph-md-default">
            fix export module in hds-dropdown package
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ReleaseDetails;

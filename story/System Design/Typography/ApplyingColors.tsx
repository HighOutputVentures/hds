import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function ApplyingColors() {
  return (
    <Box mt="318px">
      <Heading size="header-2">Applying colors to type</Heading>
      <Text size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Our colors and type needs to work well together according to heirarchy, similarity, and
        common region allowing our UI to communicate with the end-users better at glance.
      </Text>
    </Box>
  );
}

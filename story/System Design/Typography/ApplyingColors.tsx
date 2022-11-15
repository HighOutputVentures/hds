import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function ApplyingColors(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Applying colors to type</Heading>
      <Text>
        Our colors and type needs to work well together according to heirarchy, similarity, and
        common region allowing our UI to communicate with the end-users better at glance.
      </Text>
    </Box>
  );
}

import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function Accessibility(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Accessibility</Heading>
      <Text>
        Headers and subheaders have typically tighter letter spacing compared to the paragraph.
      </Text>
    </Box>
  );
}

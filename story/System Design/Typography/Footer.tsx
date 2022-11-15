import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function Footer(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Is this document helpful?</Heading>
      <Text>Give us some feedback for us to improve it at design@hov.co</Text>
    </Box>
  );
}

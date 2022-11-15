import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function EnsuringReadability(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Ensuring readability</Heading>
      <Text>
        Make sure that we do not put restraints on the viewers and readers eyes by limiting the
        line length. Line length is the minimum and maximum width of a paragraph content.
      </Text>
      <Text>
        Ideally, the ideal width contains 60-100 characters per line but we want to limit
        according to container width instead. It is rather convenient when it comes to creating
        breakpoints of our interface.
      </Text>
    </Box>
  );
}

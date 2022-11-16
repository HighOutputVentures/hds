import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function EnsuringReadability() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Ensuring readability</Heading>
      <Text size="paragraph-xxl-default" mt="64px">
        Make sure that we do not put restraints on the viewers and readers eyes by limiting the
        line length. Line length is the minimum and maximum width of a paragraph content.
      </Text>
      <Text size="paragraph-xxl-default" mt={8}>
        Ideally, the ideal width contains 60-100 characters per line but we want to limit
        according to container width instead. It is rather convenient when it comes to creating
        breakpoints of our interface.
      </Text>
    </Box>
  );
}

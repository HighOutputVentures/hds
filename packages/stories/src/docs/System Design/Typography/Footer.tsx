import { Box, Heading, Link, Spacer, Text } from "@chakra-ui/react";
import * as React from "react";

export default function Footer() {
  return (
    <Box mt="332px">
      <Heading size="header-2">Is this document helpful?</Heading>
      <Text mt="28px" size="paragraph-xxl-default" color="neutrals.700">
        Give us some feedback for us to improve it at{" "}
        <Link href="#" color="#75AEE4">
          design@hov.co
        </Link>
      </Text>
      <Spacer h="104px" />
    </Box>
  );
}

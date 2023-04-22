import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function Monospace() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Monospace</Heading>
      <Text mt="64px" color="neutrals.700" size="paragraph-xxl-default">
        Will be adding this soon...
      </Text>
      <Box mt="102px">
        <Text
          textAlign="center"
          w="770px"
          mx="auto"
          py="48px"
          size="header-4"
          border="1px solid"
          borderColor="neutrals.200"
          rounded="4px"
          color="neutrals.700"
        >
          Coming soon
        </Text>
      </Box>
    </Box>
  );
}

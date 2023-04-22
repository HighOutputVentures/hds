import { Box, Heading, Image, Text } from "@chakra-ui/react";
import * as React from "react";

export default function BrandTypography() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Brand typography</Heading>

      <Text mt="64px" size="paragraph-xxl-default" color="neutrals.700">
        We use <strong>Helvetica Neue</strong> all through out our website and product typography.
        In other use case like labels and code snippets, we use <strong>SF Mono</strong> typeface.
      </Text>

      <Box px="75px" mt="64px">
        <Image src="/typography/helvetica-neue.png" alt="" />
        <Image src="/typography/sf-mono.png" alt="" mt="64px" />
      </Box>
    </Box>
  );
}

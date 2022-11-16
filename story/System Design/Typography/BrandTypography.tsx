import { Box, Heading, Image, Text } from "@chakra-ui/react";
import * as React from "react";
// @ts-ignore
import helveticaNeue from "../../../assets/typography/helvetica-neue.png";
// @ts-ignore
import sfMono from "../../../assets/typography/sf-mono.png";

export default function BrandTypography() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Brand typography</Heading>

      <Text mt="64px" size="paragraph-xxl-default" color="neutrals.700">
        We use <strong>Helvetica Neue</strong> all through out our website and product
        typography. In other use case like labels and code snippets, we use{" "}
        <strong>SF Mono</strong> typeface.
      </Text>

      <Box px="75px" mt="64px">
        <Image src={helveticaNeue} alt="" />
        <Image src={sfMono} alt="" mt="64px" />
      </Box>
    </Box>
  );
}

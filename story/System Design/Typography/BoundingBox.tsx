import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import * as React from "react";
// @ts-ignore
import boundingBox from "../../../assets/typography/bounding-box.png";
// @ts-ignore
import padding from "../../../assets/typography/padding.png";
// @ts-ignore
import identifi0 from "../../../assets/typography/identifi-0.png";
// @ts-ignore
import identifi1 from "../../../assets/typography/identifi-1.png";

export default function BoundingBox() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Using padding and bounding box</Heading>

      <Box as={Text} size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Vertical typesetting relies on padding, bounding boxes, and baselines to ensure text
        legibility at&nbsp;any&nbsp;size.
        <Text as="span" display="block" mt={8}>
          ~{" "}
          <Text as="span" textDecor="underline">
            Material Design
          </Text>
        </Text>
      </Box>

      <Flex mt="64px" gap="72px">
        <Image w="648px" src={boundingBox} alt="" />
        <Image w="648px" src={padding} alt="" />
      </Flex>

      <Flex mt="96px" gap="72px">
        <Box w="648px">
          <Image w="full" src={identifi0} alt="" />
          <Text size="label-xs-default" mt={4}>
            Middle/Center
          </Text>
        </Box>
        <Box w="648px">
          <Image w="full" src={identifi1} alt="" />
          <Text size="label-xs-default" mt={4}>
            Baseline
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

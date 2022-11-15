import { Box, BoxProps, Flex, Heading, Image, Text } from "@chakra-ui/react";
import * as React from "react";
// @ts-ignore
import boundingBox from "../../../assets/typography/bounding-box.png";
// @ts-ignore
import padding from "../../../assets/typography/padding.png";
// @ts-ignore
import identifi0 from "../../../assets/typography/identifi-0.png";
// @ts-ignore
import identifi1 from "../../../assets/typography/identifi-1.png";

export default function BoundingBox(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Using padding and bounding box</Heading>
      <Box>
        <Text>
          Vertical typesetting relies on padding, bounding boxes, and baselines to ensure text
          legibility at any size.
        </Text>
        <Text>~ Material Design</Text>
      </Box>
      <Flex>
        <Image src={boundingBox} alt="" />
        <Image src={padding} alt="" />
      </Flex>

      <Flex>
        <Image src={identifi0} alt="" />
        <Image src={identifi1} alt="" />
      </Flex>
    </Box>
  );
}

import {
  Box,
  BoxProps,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
// @ts-ignore
import hero from "../../../assets/typography/hero.png";

export default function Hero(props: BoxProps) {
  return (
    <Box maxWidth="full" {...props}>
      <Heading size="header-1">Type system</Heading>
      <Text mt={5} size="paragraph-xxl-default">
        Building a robust responsive set of typescale system for designing real products for
        both web and mobile platforms.{" "}
        <Link
          href="https://www.playbook.com/s/hovdesign/CxvyNG1btuHMzu9W5GAFX7a5"
          target="_blank"
          rel="noreferrer"
        >
          Download font
        </Link>{" "}
        here.
      </Text>

      <Heading mt="200px" size="header-2">
        Responsive type system
      </Heading>
      <Box as={Text} size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        <Text>Common use case of type scaling:</Text>

        <UnorderedList mt={4}>
          <ListItem>Headers</ListItem>
          <ListItem>Paragraph</ListItem>
          <ListItem>Labels</ListItem>
          <ListItem>Buttons</ListItem>
        </UnorderedList>

        <Text mt={8}>
          Breakpoints - We need to create sets of breakpoints for web and mobile.
        </Text>
      </Box>

      <Box mt="64px" px="100px">
        <Image src={hero} alt="Hero" maxWidth="full" />
      </Box>
    </Box>
  );
}

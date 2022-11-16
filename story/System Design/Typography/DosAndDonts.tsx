import { Box, Heading, Link, Text } from "@chakra-ui/react";
import * as React from "react";

export default function DosAndDonts() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Do’s and don’ts</Heading>
      <Text size="paragraph-xxl-default" mt="64px">
        Iconography is based on proportionality rather than fixed height and width. To achieve
        1:1 ration for icons, it is usually put inside a frame. We use the{" "}
        <Link href="#" color="#8A68EF" textDecor="underline">
          Untitled UI PRO icon pack
        </Link>{" "}
        for our iconography library.
      </Text>
      <Text size="paragraph-xxl-default" mt={8}>
        Pairing type with iconography needs to be standardized from color to scales.
      </Text>
    </Box>
  );
}

import { Box, BoxProps, Heading, Link, Text } from "@chakra-ui/react";
import * as React from "react";

export default function DosAndDonts(props: BoxProps) {
  return (
    <Box {...props}>
      <Heading>Do’s and don’ts</Heading>
      <Text>
        Iconography is based on proportionality rather than fixed height and width. To achieve
        1:1 ration for icons, it is usually put inside a frame. We use the{" "}
        <Link>Untitled UI PRO icon pack</Link> for our iconography library.
      </Text>
      <Text>Pairing type with iconography needs to be standardized from color to scales.</Text>
    </Box>
  );
}

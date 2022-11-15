import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
// @ts-ignore
import browser from "../../../assets/typography/browser.png";

export default function TypeRoles(props: BoxProps) {
  return (
    <Box {...props}>
      <Text>
        Different size, different roles. This ensures proper heirarchy of our interfaces.
      </Text>
      <HeadersAndSubheaders />
      <Paragraphs />
      <LabelsAndButtons />
    </Box>
  );
}

function HeadersAndSubheaders() {
  return (
    <Box>
      <Box>
        <Heading>Headers and subheaders</Heading>
        <Text>
          Headers and subheaders have typically tighter line spacing compared to the paragraph
          and are mostly one to three liners. When it comes to font-weight, the smaller the
          font-size gets, the lighter the weights. Headers and subheaders weights ranges from
          700 maximum typically H1-H3 and 500 minimum typically applied to subheaders (H4-H6).
        </Text>
      </Box>
      <Box>
        {[
          ["80px", "Heading 1"],
          ["56px", "Heading 2"],
          ["40px", "Heading 3"],
          ["32px", "Heading 4"],
          ["24px", "Heading 5"],
          ["20px", "Heading 6"],
        ].map(([px, header]) => (
          <Flex>
            <Text>{px}</Text>
            <Heading>{header}</Heading>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

function Paragraphs() {
  return (
    <Box>
      <Heading>Paragraphs</Heading>
      <Text>
        Paragraphs are typically multi-line so we want to give them more breathability.
      </Text>
      <Text>We have three different font-style for each sizes:</Text>
      <UnorderedList>
        <ListItem>Regular</ListItem>
        <ListItem>Italic</ListItem>
        <ListItem>
          <strong>Bold</strong>
        </ListItem>
      </UnorderedList>

      <Box>
        <Image src={browser} alt="" />
        <Heading>Recommended size for web paragraphs is 20px</Heading>
        <Text>
          Type scaling helps with ensuring the typography readability and how will it behave
          from larger screen vs smaller screens.
        </Text>
        <Text>
          <em>
            Type scaling helps with ensuring the typography readability and how will it behave
            from larger screen vs smaller screens.
          </em>
        </Text>
        <Text>
          <strong>
            Type scaling helps with ensuring the typography readability and how will it behave
            from larger screen vs smaller screens.
          </strong>
        </Text>
      </Box>

      {/* <!-- TODO: mobile --> */}
    </Box>
  );
}

function LabelsAndButtons() {
  return (
    <Box>
      <Heading>Labels and Buttons</Heading>
      <Text>
        Buttons and labels should be in their base line height in order to maintain the margins
        and paddings proportion. They are mostly one liner and sometimes two lines. Buttons are
        in most cases one line.
      </Text>
    </Box>
  );
}

import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
import ArrowIcon from "./icons/ArrowIcon";

export default function TypeRoles(props: BoxProps) {
  return (
    <Box mt="250px" {...props}>
      <Heading size="header-2">Type roles</Heading>
      <Text size="paragraph-xxl-default" color="neutrals.700" mt="64px">
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
    <Flex mt="64px" gap="156px">
      <Box maxW="716px">
        <Heading size="header-3">Headers and subheaders</Heading>
        <Text mt="28px" size="paragraph-xxl-default" color="neutrals.700">
          Headers and subheaders have typically tighter line spacing compared to the paragraph and
          are mostly one to three liners.
          <br />
          <br />
          When it comes to font-weight, the smaller the font-size gets, the lighter the weights.
          <br />
          <br />
          Headers and subheaders weights ranges from 700 maximum typically H1-H3 and 500 minimum
          typically applied to subheaders (H4-H6).
        </Text>
      </Box>
      <Flex direction="column" gap="24px" px="64px" py="48px">
        {[
          ["80px", "Heading 1"],
          ["56px", "Heading 2"],
          ["40px", "Heading 3"],
          ["32px", "Heading 4"],
          ["24px", "Heading 5"],
          ["20px", "Heading 6"],
        ].map(([px, header]) => (
          <Flex gap="43px" alignItems="flex-end">
            <Text
              fontFamily="'SF Mono', monospace"
              fontSize="20px"
              lineHeight="24px"
              color="neutrals.700"
            >
              {px}
            </Text>
            <Heading size={header.replace(/ing\s/, "er-").toLowerCase()}>{header}</Heading>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

function Paragraphs() {
  return (
    <Box mt="104px">
      <Heading size="header-3" color="neutrals.800">
        Paragraphs
      </Heading>
      <Box as={Text} size="paragraph-xxl-default" mt="28px" color="neutrals.700">
        <Text>Paragraphs are typically multi-line so we want to give them more breathability.</Text>
        <br />
        <Text>We have three different font-style for each sizes:</Text>
        <br />
        <UnorderedList>
          <ListItem>Regular</ListItem>
          <ListItem>
            <em>Italic</em>
          </ListItem>
          <ListItem>
            <strong>Bold</strong>
          </ListItem>
        </UnorderedList>
      </Box>

      <Flex justifyContent="space-between" mt="69px">
        <Box w="1046px" h="596px" flexShrink={0} position="relative">
          <Box pt="104px" px="48px" pb="44px" position="relative" zIndex={1}>
            <Heading size="header-1">Recommended size for web paragraphs is 20px</Heading>
            <Text size="paragraph-lg-default" mt="48px">
              Type scaling helps with ensuring the typography readability and how will it behave
              from larger screen vs smaller screens.
            </Text>
            <Text size="paragraph-lg-default" mt="16px">
              <em>
                Type scaling helps with ensuring the typography readability and how will it behave
                from larger screen vs smaller screens.
              </em>
            </Text>
            <Text size="paragraph-lg-default" mt="16px">
              <strong>
                Type scaling helps with ensuring the typography readability and how will it behave
                from larger screen vs smaller screens.
              </strong>
            </Text>
          </Box>

          <Image
            src="typography/browser.png"
            alt=""
            width="full"
            height="full"
            position="absolute"
            top={0}
            left={0}
          />
        </Box>

        <Box w="407px" h="460px" flexShrink={0} position="relative">
          <Box position="relative" zIndex={1} pt="62px" px="30px">
            <Text
              size="paragraph-sm-default"
              fontFamily="'SF Mono', monospace"
              color="neutrals.600"
            >
              Recommended size for mobile paragraphs&nbsp;is&nbsp;16px
            </Text>
            <Text size="paragraph-sm-default" letterSpacing="0.02em" mt="18px">
              Type scaling helps with ensuring the typography readability and how will it behave
              from larger screen vs smaller screens.
            </Text>
            <Text size="paragraph-sm-default" letterSpacing="0.02em" mt="18px">
              <em>
                Type scaling helps with ensuring the typography readability and how will it behave
                from larger screen vs smaller screens.
              </em>
            </Text>
            <Text size="paragraph-sm-default" letterSpacing="0.02em" mt="18px">
              <strong>
                Type scaling helps with ensuring the typography readability and how will it behave
                from larger screen vs smaller screens.
              </strong>
            </Text>
          </Box>
          <Image
            src="/typography/iphone.png"
            alt=""
            width="full"
            height="full"
            position="absolute"
            top={0}
            left={0}
          />
        </Box>
      </Flex>
    </Box>
  );
}

function LabelsAndButtons() {
  return (
    <Box mt="104px">
      <Heading size="header-3">Labels and Buttons</Heading>
      <Text mt="28px" size="paragraph-xxl-default" color="neutrals.700">
        Buttons and labels should be in their base line height in order to maintain the margins and
        paddings proportion. They are mostly one liner and sometimes two lines. Buttons are in most
        cases one line.
      </Text>

      <Flex justifyContent="center" mt="64px" columnGap="72px" rowGap="60px" flexWrap="wrap">
        <Recipe />
        <HowToCookLumpia />
        <AdvancedSearch />
        <Buttons />
      </Flex>
    </Box>
  );
}

function Buttons() {
  return (
    <Box>
      <Image w="648px" h="312px" src="/typography/labels-and-buttons-4.png" alt="" />
    </Box>
  );
}

function AdvancedSearch() {
  return (
    <Box>
      <Image w="648px" h="312px" src="/typography/labels-and-buttons-3.png" alt="" />

      <Box mt="54px" ml="140px" position="relative" width="fit-content">
        <Icon
          as={ArrowIcon}
          width="100px"
          height="150px"
          position="absolute"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          marginTop="-160px"
        />
        <Text size="label-xs-default">Label text</Text>
      </Box>
    </Box>
  );
}

function HowToCookLumpia() {
  return (
    <Box>
      <Image w="526px" h="312px" src="/typography/labels-and-buttons-2.png" alt="" />

      <Box mt="54px" ml="155px" position="relative" width="fit-content">
        <Icon
          as={ArrowIcon}
          width="61px"
          height="61px"
          position="absolute"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          marginTop="-70px"
        />
        <Text size="label-xs-default">Label</Text>
      </Box>
    </Box>
  );
}

function Recipe() {
  return (
    <Box>
      <Image src="/typography/labels-and-buttons-1.png" alt="" w="770px" h="362px" />

      <Box pos="relative" mt="37px" ml="250px" width="fit-content">
        <Icon
          as={ArrowIcon}
          width="101px"
          height="101px"
          position="absolute"
          top="0"
          left="50%"
          transform="translateX(-50%)"
          marginTop="-110px"
        />
        <Text size="label-xs-default">Button text</Text>
      </Box>
    </Box>
  );
}

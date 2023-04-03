import { Box, Flex, Heading, Icon, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import * as React from "react";
import ArrowIcon from "./icons/ArrowIcon";

export default function ApplyingColors() {
  return (
    <Box mt="318px">
      <Heading size="header-2">Applying colors to type</Heading>
      <Text size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Our colors and type needs to work well together according to heirarchy, similarity, and
        common region allowing our UI to communicate with the end-users better at glance.
      </Text>

      <Flex justifyContent="center" mt="64px" columnGap="72px" rowGap="60px" flexWrap="wrap">
        <Recipe />
        <HowToCookLumpia />
        <LoginForm />
        <Email />
      </Flex>
    </Box>
  );
}

function Email() {
  return (
    <Box>
      <Image w="526px" h="312px" src="/typography/applying-colors-4.png" alt="" />

      <Box pos="relative" mt="24px" ml="76px" width="fit-content">
        <Flex gap="40px">
          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="84px"
              height="84px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-90px"
            />
            <UnorderedList>
              <ListItem>Hint text</ListItem>
              <ListItem>error/700</ListItem>
            </UnorderedList>
          </Text>

          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="120px"
              height="120px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-126px"
            />
            <UnorderedList>
              <ListItem>Input text</ListItem>
              <ListItem>neutrals/900</ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

function LoginForm() {
  return <Image w="770px" h="362px" src="typography/applying-colors-3.png" alt="" />;
}

function HowToCookLumpia() {
  return (
    <Box>
      <Image w="526px" h="312px" src="/typography/applying-colors-2.png" alt="" />

      <Box pos="relative" mt="55px" ml="110px" width="fit-content">
        <Flex gap="50px">
          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="110px"
              height="110px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-120px"
            />
            <UnorderedList>
              <ListItem>paragraphs mobile base</ListItem>
              <ListItem>neutrals/700</ListItem>
            </UnorderedList>
          </Text>

          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="175px"
              height="175px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-180px"
            />
            <UnorderedList>
              <ListItem>Header 1</ListItem>
              <ListItem>neutrals/900</ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

function Recipe() {
  return (
    <Box>
      <Image src="/typography/applying-colors-1.png" alt="" w="770px" h="362px" />

      <Box pos="relative" mt="55px" ml="140px" width="fit-content">
        <Flex gap="80px">
          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="100px"
              height="100px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-110px"
            />
            <UnorderedList>
              <ListItem>paragraphs web base</ListItem>
              <ListItem>neutrals/700</ListItem>
            </UnorderedList>
          </Text>

          <Text size="label-xs-default" position="relative">
            <Icon
              as={ArrowIcon}
              width="184px"
              height="184px"
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              marginTop="-195px"
            />
            <UnorderedList>
              <ListItem>Header 1</ListItem>
              <ListItem>neutrals/900</ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

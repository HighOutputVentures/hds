import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import CheckCircleIcon from "./icons/CheckCircleIcon";
import CheckDoneIcon from "./icons/CheckDoneIcon";
import SunIcon from "./icons/SunIcon";
import XCircleIcon from "./icons/XCircleIcon";

export default function DosAndDonts() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Do’s and don’ts</Heading>

      <Text size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Iconography is based on proportionality rather than fixed height and width. To achieve
        1:1 ration for icons, it is usually put inside a frame. We use the{" "}
        <Link href="#" color="#8A68EF" textDecor="underline">
          Untitled UI PRO icon pack
        </Link>{" "}
        for our iconography library.
      </Text>

      <Text size="paragraph-xxl-default" mt={8} color="neutrals.700">
        Pairing type with iconography needs to be standardized from color to scales.
      </Text>

      <SimpleGrid mt="64px" px="76px" columns={2} columnGap="72px" rowGap="120px">
        {data.map(({ __do, context, notes }) => {
          return (
            <Box key={notes}>
              <Box
                p="20px"
                border="1px solid"
                borderColor="neutrals.200"
                bgColor="neutrals.100"
                rounded="4px"
              >
                {__do && <Icon as={CheckCircleIcon} w="20px" h="20px" stroke="#00C408" />}
                {!__do && <Icon as={XCircleIcon} w="20px" h="20px" stroke="#DC180C" />}

                <Box mt="100px" mb="calc(140px - 20px)">
                  {context}
                </Box>
              </Box>

              <Text size="label-md-default" mt="32px">
                {notes}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

const data = [
  {
    notes: "Use the same height size for the icons and label",
    context: (
      <BorderedBox>
        <Icon w="32px" h="32px" stroke="neutrals.900" as={CheckDoneIcon} />
        <Text size="label-xl-default" fontWeight="bold">
          Check-ins
        </Text>
      </BorderedBox>
    ),
    __do: true,
  },
  {
    notes: "Use the baseline to middle align the icon and label",
    context: (
      <BorderedBox>
        <Icon w="32px" h="32px" stroke="neutrals.900" as={SunIcon} />
        <Text size="label-xl-default" fontWeight="bold">
          Good morning
        </Text>
      </BorderedBox>
    ),
    __do: true,
  },
  {
    notes: "Do not stretch the icons",
    context: (
      <BorderedBox>
        <Icon
          w="62px"
          h="62px"
          top="50%"
          transform="translateY(-50%)"
          stroke="neutrals.900"
          as={CheckDoneIcon}
          position="absolute"
        />
        <Spacer width="62px" />
        <Text size="label-xl-default" fontWeight="bold">
          Check-ins
        </Text>
      </BorderedBox>
    ),
    __do: false,
  },
  {
    notes: "Do not use the same baseline for both icons and label",
    context: (
      <BorderedBox>
        <Icon
          w="32px"
          h="32px"
          stroke="neutrals.900"
          as={SunIcon}
          position="absolute"
          bottom="-6px"
        />
        <Spacer width="32px" />
        <Text size="label-xl-default" fontWeight="bold">
          Good morning
        </Text>
      </BorderedBox>
    ),
    __do: false,
  },
  {
    notes: "Never compress your type, allow them to breath",
    context: (
      <Box>
        <Heading size="header-3" letterSpacing="-0.08em" textAlign="center">
          This is a sample heading
        </Heading>
        <Text
          w="325px"
          mx="auto"
          mt="12px"
          size="paragraph-xl-default"
          letterSpacing="-0.08em"
          textAlign="center"
        >
          This is a paragraph sample. I am adding more lines here.
        </Text>
      </Box>
    ),
    __do: false,
  },
  {
    notes: "Do not part the characters too far away from each other",
    context: (
      <Box>
        <Heading size="header-3" letterSpacing="0.08em" textAlign="center">
          This is a sample heading
        </Heading>
        <Text
          w="406px"
          mx="auto"
          mt="12px"
          size="paragraph-xl-default"
          letterSpacing="0.08em"
          textAlign="center"
        >
          This is a paragraph sample. I am adding more lines here.
        </Text>
      </Box>
    ),
    __do: false,
  },
];

function BorderedBox({ children, ...props }: FlexProps) {
  return (
    <Flex
      position="relative"
      gap="10px"
      borderTop="2px dashed"
      borderBottom="2px dashed"
      borderColor="#FFAB00"
      width="fit-content"
      mx="auto"
      px="36px"
      {...props}
    >
      {children}
    </Flex>
  );
}

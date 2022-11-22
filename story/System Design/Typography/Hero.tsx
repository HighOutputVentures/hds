import { Box, Heading, Icon, Image, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import * as React from "react";

export default function Hero() {
  return (
    <Box maxWidth="full">
      <Heading size="header-1">Type system</Heading>
      <Text mt={5} size="paragraph-xxl-default" color="neutrals.700">
        Building a robust responsive set of typescale system for designing real products for both
        web and mobile platforms.{" "}
        <Link
          href="https://www.playbook.com/s/hovdesign/CxvyNG1btuHMzu9W5GAFX7a5"
          target="_blank"
          rel="noreferrer"
          color="#75AEE4"
          fontWeight="bold"
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

        <Text mt={16}>Breakpoints - We need to create sets of breakpoints for web and mobile.</Text>
      </Box>

      <Box mt="67px" px="100px" position="relative">
        <Box position="absolute" left="calc(518px + 32px + 100px)" top="80px">
          <Text
            size="button.default"
            transform="rotate(-11.55deg)"
            px="22px"
            py="16px"
            color="neutrals.100"
            bgColor="neutrals.900"
            width="fit-content"
            position="absolute"
            left="139px"
            top="24px"
            rounded="4px"
            fontWeight="medium"
          >
            From `Web` to `Mobile`
          </Text>

          <Icon as={ArrowIcon} width="375px" height="187px" fill="#75AEE4" />
        </Box>
        <Image src="/typography/hero.png" alt="Hero" maxWidth="full" />
      </Box>
    </Box>
  );
}

function ArrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="375"
      height="187"
      viewBox="0 0 375 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M370.113 186.922C370.622 187.136 371.208 186.896 371.422 186.387L374.91 178.09C375.124 177.581 374.884 176.995 374.375 176.781C373.866 176.567 373.28 176.806 373.066 177.315L369.966 184.69L362.591 181.59C362.082 181.376 361.496 181.616 361.282 182.125C361.067 182.634 361.307 183.22 361.816 183.434L370.113 186.922ZM1.20465 16.9788C102.367 -4.16951 178.111 -1.75201 236.699 25.842C295.261 53.4238 336.875 106.253 369.574 186.378L371.426 185.622C338.625 105.246 296.739 51.9092 237.551 24.0327C178.389 -3.83161 102.134 -6.16406 0.795402 15.0211L1.20465 16.9788Z" />
    </svg>
  );
}

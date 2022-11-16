import { Box, BoxProps, Flex, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export default function TypeScaling(props: BoxProps) {
  return (
    <Box mt="250px" {...props}>
      <Heading size="header-2">Type scaling</Heading>

      <Text size="paragraph-xxl-default" color="neutrals.700" mt="64px">
        Headers have typically tighter line height scales compared to the paragraph. We follow
        the 4-point system to compute our typography spacing such as line height, paragaph
        spacing, and character spacing.
      </Text>

      <Flex mt="64px" px="76px" gap="72px">
        {[
          {
            name: "Header formula",
            formula: "fontSize * 1.2 = lineHeight, then round to the nearest 4px",
            multiplier: "Multiplier for headers is 1.2",
          },
          {
            name: "Paragraph formula",
            formula: "fontSize * 1.5 = lineHeight, then round to the nearest 4px",
            multiplier: "Multiplier for paragraph is 1.5",
          },
        ].map((data, index) => (
          <Formula key={index} {...data} />
        ))}
      </Flex>

      <Text mt="64px" size="paragraph-xxl-default" color="neutrals.700">
        We need to create sets of breakpoints for web and mobile. 4 px, 8 px, 16 px, 20 px, ....
        N px
      </Text>

      <Flex mt="64px" gap="72px" px="76px">
        <Example size="web" />
        <Example size="mobile" />
      </Flex>

      <Text mt="64px" size="paragraph-xxl-default" color="neutrals.700">
        To keep the buttons, tags, and labels components proportion according to its baseline,
        we will multiply them with 100%.
      </Text>
    </Box>
  );
}

function Example({ size = "web" }: { size: "web" | "mobile" }) {
  return (
    <Box py="48px" px="64px">
      <Text
        fontFamily="'SF Mono', monospace"
        fontSize="18px"
        lineHeight="21.48px"
        color="neutrals.600"
        {...(size === "mobile" && {
          fontSize: "14px",
          lineHeight: "17px",
        })}
      >
        This is a monospace.sm
      </Text>
      <Heading
        mt="24px"
        size="header-1"
        {...(size === "mobile" && {
          mt: "18px",
          fontSize: "44px",
          lineHeight: "48px",
          letterSpacing: "-0.015em",
        })}
      >
        Header 1 in web
      </Heading>
      <Text
        mt="24px"
        size="paragraph-lg-default"
        {...(size === "mobile" && {
          mt: "18px",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.02em",
        })}
      >
        Type scaling helps with ensuring the typography readability and how will it behave from
        larger screen vs smaller screens.
      </Text>
      <Text
        mt="24px"
        size="label-md-default"
        color="neutrals.700"
        {...(size === "mobile" && {
          mt: "18px",
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em",
        })}
      >
        Header computation: 80px * 1.2 = 96px{" "}
        <Text as="span" color="#8A68EF">
          ~88px
        </Text>
      </Text>
      <Text
        mt="24px"
        size="label-md-default"
        color="neutrals.700"
        {...(size === "mobile" && {
          mt: "18px",
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em",
        })}
      >
        Paragraph computation: 20px * 1.5 = 30px{" "}
        <Text as="span" color="#8A68EF">
          ~32px
        </Text>
      </Text>
    </Box>
  );
}

function Formula({
  name,
  formula,
  multiplier,
}: {
  name: string;
  formula: string;
  multiplier: string;
}) {
  return (
    <Box px="64px" py="48px">
      <Text size="label-lg-default" fontWeight="bold">
        {name}
      </Text>
      <Text size="paragraph-xxl-default" mt="32px" color="neutrals.700">
        {formula}
      </Text>
      <Text size="label-lg-default" mt="32px" color="#8A68EF">
        {multiplier}
      </Text>
    </Box>
  );
}

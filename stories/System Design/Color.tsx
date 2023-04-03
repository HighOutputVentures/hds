import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ThemeProvider from "../../packages/hds/src/components/ThemeProvider";

const Color = () => {
  const colors = [
    { color: "#FCFCFC", name: "neutrals/100 Surface" },
    { color: "#F0F0F0", name: "neutrals/200 Strokes" },
    { color: "#0F0F0F", name: "neutrals/900 Header texts " },
    { color: "#525252", name: "neutrals/700 Paragraphs" },
    { color: "#8A68EF", name: "700 Primary" },
    { color: "#00C408", name: "900 Success " },
    { color: "#DC180C", name: "900 Error" },
    { color: "#FFAB00", name: "900 Warning" },
  ];
  const brandColors = [
    { hex: "4A3880", rgb: "255 56 50", alpha: "900" },
    { hex: "5F48A3", rgb: "255 56 64", alpha: "800" },
    { hex: "8A68EF", rgb: "255 56 94", alpha: "700" },
    { hex: "C3B8E6 ", rgb: "255 20 90 ", alpha: "600" },
    { hex: "EDE8FC", rgb: "255 8 99", alpha: "500" },
  ];
  const neutralColors = [
    { hex: "0F0F0F", rgb: "0 0 6", alpha: "900" },
    { hex: "2E2E2E", rgb: "0 0 18", alpha: "800" },
    { hex: "525252", rgb: "0 0 32", alpha: "700" },
    { hex: "7A7A7A ", rgb: "0 0 48", alpha: "600" },
    { hex: "A3A3A3", rgb: "0 0 64", alpha: "500" },
    { hex: "B8B8B8", rgb: "0 0 72", alpha: "400" },
    { hex: "D6D6D6 ", rgb: "0 0 84", alpha: "300" },
    { hex: "F0F0F0", rgb: "0 0 94", alpha: "200" },
    { hex: "FCFCFC", rgb: "0 0 99", alpha: "100 " },
  ];
  const accentColors = [
    { color: "#57805D", hex: "BAEFC2", rgb: "129 32 50", alpha: "900" },
    { color: "#62A36B", hex: "2E2E2E", rgb: "129 40 64", alpha: "800" },
    { color: "#BAEFC2", hex: "525252", rgb: "129", alpha: "700" },
    { color: "#DEFCE3", hex: "7A7A7A ", rgb: "129  14 99 ", alpha: "600" },
    { color: "#F2FCF4", hex: "A3A3A3", rgb: "129 8 99", alpha: "500" },
    { color: "#2A3880", hex: "2A3880", rgb: "230 67 50", alpha: "900" },
    { color: "#3D50B2", hex: "3D50B3 ", rgb: "230 66 70", alpha: "800" },
    { color: "#4B5FCF", hex: "4B5FCF", rgb: "231 64 81", alpha: "700 " },
    { color: "#CAD2FC", hex: "CAD2FC", rgb: "230 20 99", alpha: "600 " },
    { color: "#E8ECFC", hex: "E8ECFC", rgb: "230 8 99", alpha: "500 " },
    { color: "#804A2E", hex: "80492E", rgb: "21 64 50", alpha: "900" },
    { color: "#C77448", hex: "C77248 ", rgb: "21 64 99", alpha: "800" },
    { color: "#EF9666", hex: "EF9666", rgb: "21 57 94", alpha: "700 " },
    { color: "#FAD1BB", hex: "FAD0BB ", rgb: "21 25 98", alpha: "600 " },
    { color: "#FDF0E9", hex: "A3A3A3", rgb: "21 8 99", alpha: "500 " },
    { color: "#644880", hex: "BAEFC2", rgb: "270 43 50", alpha: "900" },
    { color: "#9068B8", hex: "2E2E2E ", rgb: "270 43 72", alpha: "800" },
    { color: "#C38DF8", hex: "525252", rgb: "270 43 97", alpha: "700 " },
    { color: "#DCBEFA", hex: "7A7A7A  ", rgb: "270 24 98", alpha: "600 " },
    { color: "#F2E8FC", hex: "A3A3A3", rgb: "270 8 99", alpha: "500 " },
  ];
  const interfaceStateColors = [
    { color: "#800C05", hex: "0F0F0F", rgb: "3 96 50", alpha: "900" },
    { color: "#9E241C", hex: "2E2E2E", rgb: "3 82 62", alpha: "800" },
    { color: "#DC180C", hex: "525252", rgb: "4 95 86 ", alpha: "700" },
    { color: "#FCD2CF", hex: "7A7A7A ", rgb: "4 18 99 ", alpha: "600" },
    { color: "#FCEAE8", hex: "A3A3A3", rgb: "4 8 99", alpha: "500" },
    { color: "#008005", hex: "0F0F0F", rgb: "122 100 77", alpha: "900" },
    { color: "#139E19", hex: "2E2E2E", rgb: "122 88 62", alpha: "800" },
    { color: "#00C408", hex: "525252", rgb: "122 100 77 ", alpha: "700" },
    { color: "#A3F0A7", hex: "7A7A7A ", rgb: "122 32 94", alpha: "600" },
    { color: "#E8FCE9", hex: "A3A3A3", rgb: "122 8 99", alpha: "500" },
    { color: "#CC8900", hex: "0F0F0F", rgb: "40 100 80", alpha: "900" },
    { color: "#E59A00", hex: "2E2E2E", rgb: "40 100 90", alpha: "800" },
    { color: "#FFAB00", hex: "525252", rgb: "40 100 100 ", alpha: "700" },
    { color: "#FCDFA2", hex: "7A7A7A ", rgb: "40 36 99", alpha: "600" },
    { color: "#FCEFD4", hex: "A3A3A3", rgb: "40 16 99", alpha: "500" },
  ];
  return (
    <ThemeProvider>
      <Box>
        <Stack direction="row" mb={5}>
          <Text pos="relative" top={-1} size="header-1">
            Color system
          </Text>
        </Stack>
        <Text size="paragraph-xxl-default" mb={50}>
          We use HSB to determine the brand’s primary color palette and the
          100-900 neutral colors.
        </Text>
        <Text size="header-2" marginBottom={"64px"}>
          Color usage
        </Text>
        <Text size="paragraph-xxl-default" mb={"250px"}>
          Our brand colors distinguishes the HOV identity. The Color System is
          composed of multiple color groups: Primary brand color, The neutrals
          which represents our secondary colors, accent colors which are
          composed of 4 set of palettes, green, orange, blue, and violet, and
          lastly, the interface colors which represents our state palettes,
          success, errors, and warning.
        </Text>
        <Text size="header-2" mb={"64px"}>
          Brand palette
        </Text>
        <Text size="paragraph-xxl-default" mb={"50px"}>
          We use{" "}
          <Text as="span" size="paragraph-xxl-default" fontWeight={"bold"}>
            HSB (Hue, Saturation, Brightness)
          </Text>{" "}
          instead of using hex to define our primary palette. It is mostly
          beneficial to standardize and define the light and dark shades of our
          brand primary palette. We need a much more comprehensive set of colors
          to choose from.
        </Text>
        <Text size="paragraph-xxl-default" mb={"50px"}>
          For light, we simply decrease the saturation to ~10 and increase the
          brightness to 99.
        </Text>
        <Text size="paragraph-xxl-default" mb={"100px"}>
          Then for dark, we typically leave the saturation alone and decrease
          the brightness down to ~50.
        </Text>
        <Text size="paragraph-xxl-default" fontWeight={"bold"} mt={15}>
          Standardization
        </Text>
        <Text size="paragraph-xxl-default" mt={5}>
          Use a standard value for saturation and brightness to determine our
          brand primary palettes.
        </Text>
        <Image src={"/mdx-color-assets/brand-palette.svg"} />
        <Text size="paragraph-xxl-default" mt="104px" mb={"100px"}>
          Following the 60/30/10 rule, it allow us to have a unifying criteria
          when applying our brand to UI. This rule guides us how and when to use
          the brand color palettes.
        </Text>
        <Text size="paragraph-xxl-default" fontWeight={"bold"} mb={"24px"}>
          What is the 60-30-10 Rule?
        </Text>
        <Text size="paragraph-xxl-default" mb={"64px"}>
          The 60% of the interface should be the background color 30% should be
          the typography color or texture and 10% should be the brand’s primary
          color.
        </Text>
        <Center w="full">
          <Image src={"/mdx-color-assets/603010.svg"} />
        </Center>
        <Text size="header-2" mt={"367px"} mb="64px">
          Color as a system
        </Text>
        <Text size="paragraph-xxl-default" mb={"150px"}>
          Defining the shades of HDS. Colors are intentional, has meaning, and
          able to communicate.
        </Text>
        <Text size="header-3" mb="28px">
          Color roles
        </Text>
        <Text size="paragraph-xxl-default" mb="28px">
          Light mode
        </Text>
        <Flex
          borderRadius={"16px"}
          border="1px solid #F0F0F0"
          p={"48px"}
          flexWrap={"wrap"}
          gap={"40px"}
          mb={"64px"}
        >
          {colors.map((c) => {
            return (
              <>
                <HStack
                  padding={"12px 20px 12px 12px"}
                  boxShadow={
                    " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
                  }
                  borderRadius="48px"
                  spacing="20px"
                >
                  <Box
                    background={c.color}
                    borderRadius="50%"
                    height={"56px"}
                    width={"56px"}
                  />
                  <Text size="paragraph-xxl-default">{c.name}</Text>
                </HStack>
              </>
            );
          })}
          <HStack
            padding={"12px 20px 12px 12px"}
            boxShadow={
              " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
            }
            borderRadius="48px"
            spacing="20px"
          >
            <Box borderRadius="50%" height={"56px"} width={"56px"}>
              <Image src={"/mdx-color-assets/random-color.svg"} />
            </Box>
            <Text size="paragraph-xxl-default">
              700 accents: green, orange, blue, violet
            </Text>
          </HStack>
        </Flex>
        <Text size="paragraph-xxl-default" mb="28px">
          Dark mode
        </Text>
        <Flex
          borderRadius={"16px"}
          border="1px solid #F0F0F0"
          p={"48px"}
          flexWrap={"wrap"}
          background="#0F0F0F"
          gap={"40px"}
          mb={"150px"}
        >
          {colors.map((c, idx) => {
            return (
              <>
                <HStack
                  padding={"12px 20px 12px 12px"}
                  boxShadow={
                    " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
                  }
                  background="#000000"
                  borderRadius="48px"
                  color={"white"}
                  spacing="20px"
                >
                  <Box
                    background={idx === 2 ? "#FCFCFC" : c.color}
                    borderRadius="50%"
                    height={"56px"}
                    width={"56px"}
                  />
                  <Text size="paragraph-xxl-default">{c.name}</Text>
                </HStack>
              </>
            );
          })}
          <HStack
            padding={"12px 20px 12px 12px"}
            boxShadow={
              " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
            }
            borderRadius="48px"
            spacing="20px"
            background="#000000"
            color={"white"}
          >
            <Box borderRadius="50%" height={"56px"} width={"56px"}>
              <Image src={"/mdx-color-assets/random-color.svg"} />
            </Box>
            <Text size="paragraph-xxl-default">
              700 accents: green, orange, blue, violet
            </Text>
          </HStack>
        </Flex>
        <Text size="header-3" mb="28px">
          Brand colors (Primary)
        </Text>
        <Text size="paragraph-xxl-default" fontWeight={"bold"} mb={"24px"}>
          Single-use of color policy
        </Text>
        <Text size="paragraph-xxl-default" mb={"64px "}>
          We want our brand to be recognizable. With the help of single use of
          color and repition practices, it will boost our brand identity in the
          system. The primary palette{" "}
          <Text
            as="span"
            bg="#8A68EF"
            width={"5px"}
            color="transparent"
            height="3px"
          >
            sa
          </Text>
          #8A68EF is used for primary functionalities.
        </Text>
        <Center w="full">
          <Flex flexWrap={"wrap"} gap={"75px"} mb={"150px"}>
            {brandColors.map((c) => {
              return (
                <>
                  <VStack spacing="12px">
                    <Box
                      background={`#${c.hex}`}
                      borderRadius="8px"
                      height={"140px"}
                      width={"140px"}
                    />
                    <Text>{c.rgb}</Text>
                    <Text>{c.hex}</Text>
                    <Text>{c.alpha}</Text>
                  </VStack>
                </>
              );
            })}
          </Flex>
        </Center>
        <Text size="header-3" mb="28px">
          Neutral colors (Secondary)
        </Text>
        <Text size="paragraph-xxl-default" mb={"32px "}>
          Neutral colors play as the secondary and supporting role in the
          interface. In most use cases we define neutral color scaling from 100
          as the lightest to 900 darkest.
        </Text>
        <Text size="paragraph-xxl-default" mb={"32px "}>
          <Text size="paragraph-xxl-default" fontWeight={"bold"} as="span">
            Standardize the hue
          </Text>{" "}
          - Neutral colors play as the secondary and supporting role in the
          interface. In most use cases we define neutral color scaling from 100
          as the lightest to 900 darkest.
        </Text>
        <Text size="paragraph-xxl-default" mb={"32px "}>
          <Text size="paragraph-xxl-default" fontWeight={"bold"} as="span">
            Computation
          </Text>{" "}
          - I just changed the brightness and stick with the 8-grid system
          counting for me systematically determine the range.
        </Text>
        <VStack w="full" mb="150px">
          <HStack>
            <Flex flexWrap={"wrap"} gap={"75px"} mb={"150px"}>
              {neutralColors.map((c) => {
                return (
                  <>
                    <VStack spacing="12px">
                      <Box
                        background={`#${c.hex}`}
                        borderRadius="8px"
                        height={"140px"}
                        width={"140px"}
                      />
                      <Text>{c.rgb}</Text>
                      <Text>{c.hex}</Text>
                      <Text>{c.alpha}</Text>
                    </VStack>
                  </>
                );
              })}
            </Flex>
            <Image src={"/mdx-color-assets/sample-image.svg"} />
          </HStack>
          <Flex width="full" gap="80px">
            <Box
              p="32px 32px 25px 32px"
              border="1px solid #F0F0F0"
              borderRadius={"16px"}
            >
              <Text
                color="neutrals.900"
                mb="24px"
                fontSize={"32px"}
                lineHeight="39px"
                fontWeight="700"
              >
                This is 900 header text AAA
              </Text>
              <Text
                color="neutrals.700"
                mb="18px"
                fontSize={"24px"}
                lineHeight="32px"
                fontWeight="700"
              >
                This is a 700 subheaders, paragraph, and/or body text AA
              </Text>
              <Text color="neutrals.500" fontSize={"16px"} lineHeight="24px">
                This is a 500 mostly text that has lowest contrast mainly use
                for placeholder and disabled states
              </Text>
            </Box>
            <Box
              p="32px 32px 25px 32px"
              border="1px solid #F0F0F0"
              borderRadius={"16px"}
              bg="neutrals.900"
            >
              <Text
                color="neutrals.100"
                mb="24px"
                fontSize={"32px"}
                lineHeight="39px"
                fontWeight="700"
              >
                This is 100 header text AAA
              </Text>
              <Text
                color="neutrals.300"
                mb="18px"
                fontSize={"24px"}
                lineHeight="32px"
                fontWeight="700"
              >
                This is a 700 subheaders, paragraph, and/or body text AA
              </Text>
              <Text color="neutrals.600" fontSize={"16px"} lineHeight="24px">
                This is a 500 mostly text that has lowest contrast mainly use
                for placeholder and disabled states
              </Text>
            </Box>
          </Flex>
        </VStack>
        <Text size="header-3" mb="28px">
          Accent colors (Tertiary)
        </Text>
        <Text size="paragraph-xxl-default" mb={"48px"}>
          This set of colors will accentuate the overall brand colors and are
          used sparingly. <br /> <br /> The accent{" "}
          <Text
            as="span"
            bg="#BAEFC2"
            width={"5px"}
            color="transparent"
            height="3px"
          >
            sa
          </Text>
          #BAEFC2 is used to back up and accentuate the primary. While other
          colors{" "}
          <Text
            as="span"
            bg="#4B5FCF"
            width={"5px"}
            color="transparent"
            height="3px"
          >
            sa
          </Text>
          ##FD915B,{" "}
          <Text
            as="span"
            bg="#FD915B"
            width={"5px"}
            color="transparent"
            height="3px"
          >
            sa
          </Text>
          #FD915B,{" "}
          <Text
            as="span"
            bg="#C38DF8"
            width={"5px"}
            color="transparent"
            height="3px"
          >
            sa
          </Text>
          #C38DF8 are helper colors which can act as a product specification
          colors. <br /> <br />
          Accent colors are supplementary colors that typically contrast or
          complement the primary colors used in a room. Accent colors are used
          for emphasis, to enhance a color scheme, or to liven up or add drama
          to an otherwise monochromatic space. src
        </Text>
        <Center w="full">
          <Flex flexWrap={"wrap"} gap={"75px"} mb={"150px"}>
            {accentColors.map((c) => {
              return (
                <>
                  <VStack spacing="12px">
                    <Box
                      background={c.color}
                      borderRadius="8px"
                      height={"140px"}
                      width={"140px"}
                    />
                    <Text>{c.rgb}</Text>
                    <Text>{c.hex}</Text>
                    <Text>{c.alpha}</Text>
                  </VStack>
                </>
              );
            })}
          </Flex>
        </Center>
        <Text size="header-3" mb="28px">
          Interface state colors
        </Text>
        <Text size="paragraph-xxl-default" mb={"32px "}>
          It is important to define the state colors for errors, warning, and
          success. Keeping the{" "}
          <Text size="paragraph-xxl-default" fontWeight={"bold"} as="span">
            Hue
          </Text>{" "}
          value standardized with your primary colors will be helpful with your
          color decision making. Colors describes the result of the acton taken
        </Text>
        <Text size="paragraph-xxl-default" mb={"32px "}>
          Applications and websites use red/green/yellow to indicate states.
        </Text>
        <UnorderedList>
          <ListItem>
            <Text size="paragraph-xxl-default" mb={"32px "}>
              Red - Error
            </Text>{" "}
          </ListItem>
          <ListItem>
            <Text size="paragraph-xxl-default" mb={"32px "}>
              Green - Success/Progress
            </Text>
          </ListItem>
          <ListItem>
            <Text size="paragraph-xxl-default" mb={"32px "}>
              Yellow - Warning
            </Text>
          </ListItem>
        </UnorderedList>
        <Center w="full">
          <Flex flexWrap={"wrap"} gap={"75px"} mb={"250px"}>
            {interfaceStateColors.map((c) => {
              return (
                <>
                  <VStack spacing="12px">
                    <Box
                      background={c.color}
                      borderRadius="8px"
                      height={"140px"}
                      width={"140px"}
                    />
                    <Text color={c.alpha === "700" ? c.color : "black"}>
                      {c.rgb}
                    </Text>
                    <Text color={c.alpha === "700" ? c.color : "black"}>
                      {c.hex}
                    </Text>
                    <Text color={c.alpha === "700" ? c.color : "black"}>
                      {c.alpha}
                    </Text>
                  </VStack>
                </>
              );
            })}
          </Flex>
        </Center>
        <VStack height={"212px"} spacing="28px" align={"start"} justify="end">
          <Text size="header-2">Is this document helpful?</Text>
          <Text size="paragraph-xxl-default">
            Give us some feedback for us to improve it at design@hov.co
          </Text>
        </VStack>
      </Box>
    </ThemeProvider>
  );
};

export default Color;

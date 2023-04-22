import { Box, BoxProps, Flex, Heading, Text, TextProps } from '@chakra-ui/react';

export default function EnsuringReadability() {
  return (
    <Box mt="250px">
      <Heading size="header-2">Ensuring readability</Heading>
      <Text size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Make sure that we do not put restraints on the viewers and readers eyes by
        limiting the line length. Line length is the minimum and maximum width of a
        paragraph content.
      </Text>
      <Text size="paragraph-xxl-default" mt={8} color="neutrals.700">
        Ideally, the ideal width contains 60-100 characters per line but we want to limit
        according to container width instead. It is rather convenient when it comes to
        creating breakpoints of our interface.
      </Text>

      <Box py="60px">
        <Flex
          direction="column"
          gap="24px"
          mt="64px"
          position="relative"
          pt="calc(48px + 44px)"
          pb="48px"
        >
          <Overlay1 />

          {data1.map(({ label, width }, idx) => {
            return (
              <Flex key={idx} gap="100px" color="neutrals.700">
                <Text size="label-lg-default" fontWeight="bold" width="170px">
                  {label}
                </Text>
                <Text size="paragraph-xl-default" width={width + 'px'}>
                  Far far away, behind the word mountains, far from the countries Vokalia
                  and Consonantia, there live the blind texts. Separated they live in
                  Bookmarksgrove right at the coast of the Semantics, a large language
                  ocean. A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country, in which
                  roasted parts of sentences fly into your mouth.
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Text ml="206px" mt="32px" size="paragraph-xxl-default" color="neutrals.700">
          For longer lines, the ideal line length for smallest desktop screen dimension is
          960px
        </Text>
      </Box>

      <Box py="60px">
        <Flex
          direction="column"
          gap="24px"
          mt="64px"
          position="relative"
          pt="calc(48px + 44px)"
          pb="48px"
        >
          <Overlay2 />

          {data2.map(({ label, width }, idx) => {
            return (
              <Flex key={idx} gap="100px" color="neutrals.700">
                <Text size="label-lg-default" fontWeight="bold" width="170px">
                  {label}
                </Text>
                <Text size="paragraph-xl-default" width={width + 'px'}>
                  Far far away, behind the word mountains, far from the countries Vokalia
                  and Consonantia, there live.
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <Text ml="206px" mt="32px" size="paragraph-xxl-default" color="neutrals.700">
          For shorter lines, the ideal line length for smallest desktop screen dimension
          is 500 px.
        </Text>
      </Box>
    </Box>
  );
}

function Overlay2() {
  return (
    <Box position="absolute" left="270px" h="full" right="0" top={0}>
      <OverlayItem w="250px" left={0} borderLeft="1px solid #DC180C">
        <OverlayItemLabel>0</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem
        w="250px"
        left="250px"
        bgColor="#E8FCE9"
        borderLeft="1px solid #DC180C"
        borderRight="1px solid #00C408"
      >
        <OverlayItemLabel>250px</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem w="300px" left="500px" borderRight="1px solid #DC180C">
        <OverlayItemLabel>500px</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem left="800px">
        <OverlayItemLabel>800px</OverlayItemLabel>
      </OverlayItem>
    </Box>
  );
}

function Overlay1() {
  return (
    <Box position="absolute" left="270px" h="full" right="0" top={0}>
      <OverlayItem w="500px" left={0} borderLeft="1px solid #DC180C">
        <OverlayItemLabel>0</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem
        w="300px"
        left="500px"
        bgColor="#FCEFD4"
        borderLeft="1px solid #DC180C"
        borderRight="1px solid #FFAB00"
      >
        <OverlayItemLabel>500px</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem
        w="160px"
        left="800px"
        borderRight="1px solid #00C408"
        bgColor="#E8FCE9"
      >
        <OverlayItemLabel>800px</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem w="226px" left="960px" borderRight="1px solid #DC180C">
        <OverlayItemLabel>960px</OverlayItemLabel>
      </OverlayItem>
      <OverlayItem right="0" left="1186px">
        <OverlayItemLabel>1186px</OverlayItemLabel>
      </OverlayItem>
    </Box>
  );
}

function OverlayItem({ children, bgColor, borderLeft, borderRight, ...props }: BoxProps) {
  return (
    <Box h="full" top={0} left={0} position="absolute" zIndex={9} {...props}>
      <Box
        w="full"
        h="full"
        top={0}
        left={0}
        position="absolute"
        bgColor={bgColor}
        borderLeft={borderLeft}
        borderRight={borderRight}
        opacity={0.5}
      />
      {children}
    </Box>
  );
}

function OverlayItemLabel({ children, ...props }: TextProps) {
  return (
    <Text
      position="absolute"
      width="80px"
      textAlign="center"
      size="label-md-default"
      color="neutrals.900"
      top={0}
      left={0}
      mt="-32px"
      ml="-40px"
      {...props}
    >
      {children}
    </Text>
  );
}

const data1 = [
  {
    label: 'Too narrow',
    width: 500,
  },
  {
    label: 'Okay range',
    width: 800,
  },
  {
    label: 'Ideal range',
    width: 960,
  },
  {
    label: 'Too wide',
    width: 1186,
  },
];

const data2 = [
  { label: 'Too narrow', width: 250 },
  { label: 'Ideal range', width: 500 },
  { label: 'Too wide', width: 800 },
];

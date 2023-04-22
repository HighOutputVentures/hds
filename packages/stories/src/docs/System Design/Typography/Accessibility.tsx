import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function Accessibility() {
  return (
    <Box mt="252px">
      <Heading size="header-2">Accessibility</Heading>

      <Text size="paragraph-xxl-default" mt="64px" color="neutrals.700">
        Headers and subheaders have typically tighter letter spacing compared to the
        paragraph.
      </Text>

      <TableContainer mt="64px">
        <Table
          variant="unstyled"
          sx={{
            tableLayout: 'fixed',
            th: {
              textTransform: 'none',
            },
          }}
        >
          <Thead>
            <Tr
              sx={{
                th: {
                  textAlign: 'center',
                  fontSize: '32px',
                  fontWeight: 'normal',
                  lineHeight: '32px',
                  color: '#8A68EF',
                },
              }}
            >
              <Th width="600px">Scale</Th>
              <Th>Weight</Th>
              <Th>Letter space</Th>
              <Th>Line height</Th>
            </Tr>
          </Thead>
          <Tbody
            sx={{
              tr: {
                padding: 0,
                td: {
                  _notFirst: {
                    textAlign: 'center',
                    color: 'neutrals.700',
                  },
                },
              },
            }}
          >
            {headers.map(({ scale, weight, letterSpace, lineHeight, __size }, idx) => {
              return (
                <Tr
                  key={idx}
                  sx={{
                    td: {
                      paddingY: '32px',
                      paddingRight: '48px',
                      paddingLeft: 0,
                      _notFirst: {
                        paddingLeft: '48px',
                        fontSize: '32px',
                        lineHeight: '32px',
                      },
                    },
                  }}
                >
                  <Td>
                    <Text size={__size} w="480px" whiteSpace="normal">
                      {scale}
                    </Text>
                  </Td>
                  <Td>{weight}</Td>
                  <Td>{letterSpace}</Td>
                  <Td>{lineHeight}</Td>
                </Tr>
              );
            })}

            <Tr h="100px">
              <Td colSpan={4} />
            </Tr>

            {paragraphs.map(({ scale, weight, letterSpace, lineHeight, __size }, idx) => {
              return (
                <Tr
                  key={idx}
                  sx={{
                    td: {
                      paddingY: '18px',
                      paddingRight: '48px',
                      paddingLeft: 0,
                      _notFirst: {
                        paddingLeft: '48px',
                        fontSize: '32px',
                        lineHeight: '32px',
                      },
                    },
                  }}
                >
                  <Td>
                    <Text size={__size} w="480px" whiteSpace="normal">
                      {scale}
                    </Text>
                  </Td>
                  <Td>{weight}</Td>
                  <Td>{letterSpace}</Td>
                  <Td>{lineHeight}</Td>
                </Tr>
              );
            })}

            <Tr h="100px">
              <Td colSpan={4} />
            </Tr>

            {labels.map(({ scale, weight, letterSpace, lineHeight, __size }, idx) => {
              return (
                <Tr
                  key={idx}
                  sx={{
                    td: {
                      paddingY: '12px',
                      paddingRight: '48px',
                      paddingLeft: 0,
                      _notFirst: {
                        paddingLeft: '48px',
                        fontSize: '20px',
                        lineHeight: '20px',
                      },
                    },
                  }}
                >
                  <Td>
                    <Text size={__size} w="480px" whiteSpace="normal">
                      {scale}
                    </Text>
                  </Td>
                  <Td>{weight}</Td>
                  <Td>{letterSpace}</Td>
                  <Td>{lineHeight}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Box mt="100px">
        <Flex gap="211px">
          <Text size="button-default">buttons.default</Text>
          <Text size="label-md-default">18 * 100% = 18px</Text>
        </Flex>
        <Flex mt="44px" gap="124px">
          <Text size="button-uppercase">buttons.uppercase</Text>
          <Text size="label-md-default">
            18 * 100% = 18px
            <br />
            <br />
            5% letter space
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

const headers = [
  {
    scale: 'Header 1',
    weight: 'Bold',
    lineHeight: '88px',
    letterSpace: '-2%',
    __size: 'header-1',
  },
  {
    scale: 'Header 2',
    weight: 'Bold',
    lineHeight: '64px',
    letterSpace: '-2%',
    __size: 'header-2',
  },
  {
    scale: 'Header 3',
    weight: 'Bold',
    lineHeight: '44px',
    letterSpace: '-2%',
    __size: 'header-3',
  },
  {
    scale: 'Header 4',
    weight: 'Medium',
    lineHeight: '36px',
    letterSpace: '-1.5%',
    __size: 'header-4',
  },
  {
    scale: 'Header 5',
    weight: 'Medium',
    lineHeight: '28px',
    letterSpace: '-1.5%',
    __size: 'header-5',
  },
  {
    scale: 'Header 6',
    weight: 'Medium',
    lineHeight: '24px',
    letterSpace: '-1.5%',
    __size: 'header-6',
  },
];

const paragraphs = [
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '48px',
    letterSpace: '0%',
    __size: 'paragraph-xxl-default',
  },
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '36px',
    letterSpace: '0%',
    __size: 'paragraph-xl-default',
  },
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '32px',
    letterSpace: '0%',
    __size: 'paragraph-lg-default',
  },
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '28px',
    letterSpace: '2%',
    __size: 'paragraph-md-default',
  },
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '24px',
    letterSpace: '2%',
    __size: 'paragraph-sm-default',
  },
  {
    scale: 'Paragraph is usually multi-line so add more breathability.',
    weight: 'Regular',
    lineHeight: '20px',
    letterSpace: '2%',
    __size: 'paragraph-xs-default',
  },
];

const labels = [
  {
    scale: 'label.xl.default',
    weight: 'Regular',
    lineHeight: '32px',
    letterSpace: '0%',
    __size: 'label-xl-default',
  },
  {
    scale: 'label.lg.default',
    weight: 'Regular',
    lineHeight: '28px',
    letterSpace: '0%',
    __size: 'label-lg-default',
  },
  {
    scale: 'label.md.default',
    weight: 'Regular',
    lineHeight: '20px',
    letterSpace: '0%',
    __size: 'label-md-default',
  },
  {
    scale: 'label.sm.default',
    weight: 'Regular',
    lineHeight: '18px',
    letterSpace: '0%',
    __size: 'label-sm-default',
  },
  {
    scale: 'label.xs.default',
    weight: 'Regular',
    lineHeight: '14px',
    letterSpace: '2%',
    __size: 'label-xs-default',
  },
  {
    scale: 'label.xxs.default',
    weight: 'Regular',
    lineHeight: '12px',
    letterSpace: '2%',
    __size: 'label-xxs-default',
  },
];

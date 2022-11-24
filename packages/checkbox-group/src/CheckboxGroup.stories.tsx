import { Badge, Box, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import CheckboxGroup from "./CheckboxGroup";
import CogIcon from "./examples/CogIcon";
// @ts-ignore
import { ThemeProvider } from "@highoutput/hds/src";

export default {
  title: "Components/CheckboxGroup",
  argTypes: {
    disabled: {
      name: "disabled",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: false,
      control: "boolean",
    },
    size: {
      name: "size",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "md",
      control: "select",
      options: ["sm", "md"],
    },
  },
} as Meta;

const Template: ComponentStory<any> = ({ size, disabled }) => {
  const items = [{ id: 1 }, { id: 2 }];

  return (
    <ThemeProvider>
      <VStack align="stretch" spacing={8} maxWidth="400px">
        <CheckboxGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
        >
          {({ item, getProps, selected }) => {
            const { container, radio, icon } = getProps({ disabled });

            const shouldAddIndigoStyle = selected && !disabled;

            return (
              <HStack spacing={4} key={item.id} {...container}>
                <Box {...icon}>
                  <Icon as={CogIcon} />
                </Box>

                <Box flexGrow={1}>
                  <Text
                    color="#0F0F0F"
                    fontSize="14px"
                    lineHeight="14px"
                    letterSpacing="0.02em"
                    fontWeight="medium"
                    {...(shouldAddIndigoStyle && {
                      color: "#4A3880",
                    })}
                  >
                    Basic plan{" "}
                    <Box
                      as="span"
                      lineHeight="20px"
                      color="#525252"
                      fontWeight="normal"
                      {...(shouldAddIndigoStyle && {
                        color: "#8A68EF",
                      })}
                    >
                      $10/month
                    </Box>
                  </Text>
                  <Text
                    fontSize="14px"
                    color="neutrals.600"
                    {...(shouldAddIndigoStyle && {
                      color: "#8A68EF",
                    })}
                  >
                    Includes up to 10 users, 20GB indiviual data and access to all features.
                  </Text>
                </Box>

                <Box {...radio} alignSelf="start" />
              </HStack>
            );
          }}
        </CheckboxGroup>

        <CheckboxGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
          variant="square"
        >
          {({ item, getProps, selected }) => {
            const { container, radio } = getProps({ disabled });
            const shouldAddIndigoStyle = selected && !disabled;

            return (
              <HStack spacing={4} key={item.id} {...container}>
                <Box {...radio} alignSelf="start" />

                <Box flexGrow={1}>
                  <Text
                    color="#0F0F0F"
                    fontSize="14px"
                    lineHeight="14px"
                    letterSpacing="0.02em"
                    fontWeight="medium"
                    {...(shouldAddIndigoStyle && {
                      color: "#4A3880",
                    })}
                  >
                    Basic plan{" "}
                    <Box
                      as="span"
                      lineHeight="20px"
                      color="#525252"
                      fontWeight="normal"
                      {...(shouldAddIndigoStyle && {
                        color: "#8A68EF",
                      })}
                    >
                      $10/month
                    </Box>
                  </Text>
                  <Text
                    fontSize="14px"
                    {...(shouldAddIndigoStyle && {
                      color: "#8A68EF",
                    })}
                  >
                    Includes up to 10 users, 20GB indiviual data and access to all features.
                  </Text>
                </Box>
              </HStack>
            );
          }}
        </CheckboxGroup>

        <CheckboxGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
          variant="dot"
        >
          {({ item, getProps, selected }) => {
            const { container, radio } = getProps({ disabled });

            const shouldAddIndigoStyle = selected && !disabled;

            return (
              <HStack spacing={4} key={item.id} {...container} align="start">
                <Box>
                  <Image src="/visa.png" />
                </Box>

                <Box flexGrow={1}>
                  <Text
                    fontSize="16px"
                    lineHeight="24px"
                    letterSpacing="0.02em"
                    color="#0F0F0F"
                    {...(shouldAddIndigoStyle && { color: "#4A3880" })}
                  >
                    Visa ending in 1234
                  </Text>
                  <Text
                    fontSize="14px"
                    lineHeight="14px"
                    color="#7A7A7A"
                    letterSpacing="0.02em"
                    {...(shouldAddIndigoStyle && { color: "#8A68EF" })}
                  >
                    Expiry 06/2024
                  </Text>
                  <HStack
                    mt="12px"
                    spacing="12px"
                    align="start"
                    fontSize="12px"
                    lineHeight="12px"
                    letterSpacing="0.02em"
                  >
                    <Box color="#7A7A7A" {...(shouldAddIndigoStyle && { color: "#8A68EF" })}>
                      Set as default
                    </Box>
                    <Box
                      color="#4A3880"
                      fontWeight="medium"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        alert("Clicked");
                      }}
                    >
                      Edit
                    </Box>
                  </HStack>
                </Box>

                <Box {...radio} />
              </HStack>
            );
          }}
        </CheckboxGroup>

        <CheckboxGroup
          size={size}
          value={[items[0]]}
          items={items}
          compareFn={({ id }) => id}
          onChange={() => {}}
          multiple
          variant="circle"
        >
          {({ item, getProps, selected }) => {
            const { container, radio, icon } = getProps({ disabled });

            return (
              <Box key={item.id} {...container} padding={0}>
                <HStack spacing={3} align="center" p="12px" pr="22px">
                  <Box {...icon}>
                    <Icon as={CogIcon} />
                  </Box>

                  <Text
                    flexGrow={1}
                    fontSize="14px"
                    lineHeight="14px"
                    letterSpacing="0.02em"
                    color="#4A3880"
                    fontWeight="medium"
                  >
                    Basic plan
                  </Text>

                  <Box {...radio} />
                </HStack>

                <Box
                  p="12px"
                  borderTop="1px solid"
                  borderColor="#EAECF0"
                  {...(selected &&
                    !disabled && {
                      borderColor: "#8A68EF",
                    })}
                >
                  <Badge
                    bgColor="#ECFDF3"
                    color="#027A48"
                    padding="2px, 10px, 2px, 10px"
                    rounded="16px"
                    textTransform="unset"
                    fontSize="14px"
                    lineHeight="14px"
                    letterSpacing="0.02em"
                    fontWeight="400"
                    {...(disabled && {
                      color: "#344054",
                      bgColor: "#F2F4F7",
                    })}
                  >
                    Limited time only
                  </Badge>

                  <Box mt="18px">
                    <HStack>
                      <Heading fontSize="32px" lineHeight="32px" color="#0F0F0F">
                        $10
                      </Heading>
                      <Text
                        color="#7A7A7A"
                        fontSize="14px"
                        lineHeight="14px"
                        letterSpacing="0.02em"
                      >
                        per month
                      </Text>
                    </HStack>

                    <Text
                      mt="9px"
                      color="#525252"
                      fontSize="14px"
                      lineHeight="14px"
                      letterSpacing="0.02em"
                    >
                      Includes up to 10 users, 20GB indiviual data and access to all features.
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          }}
        </CheckboxGroup>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

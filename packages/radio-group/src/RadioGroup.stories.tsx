import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import CogIcon from "./examples/CogIcon";
import RadioGroup from "./RadioGroup";
// @ts-ignore
import { ThemeProvider } from "../../hds/src";

export default {
  title: "Components/RadioGroup",
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
        <RadioGroup
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
        </RadioGroup>

        <RadioGroup
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
        </RadioGroup>

        <RadioGroup
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
        </RadioGroup>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

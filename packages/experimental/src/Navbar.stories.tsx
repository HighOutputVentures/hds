import { AspectRatio, Box, Flex, Image, SimpleGrid, ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import ExampleLogo from "./examples/Logo";
import Navbar from "./Navbar";

export default {
  title: "Components/Expiremental/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta;

const Template: ComponentStory<typeof Navbar> = () => {
  return (
    <ThemeProvider>
      <Box height="600px" overflowY="scroll" rounded="md" border="1px solid" borderColor="gray.200">
        <Navbar paddingX={6} paddingY={4}>
          <ExampleLogo />

          <Box
            as="nav"
            sx={{
              li: {
                listStyle: "none",
              },
            }}
          >
            <Flex as="ul" gap={4}>
              <Box as="li">About</Box>
              <Box as="li">Services</Box>
              <Box as="li">Blog</Box>
              <Box as="li">Contact</Box>
            </Flex>
          </Box>
        </Navbar>

        <Box as="main" padding={8}>
          <SimpleGrid columns={2} spacing={4}>
            {images.map((image) => (
              <Box key={image}>
                <AspectRatio ratio={16 / 9}>
                  <Image src={image} alt="" />
                </AspectRatio>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="footer" paddingX={6} paddingY={4} borderTop="1px solid" borderColor="gray.100">
          <Text fontSize="sm">&copy; HOV {new Date().getFullYear()}</Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const images = [
  "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/127673/pexels-photo-127673.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export const Default = Template.bind({});
Default.args = {};

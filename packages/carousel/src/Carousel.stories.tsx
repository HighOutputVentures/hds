import { AspectRatio, Box, ChakraProvider, extendTheme, Image } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import * as React from "react";
import Carousel from "./Carousel";
import withCarousel from "./withCarousel";

export default {
  title: "Components/Carousel",
  argTypes: {
    size: {
      name: "size",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "md",
      control: "select",
      options: ["md", "lg"],
    },
    variant: {
      name: "variant",
      type: {
        name: "variant",
        required: false,
      },
      defaultValue: "dot",
      control: "radio",
      options: ["dot", "dash"],
    },
    isSwipeable: {
      name: "isSwipeable",
      type: {
        name: "isSwipeable",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    autoPlay: {
      name: "autoPlay",
      type: {
        name: "autoPlay",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    loop: {
      name: "loop",
      type: {
        name: "loop",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
    wrapIndicator: {
      name: "wrapIndicator",
      type: {
        name: "wrapIndicator",
        required: false,
      },
      defaultValue: true,
      control: "boolean",
    },
  },
};

const Template: ComponentStory<typeof Carousel> = (args) => {
  return (
    <ChakraProvider theme={extendTheme(withCarousel())}>
      <Box>
        <Carousel
          size={args.size}
          loop={args.loop}
          autoPlay={args.autoPlay}
          isSwipeable={args.isSwipeable}
          variant={args.variant}
          wrapIndicator={args.wrapIndicator}
          items={[
            {
              image:
                "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              image:
                "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              image:
                "https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ]}
          width="600px"
        >
          {({ image }) => (
            <AspectRatio height="350px" ratio={16 / 9}>
              <Image src={image} alt="" />
            </AspectRatio>
          )}
        </Carousel>
      </Box>
    </ChakraProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};

import { ThemeProvider, Button, Box, Flex } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import SlideoutMenu, { SlideoutMenuRef } from './SlideoutMenu';

export default {
  title: 'Components/Slideout Menu',
  component: SlideoutMenu,
} as ComponentMeta<typeof SlideoutMenu>;

const Template: ComponentStory<typeof SlideoutMenu> = (args) => {
  const menuRef = useRef<SlideoutMenuRef>();

  return (
    <ThemeProvider>
      <SlideoutMenu
        {...args}
        ref={menuRef}
        triggerContent="Open menu"
        header="Slideout Menu"
        footer={
          <Flex gap={2}>
            <Button
              variant="outline-primary"
              onClick={() => menuRef.current?.onClose()}
            >
              Cancel
            </Button>
            <Button
              variant="solid-primary"
              onClick={() => menuRef.current?.onClose()}
            >
              Save
            </Button>
          </Flex>
        }
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu
          lorem, tempor pulvinar lorem sit amet, semper cursus neque. Praesent
          vel imperdiet urna, at venenatis lectus. Suspendisse potenti.
          Curabitur turpis est, interdum quis metus ut, mollis dapibus lacus.
          Morbi luctus, leo maximus ultricies auctor, lorem nibh pharetra magna,
          mollis ultricies turpis sapien non libero. Maecenas lorem sapien,
          iaculis sed tincidunt nec, pharetra nec dolor. Quisque ultricies, elit
          sed tristique rhoncus, velit dui gravida mauris, eget aliquet nunc
          lectus id ex. Nullam iaculis gravida justo, vel efficitur velit
          finibus sed. Donec laoreet odio eget tortor porttitor, eget interdum
          neque imperdiet. Suspendisse eget elit non sem condimentum mattis
          vitae non odio. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Suspendisse venenatis felis magna, vel sollicitudin mi
          tincidunt eu.
        </Box>
      </SlideoutMenu>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};

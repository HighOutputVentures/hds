import { Box, Flex, ThemeProvider } from '@highoutput/hds';
import { Button } from '@highoutput/hds-forms';
import { SlideoutMenu } from '@highoutput/hds-slideout-menu';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Slideout Menu',
  component: SlideoutMenu,
} as Meta<typeof SlideoutMenu>;

const Template: StoryFn<typeof SlideoutMenu> = (args) => {
  return (
    <ThemeProvider>
      <SlideoutMenu
        {...args}
        renderTrigger={({ onOpen }) => {
          return <Button onClick={onOpen}>Open</Button>;
        }}
        renderHeader={<Box p={3}>Slideout Menu</Box>}
        renderFooter={({ onClose }) => {
          return (
            <Flex gap={2} p={3}>
              <Button accent="gray" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose}>Save</Button>
            </Flex>
          );
        }}
      >
        <Box p={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu lorem, tempor
          pulvinar lorem sit amet, semper cursus neque. Praesent vel imperdiet urna, at
          venenatis lectus. Suspendisse potenti. Curabitur turpis est, interdum quis metus
          ut, mollis dapibus lacus. Morbi luctus, leo maximus ultricies auctor, lorem nibh
          pharetra magna, mollis ultricies turpis sapien non libero. Maecenas lorem
          sapien, iaculis sed tincidunt nec, pharetra nec dolor. Quisque ultricies, elit
          sed tristique rhoncus, velit dui gravida mauris, eget aliquet nunc lectus id ex.
          Nullam iaculis gravida justo, vel efficitur velit finibus sed. Donec laoreet
          odio eget tortor porttitor, eget interdum neque imperdiet. Suspendisse eget elit
          non sem condimentum mattis vitae non odio. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Suspendisse venenatis felis magna, vel sollicitudin mi
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

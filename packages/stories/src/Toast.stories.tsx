import { Box, HStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Button } from '@highoutput/hds-forms';
import { useToast } from '@highoutput/hds-toast';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta = {
  title: 'Components/Toast',
  argTypes: {},
};

export default Story;

const Template: StoryFn<any> = () => {
  const toast = useToast();

  return (
    <ThemeProvider>
      <HStack align="start" spacing={4}>
        <Button
          variant="outline"
          accent="gray"
          width="100px"
          onClick={() => {
            toast.success('This is a success toast');
          }}
        >
          Success
        </Button>
        <Button
          variant="outline"
          accent="gray"
          width="100px"
          onClick={() => {
            toast.error('This is an error toast.');
          }}
        >
          Error
        </Button>
        <Button
          variant="outline"
          accent="gray"
          width="100px"
          onClick={() => {
            toast.custom(
              <Box p={4} borderWidth="1px" rounded="4px" borderColor="neutrals.200">
                This is an error toast.
              </Box>,
            );
          }}
        >
          Custom
        </Button>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};

import { Flex, ThemeProvider } from '@highoutput/hds';
import { FileUpload, ProgressBox } from '@highoutput/hds-file-upload';
import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/File Upload/File Upload',
  component: FileUpload,
} as Meta<typeof FileUpload>;

const Template: StoryFn<typeof FileUpload> = (args) => {
  const [files, setFiles] = useState([]);

  return (
    <ThemeProvider>
      <Flex justify="center">
        <FileUpload
          {...args}
          onChange={(event) => Promise.resolve(setFiles(event.target.files))}
        />
      </Flex>

      {!!(files as File[])?.length && (
        <Flex justify="center">
          <ProgressBox file={files} onDelete={(): void => setFiles([])} value={80} />
        </Flex>
      )}
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  accepts: '.png, .gif, .jpeg, .svg',
};

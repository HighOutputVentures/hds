import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import { Flex, ThemeProvider } from '@highoutput/hds';
import ProgressBox from '../ProgressBox/ProgressBox';

export default {
  title: 'Components/File Upload/File Upload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
  const [files, setFiles] = useState([]);

  return (
    <ThemeProvider>
      <Flex justify="center">
        <FileUpload
          {...args}
          onChange={(event) => Promise.resolve(setFiles(event.target.files))}
        />
      </Flex>

      {(files as File[])?.length ? (
        <Flex justify="center">
          <ProgressBox
            file={files}
            onDelete={(): void => setFiles([])}
            value={80}
          />
        </Flex>
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  accepts: '.png, .gif, .jpeg, .svg',
};

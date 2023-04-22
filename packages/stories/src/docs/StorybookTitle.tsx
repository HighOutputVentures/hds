import { Text } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import React from 'react';

interface StorybookTitleProps {
  title: string;
}

const StorybookTitle: React.FC<StorybookTitleProps> = ({ title }) => {
  return (
    <ThemeProvider>
      <Text size="header-4">{title}</Text>
    </ThemeProvider>
  );
};

export default StorybookTitle;

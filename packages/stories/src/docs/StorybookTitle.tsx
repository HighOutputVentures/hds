import { Text } from '@chakra-ui/react';
import React from 'react';

interface StorybookTitleProps {
  title: string;
}

const StorybookTitle: React.FC<StorybookTitleProps> = ({ title }) => {
  return <Text size="header-4">{title}</Text>;
};

export default StorybookTitle;

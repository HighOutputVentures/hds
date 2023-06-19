import { StyleConfig } from '@chakra-ui/react';
import { Text } from './text';

export const Heading: StyleConfig = {
  sizes: Text.sizes,
  defaultProps: {
    size: 'header-6',
  },
};

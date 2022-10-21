import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ChevronRightIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="32px" height="32px" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </Icon>
);

export default ChevronRightIcon;

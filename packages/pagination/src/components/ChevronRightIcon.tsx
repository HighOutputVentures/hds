import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ChevronRightIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="32px" height="32px" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M7.5 15L12.5 10L7.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronRightIcon;

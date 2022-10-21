import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ChevronLeftIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="32px" height="32px" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronLeftIcon;

import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const CheckIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M16.6668 5L7.50016 14.1667L3.3335 10"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default CheckIcon;

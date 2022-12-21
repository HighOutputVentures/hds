import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ChevronLeftIcon: FC<IconProps> = (props) => (
  <Icon
    width={4}
    height={4}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </Icon>
);

export default ChevronLeftIcon;

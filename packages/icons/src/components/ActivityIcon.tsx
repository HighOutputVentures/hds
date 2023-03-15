import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ActivityIcon: FC<IconProps> = (props) => (
  <Icon
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.3332 9H14.9998L12.4998 16.5L7.49984 1.5L4.99984 9H1.6665"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export default ActivityIcon;

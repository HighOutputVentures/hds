import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const UserIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M13.3334 14C13.3334 13.0696 13.3334 12.6044 13.2186 12.2259C12.9601 11.3736 12.2931 10.7067 11.4408 10.4482C11.0623 10.3333 10.5971 10.3333 9.66675 10.3333H6.33342C5.40304 10.3333 4.93785 10.3333 4.55932 10.4482C3.70705 10.7067 3.04011 11.3736 2.78157 12.2259C2.66675 12.6044 2.66675 13.0696 2.66675 14M11.0001 5C11.0001 6.65685 9.65694 8 8.00008 8C6.34323 8 5.00008 6.65685 5.00008 5C5.00008 3.34315 6.34323 2 8.00008 2C9.65694 2 11.0001 3.34315 11.0001 5Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default UserIcon;

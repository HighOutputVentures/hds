import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const UserPlusIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.99992 10.3333H4.99992C4.06954 10.3333 3.60435 10.3333 3.22582 10.4482C2.37356 10.7067 1.70661 11.3736 1.44808 12.2259C1.33325 12.6044 1.33325 13.0696 1.33325 14M12.6666 14V10M10.6666 12H14.6666M9.66659 5C9.66659 6.65685 8.32344 8 6.66659 8C5.00973 8 3.66659 6.65685 3.66659 5C3.66659 3.34315 5.00973 2 6.66659 2C8.32344 2 9.66659 3.34315 9.66659 5Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default UserPlusIcon;

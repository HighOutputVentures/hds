import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const SearchIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M16.6668 5L7.50016 14.1667L3.3335 10"
      stroke="#8A68EF"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default SearchIcon;

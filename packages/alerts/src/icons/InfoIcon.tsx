import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const InfoIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="20px" height="20px" viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M10.0001 13.3334V10M10.0001 6.66669H10.0084M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z"
      stroke="#4A3880"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default InfoIcon;

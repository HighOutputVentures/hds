import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const HovIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="32px" height="32px" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M0 32L3.55556 28.4444V32H0ZM14.2222 32V26.6667L10.6667 30.2222V32H7.11111V24.8889L10.6667 21.3333V24.8889V26.6667L14.2222 23.1111V17.7778L17.7778 14.2222V17.7778V24.8889V32H14.2222ZM28.4444 17.7778V10.6667V7.11111L24.8889 10.6667V17.7778V28.4444H28.4444V17.7778ZM28.4444 32H24.8889H21.3333V17.7778V10.6667L24.8889 7.11111L28.4444 3.55556L32 0V3.55556V10.6667V17.7778V32H28.4444Z"
      fill="currentColor"
    />
  </Icon>
);

export default HovIcon;

import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const UploadIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="46px" height="46px" viewBox="0 0 46 46" fill="none" {...props}>
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#C3B8E6" />
    <path
      d="M19.6667 26.3333L23 23M23 23L26.3333 26.3333M23 23V30.5M29.6667 26.9524C30.6846 26.1117 31.3333 24.8399 31.3333 23.4167C31.3333 20.8854 29.2813 18.8333 26.75 18.8333C26.5679 18.8333 26.3976 18.7383 26.3051 18.5814C25.2184 16.7374 23.212 15.5 20.9167 15.5C17.4649 15.5 14.6667 18.2982 14.6667 21.75C14.6667 23.4718 15.3629 25.0309 16.4891 26.1613"
      stroke="#4A3880"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="3"
      y="3"
      width="40"
      height="40"
      rx="20"
      stroke="#EDE8FC"
      stroke-width="6"
    />
  </Icon>
);

export default UploadIcon;

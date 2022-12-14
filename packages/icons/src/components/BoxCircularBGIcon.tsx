import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const BoxCircularBGIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="46px" height="46px" viewBox="0 0 46 46" fill="none" {...props}>
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#F0F0F0" />
    <g clip-path="url(#clip0_1135_2054)">
      <path
        d="M23 20.5L16.3866 24.7988C15.8134 25.1714 15.5268 25.3577 15.4275 25.5939C15.3408 25.8004 15.3408 26.033 15.4275 26.2395M23 20.5L29.6135 24.7988C30.1867 25.1714 30.4733 25.3577 30.5725 25.5939C30.6593 25.8004 30.6593 26.033 30.5725 26.2395M23 20.5V15.0834M23 25.5L16.3866 21.2013C15.8134 20.8287 15.5268 20.6424 15.4275 20.4062C15.3408 20.1997 15.3408 19.967 15.4275 19.7606M23 25.5L29.6135 21.2013C30.1867 20.8287 30.4733 20.6424 30.5725 20.4062C30.6593 20.1997 30.6593 19.967 30.5725 19.7606M23 25.5V30.9167M30.7267 26.311L23.7267 30.861C23.4637 31.032 23.3321 31.1175 23.1904 31.1507C23.0652 31.1801 22.9348 31.1801 22.8096 31.1507C22.6679 31.1175 22.5364 31.032 22.2734 30.861L15.2734 26.311C15.0517 26.167 14.9409 26.0949 14.8606 25.9988C14.7895 25.9137 14.7361 25.8154 14.7035 25.7094C14.6667 25.5897 14.6667 25.4575 14.6667 25.1931V20.8069C14.6667 20.5426 14.6667 20.4104 14.7035 20.2907C14.7361 20.1847 14.7895 20.0863 14.8606 20.0012C14.9409 19.9052 15.0517 19.8331 15.2734 19.689L22.2734 15.139C22.5364 14.9681 22.6679 14.8826 22.8096 14.8493C22.9348 14.8199 23.0652 14.8199 23.1904 14.8493C23.3321 14.8826 23.4637 14.9681 23.7267 15.139L30.7267 19.689C30.9483 19.8331 31.0592 19.9052 31.1395 20.0012C31.2106 20.0863 31.264 20.1847 31.2965 20.2907C31.3334 20.4104 31.3334 20.5426 31.3334 20.8069V25.1931C31.3334 25.4575 31.3334 25.5897 31.2965 25.7094C31.264 25.8154 31.2106 25.9137 31.1395 25.9988C31.0592 26.0949 30.9483 26.167 30.7267 26.311Z"
        stroke="#2E2E2E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <rect
      x="3"
      y="3"
      width="40"
      height="40"
      rx="20"
      stroke="#FCFCFC"
      stroke-width="6"
    />
    <defs>
      <clipPath id="clip0_1135_2054">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(13 13)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export default BoxCircularBGIcon;
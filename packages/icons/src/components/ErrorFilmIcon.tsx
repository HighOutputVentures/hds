import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ErrorFilmIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 36 36" fill="none" {...props}>
    <rect x="2" y="2" width="32" height="32" rx="16" fill="#FCD2CF" />
    <g clip-path="url(#clip0_1175_100240)">
      <path
        d="M18 24.6666V11.3333M14.6667 24.6666V21.3333M14.6667 14.6666V11.3333M21.3333 24.6666V21.3333M21.3333 14.6666V11.3333M11.3333 14.6666H24.6667M11.3333 21.3333H24.6667M24.6667 21.4666V14.5333C24.6667 13.4132 24.6667 12.8532 24.4487 12.4253C24.2569 12.049 23.951 11.743 23.5746 11.5513C23.1468 11.3333 22.5868 11.3333 21.4667 11.3333L14.5333 11.3333C13.4132 11.3333 12.8532 11.3333 12.4253 11.5513C12.049 11.743 11.7431 12.049 11.5513 12.4253C11.3333 12.8532 11.3333 13.4132 11.3333 14.5333L11.3333 21.4666C11.3333 22.5868 11.3333 23.1468 11.5513 23.5746C11.7431 23.951 12.049 24.2569 12.4253 24.4487C12.8532 24.6666 13.4132 24.6666 14.5333 24.6666H21.4667C22.5868 24.6666 23.1468 24.6666 23.5746 24.4487C23.951 24.2569 24.2569 23.951 24.4487 23.5746C24.6667 23.1468 24.6667 22.5868 24.6667 21.4666Z"
        stroke="#DC180C"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <rect
      x="2"
      y="2"
      width="32"
      height="32"
      rx="16"
      stroke="#FCEAE8"
      stroke-width="4"
    />
    <defs>
      <clipPath id="clip0_1175_100240">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(10 10)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export default ErrorFilmIcon;

import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ErrorFileIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 36 36" fill="none" {...props}>
    <rect x="2" y="2" width="32" height="32" rx="16" fill="#FCD2CF" />
    <path
      d="M19.3333 11.513V14.2666C19.3333 14.64 19.3333 14.8267 19.406 14.9693C19.4699 15.0947 19.5719 15.1967 19.6973 15.2607C19.84 15.3333 20.0266 15.3333 20.4 15.3333H23.1537M23.3333 16.6588V21.4666C23.3333 22.5868 23.3333 23.1468 23.1154 23.5746C22.9236 23.951 22.6176 24.2569 22.2413 24.4487C21.8135 24.6666 21.2534 24.6666 20.1333 24.6666H15.8667C14.7466 24.6666 14.1865 24.6666 13.7587 24.4487C13.3824 24.2569 13.0764 23.951 12.8847 23.5746C12.6667 23.1468 12.6667 22.5868 12.6667 21.4666V14.5333C12.6667 13.4132 12.6667 12.8532 12.8847 12.4253C13.0764 12.049 13.3824 11.743 13.7587 11.5513C14.1865 11.3333 14.7466 11.3333 15.8667 11.3333H18.0079C18.497 11.3333 18.7416 11.3333 18.9718 11.3886C19.1759 11.4376 19.371 11.5184 19.5499 11.628C19.7517 11.7517 19.9247 11.9247 20.2706 12.2706L22.3961 14.3961C22.742 14.742 22.9149 14.9149 23.0386 15.1167C23.1483 15.2957 23.2291 15.4908 23.2781 15.6948C23.3333 15.925 23.3333 16.1696 23.3333 16.6588Z"
      stroke="#DC180C"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="2"
      width="32"
      height="32"
      rx="16"
      stroke="#FCEAE8"
      strokeWidth="4"
    />
  </Icon>
);

export default ErrorFileIcon;

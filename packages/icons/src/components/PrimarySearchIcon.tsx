import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const PrimarySearchIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={4}
      height={4}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#F4EBFF" />
      <path
        d="M35.5 35.5L32.5834 32.5833M34.6667 27.5833C34.6667 31.4954 31.4954 34.6667 27.5833 34.6667C23.6713 34.6667 20.5 31.4954 20.5 27.5833C20.5 23.6713 23.6713 20.5 27.5833 20.5C31.4954 20.5 34.6667 23.6713 34.6667 27.5833Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F9F5FF" strokeWidth="8" />
    </Icon>
  );
};

export default PrimarySearchIcon;

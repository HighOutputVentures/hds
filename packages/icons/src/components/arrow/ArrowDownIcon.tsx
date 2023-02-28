import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const ArrowDownIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={4}
      height={4}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99992 3.33325V12.6666M7.99992 12.6666L12.6666 7.99992M7.99992 12.6666L3.33325 7.99992"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowDownIcon;

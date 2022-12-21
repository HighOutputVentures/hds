import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const ChevronDownIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={4}
      height={4}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </Icon>
  );
};

export default ChevronDownIcon;

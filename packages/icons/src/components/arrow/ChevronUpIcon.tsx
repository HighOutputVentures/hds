import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const ChevronUpIcon: React.FC<IconProps> = (props) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </Icon>
  );
};

export default ChevronUpIcon;

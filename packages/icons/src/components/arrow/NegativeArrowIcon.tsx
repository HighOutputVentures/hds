import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const NegativeArrowIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={4}
      height={4}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 4.16669V15.8334M10 15.8334L15.8333 10M10 15.8334L4.16667 10"
        stroke="#DC180C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default NegativeArrowIcon;

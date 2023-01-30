import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const ArrowLeftIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={5}
      height={5}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.8334 9.99996H4.16675M4.16675 9.99996L10.0001 15.8333M4.16675 9.99996L10.0001 4.16663"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowLeftIcon;

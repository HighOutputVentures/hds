import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const PositiveArrowIcon: React.FC<IconProps> = (props) => {
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
        d="M10 15.8334V4.16669M10 4.16669L4.16666 10M10 4.16669L15.8333 10"
        stroke="#00C408"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PositiveArrowIcon;

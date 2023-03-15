import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const SwitchHorizontalIcon: FC<IconProps> = (props) => (
  <Icon
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.6668 13.1667H1.3335M1.3335 13.1667L4.66683 9.83333M1.3335 13.1667L4.66683 16.5M1.3335 4.83333H14.6668M14.6668 4.83333L11.3335 1.5M14.6668 4.83333L11.3335 8.16667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export default SwitchHorizontalIcon;

import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ThreeDots: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M10.0001 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.5398 10.4603 9.16671 10.0001 9.16671C9.53984 9.16671 9.16675 9.5398 9.16675 10C9.16675 10.4603 9.53984 10.8334 10.0001 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 5.00004C10.4603 5.00004 10.8334 4.62694 10.8334 4.16671C10.8334 3.70647 10.4603 3.33337 10.0001 3.33337C9.53984 3.33337 9.16675 3.70647 9.16675 4.16671C9.16675 4.62694 9.53984 5.00004 10.0001 5.00004Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8334C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8334C9.16675 16.2936 9.53984 16.6667 10.0001 16.6667Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ThreeDots;

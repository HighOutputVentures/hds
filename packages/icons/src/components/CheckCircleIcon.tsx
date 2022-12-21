import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const CheckCircleIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M6.25008 9.99996L8.75008 12.5L13.7501 7.49996M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default CheckCircleIcon;

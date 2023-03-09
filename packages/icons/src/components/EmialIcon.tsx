import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const EmailIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M1.33333 2.66675L6.77661 6.47704C7.21739 6.78559 7.43778 6.93986 7.6775 6.99962C7.88926 7.0524 8.11073 7.0524 8.32249 6.99962C8.56221 6.93986 8.7826 6.78559 9.22338 6.47704L14.6667 2.66675M4.53333 11.3334H11.4667C12.5868 11.3334 13.1468 11.3334 13.5746 11.1154C13.951 10.9237 14.2569 10.6177 14.4487 10.2414C14.6667 9.81357 14.6667 9.25352 14.6667 8.13341V3.86675C14.6667 2.74664 14.6667 2.18659 14.4487 1.75877C14.2569 1.38244 13.951 1.07648 13.5746 0.884735C13.1468 0.666748 12.5868 0.666748 11.4667 0.666748H4.53333C3.41322 0.666748 2.85317 0.666748 2.42535 0.884735C2.04902 1.07648 1.74306 1.38244 1.55132 1.75877C1.33333 2.18659 1.33333 2.74664 1.33333 3.86675V8.13341C1.33333 9.25352 1.33333 9.81357 1.55132 10.2414C1.74306 10.6177 2.04902 10.9237 2.42535 11.1154C2.85317 11.3334 3.41322 11.3334 4.53333 11.3334Z"
      stroke="#A3A3A3"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default EmailIcon;
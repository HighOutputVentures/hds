import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ZapIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8.66674 1.33337L2.72904 8.45861C2.4965 8.73766 2.38023 8.87718 2.37846 8.99502C2.37691 9.09745 2.42256 9.19491 2.50224 9.2593C2.5939 9.33337 2.77552 9.33337 3.13876 9.33337H8.00007L7.3334 14.6667L13.2711 7.54147C13.5036 7.26243 13.6199 7.1229 13.6217 7.00507C13.6232 6.90263 13.5776 6.80517 13.4979 6.74078C13.4062 6.66671 13.2246 6.66671 12.8614 6.66671H8.00007L8.66674 1.33337Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default ZapIcon;

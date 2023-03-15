import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const CoinsIcon: FC<IconProps> = (props) => (
  <Icon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.41735 3.33317C9.46947 2.30218 10.9104 1.6665 12.4998 1.6665C15.7215 1.6665 18.3332 4.27818 18.3332 7.49984C18.3332 9.08928 17.6975 10.5303 16.6665 11.5824M6.24984 10.8332L7.49984 9.99984V14.5832M6.24984 14.5832H8.74984M13.3332 12.4998C13.3332 15.7215 10.7215 18.3332 7.49984 18.3332C4.27818 18.3332 1.6665 15.7215 1.6665 12.4998C1.6665 9.27818 4.27818 6.6665 7.49984 6.6665C10.7215 6.6665 13.3332 9.27818 13.3332 12.4998Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export default CoinsIcon;

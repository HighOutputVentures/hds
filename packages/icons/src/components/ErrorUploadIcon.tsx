import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ErrorUploadIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 36 36" fill="none" {...props}>
    <rect x="2" y="2" width="32" height="32" rx="16" fill="#FCD2CF" />
    <path
      d="M15.3333 20.6667L18 18M18 18L20.6667 20.6667M18 18V24M23.3333 21.1619C24.1477 20.4894 24.6667 19.472 24.6667 18.3333C24.6667 16.3083 23.025 14.6667 21 14.6667C20.8543 14.6667 20.718 14.5907 20.6441 14.4652C19.7747 12.9899 18.1696 12 16.3333 12C13.5719 12 11.3333 14.2386 11.3333 17C11.3333 18.3774 11.8903 19.6247 12.7913 20.529"
      stroke="#DC180C"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="2" y="2" width="32" height="32" rx="16" stroke="#FCEAE8" strokeWidth="4" />
  </Icon>
);

export default ErrorUploadIcon;

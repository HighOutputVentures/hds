import { Button as ChakraButton } from '@chakra-ui/react';
import React, { FC, ReactNode, useId } from 'react';

import { ButtonSizeTypes } from '../../theme/components/button/sizes';
import { ButtonVariantsTypes } from '../../theme/components/button/variants';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariantsTypes;
  size?: ButtonSizeTypes;
  onClicked?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const uid = useId();

  return (
    <ChakraButton {...props} data-testid={`${uid}-button`}>
      {props.children}
    </ChakraButton>
  );
};

export default Button;

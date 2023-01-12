import { Button as ChakraButton } from '@chakra-ui/react';
import React, { ReactNode, forwardRef, useId } from 'react';

import { ButtonSizeTypes } from '../../theme/components/button/sizes';
import { ButtonVariantsTypes } from '../../theme/components/button/variants';

export interface ButtonProps {
  children: ReactNode;
  dataTestid: string;
  variant?: ButtonVariantsTypes;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  size?: ButtonSizeTypes;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const uid = useId();

  return (
    <ChakraButton {...props} ref={ref} data-testid={`${uid}-button`}>
      {props.children}
    </ChakraButton>
  );
});

export default Button;

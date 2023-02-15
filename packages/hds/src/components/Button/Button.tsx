import { Button as ChakraButton } from '@chakra-ui/react';
import React, { ReactNode, forwardRef } from 'react';

import { ButtonSizeTypes } from '../../theme/components/button/sizes';
import { ButtonVariantsTypes } from '../../theme/components/button/variants';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariantsTypes;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  size?: ButtonSizeTypes;
  type?: 'button' | 'reset' | 'submit';
  __testId?: string;
  onClick?: () => void;
  disabled?: boolean;
  block?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ block, ...props }, ref) => {
  const { __testId } = props;

  return (
    <ChakraButton
      {...props}
      ref={ref}
      data-testid={__testId ?? `hds.button`}
      {...(block && { width: 'full', flex: 1 })}
    >
      {props.children}
    </ChakraButton>
  );
});

export default Button;

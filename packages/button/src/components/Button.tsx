import { Button as ChakraButton } from '@chakra-ui/react';
import React, { ReactNode, forwardRef } from 'react';
import { ButtonSizeTypes } from '@highoutput/hds/src/theme/components/button/sizes';
import { ButtonVariantsTypes } from '@highoutput/hds/src/theme/components/button/variants';

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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ block, __testId, ...props }, ref) => {
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
  }
);

export default Button;

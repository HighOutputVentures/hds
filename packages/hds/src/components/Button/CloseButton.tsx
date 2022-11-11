import { CloseIcon } from '@chakra-ui/icons';
import { Button, Icon, ThemingProps } from '@chakra-ui/react';
import React from 'react';

export interface CloseButtonProps {
  onClicked?: () => void;
  variant?: ThemingProps<'Button'>['variant'];
  size?: ThemingProps<'Button'>['size'];
  disabled?: boolean;
}

const CloseButton = (props: Omit<CloseButtonProps, 'children'>) => {
  const { disabled, variant, size, onClicked } = props;

  return (
    <Button
      size={size ?? 'button-close-sm'}
      variant={variant ?? 'solid-close-btn'}
      isDisabled={disabled}
      data-testid="close.btn"
      onClick={onClicked}
    >
      <Icon as={CloseIcon} />
    </Button>
  );
};

export default CloseButton;

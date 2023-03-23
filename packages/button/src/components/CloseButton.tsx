import { CloseIcon } from '@chakra-ui/icons';
import { Button, Icon } from '@chakra-ui/react';
import React from 'react';

import { CloseButtonSizeTypes } from '@highoutput/hds/src/theme/components/button/sizes';
import { CloseButtonVariantTypes } from '@highoutput/hds/src/theme/components/button/variants';

export interface CloseButtonProps {
  onClicked?: () => void;
  variant?: CloseButtonVariantTypes;
  size?: CloseButtonSizeTypes;
  disabled?: boolean;
  __testId?: string;
}

const CloseButton = (props: Omit<CloseButtonProps, 'children'>) => {
  const { disabled, variant, size, onClicked, __testId } = props;

  return (
    <Button
      size={size ?? 'button-close-sm'}
      variant={variant ?? 'solid-close-btn'}
      isDisabled={disabled}
      data-testid={__testId ?? 'hds.close.btn'}
      onClick={onClicked}
    >
      <Icon as={CloseIcon} />
    </Button>
  );
};

export default CloseButton;

import { chakra, Icon } from '@chakra-ui/react';
import * as React from 'react';
import CloseIcon from '../icons/CloseIcon';

export const ClearButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(function ClearButton(props, ref) {
  return (
    <chakra.button
      type="button"
      ref={ref}
      height={5}
      width={5}
      rounded="md"
      display="none"
      alignItems="center"
      justifyContent="center"
      bgColor="blackAlpha.200"
      color="blackAlpha.600"
      transition="colors 300ms ease-in-out"
      pointerEvents="all"
      _hover={{
        color: 'blackAlpha.700',
      }}
      tabIndex={-1}
      {...props}
    >
      <Icon as={CloseIcon} width={4} height={4} />
    </chakra.button>
  );
});

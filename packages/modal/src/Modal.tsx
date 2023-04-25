import {
  As,
  Box,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import { Button } from '@highoutput/hds-forms';
import * as React from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';

type Align = 'left' | 'center' | 'right';

type BaseProps = Pick<
  ChakraModalProps,
  | 'children'
  | 'isCentered'
  | 'closeOnEsc'
  | 'closeOnOverlayClick'
  | 'blockScrollOnMount'
  | 'lockFocusAcrossFrames'
  | 'preserveScrollBarGap'
>;

export interface ModalProps extends BaseProps {
  size?: Size;
  icon?: As;
  title?: React.ReactNode;
  align?: Align;
  isOpen?: boolean;
  onClose?(): void;
  onConfirm?(): void;
  isLoading?: boolean;
  /**
   *
   * If set to `false`, button will be hidden.
   * If set to `string`, it will be used as label.
   * If set to `true`, will show the button with the default label
   *
   * @default
   * "Okay"
   *
   */
  closeButton?: string | boolean;
  /**
   *
   * If set to `false`, button will be hidden.
   * If set to `string`, it will be used as label.
   * If set to `true`, will show the button with the default label
   *
   * @default
   * false
   *
   */
  confirmButton?: string | boolean;
}

const sizeMap = {
  xs: 'sm',
  sm: 'lg',
  md: '3xl',
  lg: '6xl',
};

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    size = 'sm',
    align,
    icon,
    title,
    isOpen = false,
    isLoading = false,
    onClose = noop,
    onConfirm = noop,
    children,
    closeButton = 'Close',
    confirmButton = false,
    ...others
  } = Object.assign(
    {
      closeOnEsc: false,
      closeOnOverlayClick: false,
      blockScrollOnMount: true,
      preserveScrollBarGap: true,
      lockFocusAcrossFrames: true,
    },
    props,
  );

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const shouldShowFooter = !!closeButton || !!confirmButton;

  return (
    <ChakraModal
      size={sizeMap[size]}
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={closeButtonRef}
      {...others}
    >
      <ModalOverlay bgColor="rgba(52, 64, 84, 0.7)" backdropFilter="blur(8px)" />

      <ModalContent textAlign={align} data-testid="hds.modal">
        <ModalCloseButton />
        <ModalHeader>
          {!!icon && (
            <Box
              sx={{
                pl: '4',
                pt: '4',
                ...(align === 'right' && {
                  mr: 5,
                  mt: 7,
                }),
              }}
              data-testid="hds.modal.icon"
            >
              <Icon as={icon} width="48px" height="48px" />
            </Box>
          )}

          <Box data-testid="hds.modal.title">{title}</Box>
        </ModalHeader>

        <ModalBody data-testid="hds.modal.body">{children}</ModalBody>

        {shouldShowFooter && (
          <ModalFooter display="flex" width="full" justifyContent="flex-end" gap={4}>
            {!!closeButton && (
              <Button
                ref={closeButtonRef}
                onClick={onClose}
                flexGrow={1}
                accent="gray"
                variant="outline"
                isDisabled={isLoading}
                __testId="hds.modal.close-button"
              >
                {typeof closeButton === 'string' ? closeButton : 'Okay'}
              </Button>
            )}

            {!!confirmButton && (
              <Button
                flexGrow={1}
                onClick={onConfirm}
                isLoading={isLoading}
                __testId="hds.modal.submit-button"
              >
                {typeof confirmButton === 'string' ? confirmButton : 'Confirm'}
              </Button>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

function noop() {}

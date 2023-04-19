import {
  As,
  Box,
  Flex,
  Icon,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Button } from '@highoutput/hds-forms';
import * as React from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';

type Align = 'left' | 'center' | 'right';

export interface ModalProps {
  size?: Size;
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  okText?: string;
  closeText?: string;
  isLoading?: boolean;
  align?: Align;
  icon?: As<any>;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const sizeMap = {
  xs: 'sm',
  sm: 'lg',
  md: '3xl',
  lg: '6xl',
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onOk,
  okText,
  closeText = 'Close',
  isLoading,
  size = 'sm',
  align,
  icon,
  title,
  children,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size={sizeMap[size]}>
      <ModalOverlay
        bgColor="rgba(52, 64, 84, 0.7)"
        backdropFilter="blur(8px)"
      />

      <ModalContent textAlign={align} data-testid="hds.modal">
        {icon && (
          <Box
            pl="4"
            pt="4"
            {...(align === 'right' && { mr: 5, mt: 7 })}
            data-testid="hds.modal.icon"
          >
            <Icon as={icon} width="48px" height="48px" />
          </Box>
        )}

        <Box flex={1}>
          <ModalCloseButton />
          <ModalHeader data-testid="hds.modal.header">{title}</ModalHeader>
          <ModalBody data-testid="hds.modal.body">{children}</ModalBody>

          {okText && (
            <ModalFooter>
              <Flex w="full" justifyContent="flex-end" gap={4}>
                <Button
                  onClick={onClose}
                  flexGrow={1}
                  accent="gray"
                  variant="outline"
                  isDisabled={isLoading}
                  __testId="hds.modal-close.button"
                >
                  {closeText}
                </Button>

                <Button
                  flexGrow={1}
                  onClick={onOk}
                  isLoading={isLoading}
                  __testId="hds.modal-submit.button"
                >
                  {okText}
                </Button>
              </Flex>
            </ModalFooter>
          )}
        </Box>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;

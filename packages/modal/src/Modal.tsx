import React, { FC, ReactNode } from 'react';
import { Button } from '@highoutput/hds';
import {
  As,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Icon,
  Spacer,
} from '@chakra-ui/react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
  okText?: string;
  closeText?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  align?: 'left' | 'center' | 'right';
  icon?: As<any>;
  title?: ReactNode;
  children?: ReactNode;
}

const sizes = {
  xs: 'sm',
  sm: 'lg',
  md: '3xl',
  lg: '6xl',
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onOk,
  okText = 'Ok',
  closeText = 'Close',
  size = 'sm',
  align,
  icon,
  title,
  children,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size={sizes[size]}>
      <ModalOverlay />
      <ModalContent textAlign={align}>
        {icon && (
          <Box pl="4" pt="4" {...(align === 'right' && { mr: 5, mt: 7 })}>
            <Icon as={icon} width="48px" height="48px" />
          </Box>
        )}
        <Box flex={1}>
          <ModalCloseButton />
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Flex w="full" justifyContent="flex-end">
              <Button onClick={onClose} block variant="outline-primary">
                {closeText}
              </Button>
              <Spacer maxW="4" />
              <Button onClick={onOk} block variant="solid-primary">
                {okText}
              </Button>
            </Flex>
          </ModalFooter>
        </Box>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;

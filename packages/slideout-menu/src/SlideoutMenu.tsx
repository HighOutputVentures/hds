import React, { forwardRef, ReactNode, useImperativeHandle } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  ButtonProps,
} from '@chakra-ui/react';

export interface SlideoutMenuRef {
  onClose: () => void;
  onOpen: () => void;
}

export interface SlideoutMenuProps {
  children?: ReactNode;
  triggerContent: ReactNode;
  triggerProps?: ButtonProps;
  header?: ReactNode;
  footer?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

type Ref = SlideoutMenuRef | undefined | null;

const SlideoutMenu = forwardRef<Ref, SlideoutMenuProps>(
  ({ header, children, footer, triggerContent, triggerProps, size }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useImperativeHandle(
      ref,
      () => ({
        onClose,
        onOpen,
      }),
      []
    );

    return (
      <>
        <Button {...triggerProps} onClick={onOpen}>
          {triggerContent}
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
          <DrawerOverlay />
          <DrawerContent data-testid="hds.slideout.content">
            <DrawerCloseButton size="sm" color="gray.500" />

            <DrawerHeader fontSize="md" px={3} data-testid="hds.slideout.header">
              {header}
            </DrawerHeader>

            <DrawerBody fontSize="sm" px={3} data-testid="hds.slideout.body">
              {children}
            </DrawerBody>

            <DrawerFooter borderTopWidth={1} borderTopColor="gray.100" data-testid="hds.slideout.footer" px={3}>
              {footer}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
);

export default SlideoutMenu;

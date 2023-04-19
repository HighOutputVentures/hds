import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import * as React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

type RenderComponent = (props: UseDisclosureReturn) => React.ReactNode;

export interface SlideoutMenuProps {
  size?: Size;
  children?: RenderComponent | React.ReactNode;
  renderTrigger: RenderComponent;
  renderHeader?: RenderComponent | React.ReactNode;
  renderFooter?: RenderComponent | React.ReactNode;
}

export const SlideoutMenu = ({
  size,
  children,
  renderHeader,
  renderFooter,
  renderTrigger,
}: SlideoutMenuProps) => {
  const disclosure = useDisclosure();

  return (
    <>
      {renderTrigger(disclosure)}

      <Drawer
        size={size}
        placement="right"
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
      >
        <DrawerOverlay
          bgColor="rgba(52, 64, 84, 0.7)"
          backdropFilter="blur(8px)"
        />

        <DrawerContent data-testid="hds.slideout.content">
          <DrawerCloseButton size="sm" color="gray.500" />

          {renderHeader && (
            <DrawerHeader
              fontSize="md"
              px={3}
              data-testid="hds.slideout.header"
            >
              {typeof renderHeader === 'function'
                ? renderHeader(disclosure)
                : renderHeader}
            </DrawerHeader>
          )}

          {children && (
            <DrawerBody fontSize="sm" px={3} data-testid="hds.slideout.body">
              {typeof children === 'function' ? children(disclosure) : children}
            </DrawerBody>
          )}

          {renderFooter && (
            <DrawerFooter
              borderTopWidth={1}
              borderTopColor="gray.100"
              data-testid="hds.slideout.footer"
              px={3}
            >
              {typeof renderFooter === 'function'
                ? renderFooter(disclosure)
                : renderFooter}
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  useDisclosure,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import * as React from 'react';

type BaseProps = Pick<
  DrawerProps,
  | 'size'
  | 'trapFocus'
  | 'closeOnEsc'
  | 'closeOnOverlayClick'
  | 'preserveScrollBarGap'
  | 'lockFocusAcrossFrames'
  | 'blockScrollOnMount'
>;

type RenderComponent = (props: UseDisclosureReturn) => React.ReactNode;

interface Gutter {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export interface SlideoutMenuProps extends BaseProps {
  gutter?: Gutter;
  children?: RenderComponent | React.ReactNode;
  renderHeader?: RenderComponent | React.ReactNode;
  renderFooter?: RenderComponent | React.ReactNode;
  renderTrigger: RenderComponent;
  hasCloseButton?: boolean;
}

export function SlideoutMenu(props: SlideoutMenuProps) {
  const {
    gutter,
    children,
    renderHeader,
    renderFooter,
    renderTrigger,
    hasCloseButton,
    ...others
  } = Object.assign(
    {
      size: 'md',
      blockScrollOnMount: true,
      preserveScrollBarGap: true,
      lockFocusAcrossFrames: true,
    },
    props
  );

  const {
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
  } = Object.assign({}, gutter);

  const disclosure = useDisclosure();

  return (
    <>
      {renderTrigger(disclosure)}

      <Drawer
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        placement="right"
        {...others}
      >
        <DrawerOverlay
          bgColor="rgba(52, 64, 84, 0.7)"
          backdropFilter="blur(8px)"
          sx={{
            mt: `${top}px`,
            ml: `${left}px`,
            mr: `${right}px`,
            mb: `${bottom}px`,
          }}
        />

        <DrawerContent
          sx={{
            p: 0,
            mt: `${top}px`,
            ml: `${left}px`,
            mr: `${right}px`,
            mb: `${bottom}px`,
          }}
          data-testid="hds.slideout.content"
        >
          {hasCloseButton && <DrawerCloseButton size="sm" color="gray.500" />}

          {renderHeader && (
            <DrawerHeader p={0} data-testid="hds.slideout.header">
              {typeof renderHeader === 'function'
                ? renderHeader(disclosure)
                : renderHeader}
            </DrawerHeader>
          )}

          {children && (
            <DrawerBody p={0} data-testid="hds.slideout.body">
              {typeof children === 'function' ? children(disclosure) : children}
            </DrawerBody>
          )}

          {renderFooter && (
            <DrawerFooter
              p={0}
              borderTopWidth={1}
              borderTopColor="gray.100"
              data-testid="hds.slideout.footer"
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
}

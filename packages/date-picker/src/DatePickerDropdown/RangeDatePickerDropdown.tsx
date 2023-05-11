import { chakra, useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import { cloneElement } from 'react';
import { RangeDatePicker, RangeDatePickerProps } from '../DatePicker/RangeDatePicker';

export type RangeDatePickerDropdownProps = RangeDatePickerProps & {
  children(ctx: UseDisclosureReturn): JSX.Element;
};

export function RangeDatePickerDropdown({
  onApply,
  onCancel,
  children,
  ...others
}: RangeDatePickerDropdownProps) {
  const disclosure = useDisclosure();

  const { refs, strategy, x, y, context } = useFloating({
    open: disclosure.isOpen,
    onOpenChange(v) {
      if (v) {
        disclosure.onOpen();
      } else {
        disclosure.onClose();
      }
    },
    strategy: 'fixed',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift({
        padding: 6,
      }),
    ],
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      open: 150,
      close: 100,
    },
    initial: {
      opacity: 0,
      transform: 'scale(0.6)',
    },
    open: {
      opacity: 1,
      transform: 'scale(1)',
    },
    common({ placement }) {
      switch (placement) {
        case 'bottom-start':
        case 'top-start':
          return { transformOrigin: 'top left' };

        default:
          return { transformOrigin: 'top right' };
      }
    },
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([dismiss]);

  return (
    <>
      {cloneElement(children(disclosure), {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}

      {isMounted && (
        <FloatingPortal>
          <chakra.div
            ref={refs.setFloating}
            sx={{
              pos: strategy,
              top: `${y ?? 0}px`,
              left: `${x ?? 0}px`,
              ...styles,
            }}
            {...getFloatingProps()}
          >
            <RangeDatePicker
              onApply={(newValue) => {
                onApply?.(newValue);
                disclosure.onClose();
              }}
              onCancel={(currentValue) => {
                onCancel?.(currentValue);
                disclosure.onClose();
              }}
              {...others}
            />
          </chakra.div>
        </FloatingPortal>
      )}
    </>
  );
}

import {
  chakra,
  useDisclosure,
  UseDisclosureReturn,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  autoPlacement,
  autoUpdate,
  useFloating,
  useTransitionStyles,
} from "@floating-ui/react";
import * as React from "react";
import { RangeDatePicker, RangeDatePickerProps } from "../DatePicker/RangeDatePicker";

export type RangeDatePickerDropdownProps = RangeDatePickerProps & {
  children(ctx: UseDisclosureReturn): JSX.Element;
};

export function RangeDatePickerDropdown({
  onApply,
  onCancel,
  children,
  ...others
}: RangeDatePickerDropdownProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const disclosure = useDisclosure();

  const { refs, strategy, x, y, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          /* ⚠️ order matters here */
          "bottom-start",
          "bottom-end",
          "top-start",
          "top-end",
        ],
        alignment: "start",
      }),
    ],
    open: disclosure.isOpen,
  });

  useOutsideClick({
    ref: containerRef,
    handler: disclosure.onClose,
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      open: 150,
      close: 100,
    },
    initial: {
      opacity: 0,
      transform: "scale(0.6)",
    },
    open: {
      opacity: 1,
      transform: "scale(1)",
    },
    common({ placement }) {
      switch (placement) {
        case "bottom-start":
        case "top-start":
          return { transformOrigin: "top left" };

        default:
          return { transformOrigin: "top right" };
      }
    },
  });

  return (
    <chakra.div ref={containerRef} width="fit-content">
      <chakra.div ref={refs.setReference} width="fit-content">
        {children(disclosure)}
      </chakra.div>

      {isMounted && (
        <chakra.div
          ref={refs.setFloating}
          sx={{
            mt: 3,
            pos: strategy,
            top: `${y ?? 0}px`,
            left: `${x ?? 0}px`,
            ...styles,
          }}
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
      )}
    </chakra.div>
  );
}

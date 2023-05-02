import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { RangeDatePicker, RangeDatePickerProps } from '../DatePicker/RangeDatePicker';

export type RangeDatePickerModalProps = RangeDatePickerProps & {
  children(ctx: UseDisclosureReturn): JSX.Element;
};

export const RangeDatePickerModal = function RangeDatePickerModal({
  children,
  onApply,
  onCancel,
  ...props
}: RangeDatePickerModalProps) {
  const disclosure = useDisclosure();

  return (
    <>
      {children(disclosure)}

      <Modal
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}
        blockScrollOnMount
        lockFocusAcrossFrames
      >
        <ModalOverlay bgColor="rgba(52, 64, 84, 0.7)" backdropFilter="blur(8px)" />
        <ModalContent
          bgColor="transparent"
          width="auto"
          minWidth="unset"
          maxWidth="unset"
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
            {...props}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

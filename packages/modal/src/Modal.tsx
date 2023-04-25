import {
  Box,
  Flex,
  Heading,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps as ChakraModalProps,
  Spacer,
  SystemStyleObject,
  Text,
} from '@chakra-ui/react';
import { Button } from '@highoutput/hds-forms';
import { ReactNode, useRef } from 'react';
import { Size } from './types';
import { useStyles } from './useStyles';

type BaseProps = Pick<
  ChakraModalProps,
  | 'children'
  | 'trapFocus'
  | 'isCentered'
  | 'closeOnEsc'
  | 'closeOnOverlayClick'
  | 'blockScrollOnMount'
  | 'lockFocusAcrossFrames'
  | 'preserveScrollBarGap'
>;

type TestingProps = {
  __iconTestId?: string;
  __titleTestId?: string;
  __modalTestId?: string;
  __messageTestId?: string;
  __contentTestId?: string;
  __childrenTestId?: string;
  __closeButtonTestId?: string;
  __cancelButtonTestId?: string;
  __okayButtonTestId?: string;
};

export type ModalProps = {
  size?: Size;
  icon?: JSX.Element;
  title?: ReactNode;
  /** aka. subtitle */
  message?: ReactNode;
  isOpen?: boolean;
  /** Changes okay button's `accent` to error */
  isDanger?: boolean;
  /** applies `loading` and `disabled` state to buttons */
  isLoading?: boolean;
  /** Centers icon, title and message. only applies if size is `sm` or `md` */
  isCenterAligned?: boolean;
  onOkay?(): void;
  onCancel?(): void;
  hasOkayButton?: boolean;
  hasCancelButton?: boolean;
  okayButtonLabel?: string;
  cancelButtonLabel?: string;
  hasCloseButton?: boolean;
} & BaseProps &
  TestingProps &
  SystemStyleObject;

/**
 *
 * @example
 * <Modal
 *   isOpen={disclosure.isOpen}
 *   onClose={disclosure.onClose}
 *   onConfirm={handleConfirm}
 *   icon={<Icon as={AwesomeIcon} w={12} h={12} />}
 *   title="This is a title"
 *   message="This is a message aka subtitle"
 * >
 *   This is a custom children
 * </Modal>
 */
export function Modal(props: ModalProps) {
  const {
    size = 'md',
    icon,
    title,
    message,
    isOpen = false,
    isDanger = false,
    isLoading = false,
    isCenterAligned = false,
    onOkay = function noop() {},
    onCancel = function noop() {},
    children,
    hasOkayButton = true,
    hasCancelButton = true,
    hasCloseButton = true,
    okayButtonLabel = 'Okay',
    cancelButtonLabel = 'Cancel',

    trapFocus = true,
    closeOnEsc = false,
    isCentered = false,
    closeOnOverlayClick = false,
    blockScrollOnMount = true,
    preserveScrollBarGap = true,
    lockFocusAcrossFrames = true,

    __modalTestId = 'hds.modal',
    __iconTestId = 'hds.modal.icon',
    __titleTestId = 'hds.modal.title',
    __messageTestId = 'hds.modal.message',
    __contentTestId = 'hds.modal.content',
    __childrenTestId = 'hds.modal.children',
    __closeButtonTestId = 'hds.modal.controls.close',
    __cancelButtonTestId = 'hds.modal.controls.cancel',
    __okayButtonTestId = 'hds.modal.controls.okay',

    ...others
  } = Object.assign({}, props);

  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const styles = useStyles({ size });

  const isSmall = size === 'sm' || size === 'md';
  const isMedium = size === 'lg' || size === 'xl';

  const hasIcon = !!icon;
  const hasTitle = !!title;
  const hasMessage = !!message;
  const hasChildren = !!children;
  const hasButtons = hasOkayButton || hasCancelButton;
  const hasHeader = hasIcon || hasTitle || hasMessage;

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onCancel}
      trapFocus={trapFocus}
      isCentered={isCentered}
      closeOnEsc={closeOnEsc}
      closeOnOverlayClick={closeOnOverlayClick}
      initialFocusRef={cancelButtonRef}
      blockScrollOnMount={blockScrollOnMount}
      preserveScrollBarGap={preserveScrollBarGap}
      lockFocusAcrossFrames={lockFocusAcrossFrames}
    >
      <ModalOverlay
        sx={{
          bgColor: 'rgba(52, 64, 84, 0.7)',
          backdropFilter: 'blur(8px)',
        }}
      />

      <ModalContent sx={{ ...styles.container, ...others }} data-testid={__modalTestId}>
        <ModalBody
          sx={{
            width: 'full',
            padding: '24px',
          }}
          data-testid={__contentTestId}
        >
          <Flex gap="24px">
            {hasIcon && isMedium && <Box data-testid={__iconTestId}>{icon}</Box>}

            <Box>
              <Flex
                sx={{
                  gap: '24px',

                  ...(isSmall && {
                    justifyContent: 'space-between',
                  }),

                  ...(isMedium && {
                    alignItems: 'center',
                  }),
                }}
              >
                {isSmall && isCenterAligned && <Box w="24px" />}
                {isSmall && hasIcon && <Box data-testid={__iconTestId}>{icon}</Box>}
                {isMedium && hasTitle && (
                  <Heading
                    sx={{
                      ...styles.title,
                      flexGrow: 1,
                    }}
                    data-testid={__titleTestId}
                  >
                    {title}
                  </Heading>
                )}

                {hasCloseButton && (
                  <ModalCloseButton
                    sx={styles.closeButton}
                    data-testid={__closeButtonTestId}
                  />
                )}
              </Flex>

              {isSmall && hasTitle && (
                <Heading
                  sx={{
                    ...styles.title,

                    ...(hasIcon && {
                      marginTop: '20px',
                    }),

                    ...(isCenterAligned && {
                      textAlign: 'center',
                    }),

                    ...(!isCenterAligned && {
                      textAlign: 'left',
                    }),
                  }}
                  data-testid={__titleTestId}
                >
                  {title}
                </Heading>
              )}

              {hasMessage && (
                <Text
                  sx={{
                    ...styles.message,

                    ...(isMedium && {
                      marginTop: '4px',
                    }),

                    ...(isSmall && {
                      marginTop: '8px',
                      textAlign: 'left',

                      ...(isCenterAligned && { textAlign: 'center' }),
                    }),
                  }}
                  data-testid={__messageTestId}
                >
                  {message}
                </Text>
              )}
            </Box>
          </Flex>

          {hasChildren && (
            <Box
              sx={{
                ...(hasHeader && {
                  marginTop: '20px',
                }),
              }}
              data-testid={__childrenTestId}
            >
              {children}
            </Box>
          )}

          {hasButtons && (
            <Flex marginTop="32px">
              {isMedium && <Spacer />}

              <Flex
                sx={{
                  gap: '12px',

                  ...(isSmall && {
                    width: 'full',
                  }),

                  ...(isMedium && {
                    width: 'auto',
                  }),
                }}
              >
                {hasCancelButton && (
                  <Button
                    ref={cancelButtonRef}
                    variant="outline"
                    accent="gray"
                    onClick={onCancel}
                    flexGrow={1}
                    isDisabled={isLoading}
                    __testId={__cancelButtonTestId}
                  >
                    {cancelButtonLabel}
                  </Button>
                )}

                {hasOkayButton && (
                  <Button
                    onClick={onOkay}
                    flexGrow={1}
                    isLoading={isLoading}
                    __testId={__okayButtonTestId}
                    {...(isDanger && { accent: 'error' })}
                  >
                    {okayButtonLabel}
                  </Button>
                )}
              </Flex>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

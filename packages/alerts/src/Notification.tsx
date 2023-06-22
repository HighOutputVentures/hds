import {
  chakra,
  Icon,
  SystemStyleObject,
  ToastPosition,
  useToast,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import CloseIcon from './CloseIcon';

type Size = 'sm' | 'md';

/** @deprecated */
export type NotificationProps = {
  size?: Size;
  icon?: JSX.Element;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  okayButton?: string | boolean;
  closeButton?: string | boolean;
  onOkay?(): void;
  onClose?(): void;

  __testId?: string;
  __iconTestId?: string;
  __titleTestId?: string;
  __descriptionTestId?: string;
  __childrenTestId?: string;
  __okayBtnTestId?: string;
  __closeBtnTestId?: string;
};

/** @deprecated */
export function Notification({
  icon,
  title,
  description,
  okayButton,
  closeButton,
  onOkay,
  onClose,
  children,

  __testId = 'hds.notification',
  __iconTestId = 'hds.notification.icon',
  __titleTestId = 'hds.notification.title',
  __descriptionTestId = 'hds.notification.description',
  __childrenTestId = 'hds.notification.children',
  __okayBtnTestId = 'hds.notification.okay-btn',
  __closeBtnTestId = 'hds.notification.close-btn',

  ...props
}: NotificationProps & SystemStyleObject) {
  return (
    <chakra.div
      sx={{
        paddingX: '12px',
        paddingY: '16px',
        display: 'flex',
        gap: '16px',
        alignItems: 'start',
        border: '1px solid',
        borderColor: 'Gray.100',
        rounded: '8px',
        width: 'full',
        maxWidth: '400px',
        bgColor: 'white',
        boxShadow:
          '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        ...props,
      }}
      data-testid={__testId}
    >
      {icon && <chakra.div data-testid={__iconTestId}>{icon}</chakra.div>}

      <chakra.div
        sx={{
          flexGrow: 1,
        }}
      >
        {!!title && (
          <chakra.div
            sx={{
              flexGrow: 1,
              fontSize: '14px',
              fontWeight: 'semibold',
              lineHeight: '14px',
              letterSpacing: '0.02em',
            }}
            data-testid={__titleTestId}
          >
            {title}
          </chakra.div>
        )}

        {!!description && (
          <chakra.div
            sx={{
              flexGrow: 1,
              marginTop: '4px',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.02em',
              color: 'neutrals.600',
            }}
            data-testid={__descriptionTestId}
          >
            {description}
          </chakra.div>
        )}

        {!!children && (
          <chakra.div mt="16px" data-testid={__childrenTestId}>
            {children}
          </chakra.div>
        )}

        {!(!okayButton && !closeButton) && (
          <chakra.div
            sx={{
              marginTop: '16px',
              display: 'flex',
              gap: '12px',
            }}
          >
            {closeButton && (
              <chakra.button
                onClick={onClose}
                sx={{
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 'medium',
                  color: 'neutrals.600',
                }}
                data-testid={__closeBtnTestId}
              >
                {typeof closeButton === 'string' ? closeButton : 'Dismiss'}
              </chakra.button>
            )}

            {okayButton && (
              <chakra.button
                onClick={onOkay}
                sx={{
                  fontSize: '16px',
                  lineHeight: '20px',
                  fontWeight: 'medium',
                  color: 'brand.primary.700',
                }}
                data-testid={__okayBtnTestId}
              >
                {typeof okayButton === 'string' ? okayButton : 'View changes'}
              </chakra.button>
            )}
          </chakra.div>
        )}
      </chakra.div>

      <chakra.button
        onClick={onClose}
        sx={{
          display: 'flex',
          rounded: '4px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'neutrals.500',
          transition: 'all 300ms ease-in-out',
          _hover: {
            bgColor: 'neutrals.100',
            color: 'neutrals.600',
          },
        }}
        data-testid="hds.notification.btn.x"
      >
        <Icon as={CloseIcon} w="20px" h="20px" />
      </chakra.button>
    </chakra.div>
  );
}

type ToastNotificationArgs = NotificationProps & {
  position?: ToastPosition;
};

export function useNotification() {
  const toast = useToast();

  return function notify({
    position = 'bottom-right',
    onOkay,
    onClose,
    ...others
  }: ToastNotificationArgs = {}) {
    return toast({
      position,
      duration: 5000,
      render(args) {
        return (
          <Notification
            {...others}
            onOkay={() => {
              onOkay?.();
              args.onClose();
            }}
            onClose={() => {
              onClose?.();
              args.onClose();
            }}
          />
        );
      },
    });
  };
}

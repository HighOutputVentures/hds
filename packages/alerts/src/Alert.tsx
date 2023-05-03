import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  chakra,
  Fade,
  Icon,
  SystemStyleObject,
} from '@chakra-ui/react';
import { ComponentProps, ReactNode } from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import CloseIcon from './CloseIcon';
import ExclamationCircle from './ExclamationCircle';
import ExclamationTriangleIcon from './ExclamationTriangle';
import InformationCircleIcon from './InformationCircle';

type Accent = 'primary' | 'warning' | 'success' | 'error' | 'gray';

export interface AlertProps {
  isOpen?: boolean;
  accent?: Accent;
  title: ReactNode;
  description: ReactNode;
  primaryButton?: string | boolean;
  secondaryButton?: string | boolean;
  onPrimaryButtonClick?(): void;
  onSecondaryButtonClick?(): void;
  onClose?(): void;

  __testId?: string;
  __iconTestId?: string;
  __titleTestId?: string;
  __descriptionTestId?: string;
  __closeBtnTestId?: string;
  __primaryBtnTestId?: string;
  __secondaryBtnTestId?: string;
}

export function Alert(props: AlertProps & SystemStyleObject) {
  const {
    accent = 'primary',
    isOpen = true,
    title,
    description,
    primaryButton,
    secondaryButton,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    onClose,

    __testId = 'hds.alert',
    __iconTestId = 'hds.alert.icon',
    __titleTestId = 'hds.alert.title',
    __descriptionTestId = 'hds.alert.description',
    __closeBtnTestId = 'hds.alert.close-btn',
    __primaryBtnTestId = 'hds.alert.primary-btn',
    __secondaryBtnTestId = 'hds.alert.secondary-btn',

    ...others
  } = props;

  const SVGIcon = (props: ComponentProps<'svg'>) => {
    switch (accent) {
      case 'warning':
        return <ExclamationTriangleIcon {...props} />;
      case 'error':
        return <ExclamationCircle {...props} />;
      case 'success':
        return <CheckCircleIcon {...props} />;
      default:
        return <InformationCircleIcon {...props} />;
    }
  };

  return (
    <Fade in={isOpen}>
      <ChakraAlert
        variant="unstyled"
        sx={{
          gap: '12px',
          padding: '16px',
          display: 'flex',
          alignItems: 'start',
          rounded: '8px',
          border: '1px solid',

          ...(accent === 'primary' && {
            bgColor: 'brand.primary.500',
            borderColor: 'brand.primary.600',
          }),

          ...(accent === 'gray' && {
            bgColor: 'Gray.25',
            borderColor: 'Gray.300',
          }),

          ...(accent === 'error' && {
            bgColor: 'interface.error.500',
            borderColor: 'interface.error.600',
          }),

          ...(accent === 'warning' && {
            bgColor: 'interface.warning.500',
            borderColor: 'interface.warning.600',
          }),

          ...(accent === 'success' && {
            bgColor: 'interface.success.500',
            borderColor: 'interface.success.600',
          }),

          ...others,
        }}
        data-testid={__testId}
      >
        <AlertIcon
          as={SVGIcon}
          sx={{
            width: '20px',
            height: '20px',

            ...(accent === 'gray' && { color: 'neutrals.800' }),
            ...(accent === 'error' && { color: 'interface.error.800' }),
            ...(accent === 'warning' && { color: 'interface.warning.800' }),
            ...(accent === 'success' && { color: 'interface.success.800' }),
            ...(accent === 'primary' && { color: 'brand.primary.900' }),
          }}
          data-testid={__iconTestId}
        />

        <chakra.div flexGrow={1}>
          <AlertTitle
            sx={{
              fontSize: '14px',
              fontWeight: 'medium',
              lineHeight: '20px',

              ...(accent === 'gray' && { color: 'neutrals.900' }),
              ...(accent === 'error' && { color: 'interface.error.900' }),
              ...(accent === 'warning' && { color: 'interface.warning.900' }),
              ...(accent === 'success' && { color: 'interface.success.900' }),
              ...(accent === 'primary' && { color: 'brand.primary.900' }),
            }}
            data-testid={__titleTestId}
          >
            {title}
          </AlertTitle>
          <AlertDescription
            sx={{
              marginTop: '4px',
              fontSize: '14px',
              lineHeight: '20px',

              ...(accent === 'gray' && { color: 'neutrals.600' }),
              ...(accent === 'error' && { color: 'interface.error.700' }),
              ...(accent === 'success' && { color: 'interface.success.800' }),
              ...(accent === 'warning' && { color: 'interface.warning.800' }),
              ...(accent === 'primary' && { color: 'brand.primary.700' }),
            }}
            data-testid={__descriptionTestId}
          >
            {description}
          </AlertDescription>

          <chakra.div
            sx={{
              marginTop: '12px',
              display: 'flex',
              gap: '12px',
            }}
          >
            {!!secondaryButton && (
              <chakra.button
                onClick={onSecondaryButtonClick}
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',

                  ...(accent === 'gray' && { color: 'neutrals.700' }),
                  ...(accent === 'error' && { color: 'interface.error.700' }),
                  ...(accent === 'warning' && { color: 'interface.warning.800' }),
                  ...(accent === 'success' && { color: 'interface.success.800' }),
                  ...(accent === 'primary' && { color: 'brand.primary.800' }),
                }}
                data-testid={__secondaryBtnTestId}
              >
                {secondaryButton}
              </chakra.button>
            )}

            {!!primaryButton && (
              <chakra.button
                onClick={onPrimaryButtonClick}
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',

                  ...(accent === 'gray' && { color: 'brand.primary.700' }),
                  ...(accent === 'error' && { color: 'interface.error.900' }),
                  ...(accent === 'warning' && { color: 'interface.warning.900' }),
                  ...(accent === 'success' && { color: 'interface.success.900' }),
                  ...(accent === 'primary' && { color: 'brand.primary.900' }),
                }}
                data-testid={__primaryBtnTestId}
              >
                {primaryButton}
              </chakra.button>
            )}
          </chakra.div>
        </chakra.div>

        <chakra.div>
          <chakra.button
            onClick={onClose}
            sx={{
              ...(accent === 'gray' && { color: 'brand.primary.700' }),
              ...(accent === 'error' && { color: 'interface.error.700' }),
              ...(accent === 'success' && { color: 'interface.success.700' }),
              ...(accent === 'warning' && { color: 'interface.warning.700' }),
              ...(accent === 'primary' && { color: 'brand.primary.700' }),
            }}
            data-testid={__closeBtnTestId}
          >
            <Icon as={CloseIcon} w="20px" h="20px" />
          </chakra.button>
        </chakra.div>
      </ChakraAlert>
    </Fade>
  );
}

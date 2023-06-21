import { ToastProviderProps, chakra, useId, useMultiStyleConfig } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { omit } from '../../utils/omit';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  SpinnerIcon,
  XMarkIcon,
} from './icons';

type D = NonNullable<ToastProviderProps['defaultOptions']>;
type R = NonNullable<D['render']>;
type P = Parameters<R>[0];

export type ToastProps = { [K in keyof P]: P[K] } & {};

export function Toast(props: ToastProps): ReactNode {
  const {
    size,
    icon,
    title,
    description,
    status = 'success',
    variant = 'subtle',
    isClosable = true,
    onClose,
    render,
    styleConfig,
    orientation,
    ...others
  } = props;

  const colorScheme = others.colorScheme ?? getColorScheme(status);

  const styles = useMultiStyleConfig('Toast', {
    size,
    variant,
    colorScheme,
    orientation,
    styleConfig,
  });

  const uuid = useId();
  const rootId = others.id?.toString() ?? uuid;
  const descId = rootId + '-desc';
  const titleId = rootId + '-title';

  if (render) return render(omit(props, 'render'));

  return (
    <chakra.div id={rootId} __css={styles.container}>
      {icon ?? <chakra.svg as={getIcon(status)} __css={styles.icon} />}

      <chakra.div __css={styles.content}>
        {title && (
          <chakra.div id={titleId} __css={styles.title}>
            {title}
          </chakra.div>
        )}

        {description && (
          <chakra.div id={descId} __css={styles.description}>
            {description}
          </chakra.div>
        )}
      </chakra.div>

      {isClosable && (
        <chakra.button
          type="button"
          aria-label="Close alert"
          onClick={onClose}
          __css={styles.closeButton}
        >
          <chakra.svg as={XMarkIcon} className="chakra-toast__svg" />
        </chakra.button>
      )}
    </chakra.div>
  );
}

function getColorScheme(status: ToastProps['status']) {
  switch (status) {
    case 'info':
      return 'primary';
    case 'error':
      return 'error';
    case 'loading':
      return 'neutral';
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
  }
}

function getIcon(status: ToastProps['status']) {
  switch (status) {
    case 'error':
      return ExclamationCircleIcon;
    case 'info':
      return InformationCircleIcon;
    case 'warning':
      return ExclamationTriangleIcon;
    case 'success':
      return CheckCircleIcon;
    case 'loading':
      return SpinnerIcon;
    default:
      return;
  }
}

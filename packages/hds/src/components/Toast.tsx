import type { HTMLChakraProps, ToastProviderProps } from '@chakra-ui/react';
import { chakra, forwardRef, useId, useMultiStyleConfig } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { omit } from '../utils/omit';

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

  const FallbackIcon = getIcon(status);

  return (
    <chakra.div id={rootId} data-testid="hds.toast" __css={styles.container}>
      {icon ?? <FallbackIcon __css={styles.icon} />}

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
    case 'warning':
      return 'warning';
    default:
      return 'success';
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
    case 'loading':
      return SpinnerIcon;
    default:
      return CheckCircleIcon;
  }
}

const CheckCircleIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>((props, ref) => {
  return (
    <chakra.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      />
    </chakra.svg>
  );
});

const ExclamationCircleIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>((props, ref) => {
  return (
    <chakra.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
    </chakra.svg>
  );
});

const XMarkIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>((props, ref) => {
  return (
    <chakra.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      />
    </chakra.svg>
  );
});

const InformationCircleIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>((props, ref) => {
  return (
    <chakra.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </chakra.svg>
  );
});

const ExclamationTriangleIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>(
  (props, ref) => {
    return (
      <chakra.svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </chakra.svg>
    );
  },
);

export const SpinnerIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>((props, ref) => {
  return (
    <chakra.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        fill="currentColor"
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </chakra.svg>
  );
});

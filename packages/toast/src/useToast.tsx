import { ToastId, UseToastOptions, useToast as _ } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Toast } from './Toast';

/** @deprecated */
export type UseToastFnConfig = Pick<
  UseToastOptions,
  'duration' | 'position' | 'isClosable' | 'onCloseComplete'
>;

/** @deprecated */
export type UseToastFn = (
  message: string | ReactNode,
  config?: Partial<UseToastFnConfig>,
) => ToastId;

/** @deprecated */
export type UseToastReturn = {
  error: UseToastFn;
  success: UseToastFn;
  custom: UseToastFn;
};

/**
 *
 *
 * Default toast options. Can also be used in ThemeProvider
 *
 * @example
 *
 * import { defaultToastConfig } from '@highoutput/hds-toast';
 * ```ts
 * <ThemeProvider
 *  toastOptions={{
 *    defaultOptions: { ...defaultToastConfig }
 *  }}
 * >
 * ...
 * </ThemeProvider>
 * ```
 *
 * @deprecated
 *
 */
export const defaultToastConfig: UseToastOptions = {
  position: 'top',
  render: Toast,
  isClosable: true,
  duration: 5000,
  variant: 'subtle',
  status: 'success',
};

/** @deprecated */
export function useToast(): UseToastReturn {
  const toast = _(defaultToastConfig);

  return {
    error(description, overrides) {
      return toast({
        ...defaultToastConfig,
        ...overrides,
        status: 'error',
        description,
      });
    },
    success(description, overrides) {
      return toast({
        ...defaultToastConfig,
        ...overrides,
        status: 'success',
        description,
      });
    },
    custom(JSXElement, overrides) {
      return toast({
        render() {
          return JSXElement;
        },
        ...overrides,
      });
    },
  };
}

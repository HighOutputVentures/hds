import { ToastId, useToast as _, UseToastOptions } from "@chakra-ui/react";
import { Toast } from "./Toast";

export type UseToastFnConfig = Pick<
  UseToastOptions,
  "duration" | "position" | "isClosable" | "onCloseComplete"
>;

export type UseToastFn = (message: string, config?: Partial<UseToastFnConfig>) => ToastId;

export type UseToastReturn = {
  error: UseToastFn;
  success: UseToastFn;
};

/**
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
 */
export const defaultToastConfig: UseToastOptions = {
  position: "top",
  render: Toast,
  isClosable: true,
  duration: 5000,
  variant: "subtle",
  status: "success",
};

export function useToast(): UseToastReturn {
  const toast = _(defaultToastConfig);

  return {
    error(description, overrides) {
      return toast({
        ...defaultToastConfig,
        ...overrides,
        status: "error",
        description,
      });
    },
    success(description, overrides) {
      return toast({
        ...defaultToastConfig,
        ...overrides,
        status: "success",
        description,
      });
    },
  };
}

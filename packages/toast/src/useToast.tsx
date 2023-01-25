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

const defaultToastConfig: UseToastOptions = {
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

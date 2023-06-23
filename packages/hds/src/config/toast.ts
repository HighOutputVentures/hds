import { ToastProviderProps } from '@chakra-ui/react';
import { Toast } from '../components/Toast';

export const toastOptions: ToastProviderProps = {
  defaultOptions: {
    status: 'success',
    variant: 'subtle',
    position: 'top',
    duration: 5000,
    isClosable: true,
    render: Toast,
  },
};

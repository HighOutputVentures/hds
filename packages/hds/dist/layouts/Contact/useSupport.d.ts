import { ContactFormInputProps } from './validation';
declare const useSupport: () => {
    postSupport: (url: string, data: ContactFormInputProps) => Promise<void>;
    isLoading: boolean;
    hasError: boolean;
    isSuccess: boolean;
};
export default useSupport;

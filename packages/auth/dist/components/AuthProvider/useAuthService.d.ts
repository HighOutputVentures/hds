export default function useAuthService(): {
    generateOtp: (email: string) => Promise<void>;
    validateOtp: (otp: string) => Promise<void>;
};

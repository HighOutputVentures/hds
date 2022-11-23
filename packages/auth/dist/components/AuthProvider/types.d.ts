export declare type AuthConfig = {
    hostname: string;
};
export declare type AuthState = {
    token?: string;
    status: 'loading' | 'authenticated' | 'unauthenticated';
};
export declare type AuthService = {
    generateOtp(email: string): Promise<void>;
    validateOtp(otp: string): Promise<void>;
};

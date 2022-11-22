import type { AuthState } from './types';
declare type Config = {
    onauthenticated: () => void;
    onunauthenticated: () => void;
};
export default function useAuthState({ onauthenticated, onunauthenticated }?: Partial<Config>): AuthState;
export {};

/// <reference types="react" />
export interface SocialButtonProps {
    onClicked?: () => void;
    type: 'google' | 'dribble' | 'twitter' | 'figma' | 'facebook' | 'apple';
    buttonText?: string;
    variant: 'outline' | 'solid';
    disabled?: boolean;
}
declare const SocialButton: (props: Omit<SocialButtonProps, 'children'>) => JSX.Element;
export default SocialButton;

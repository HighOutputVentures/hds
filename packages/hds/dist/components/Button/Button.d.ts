import { FC, ReactNode } from 'react';
import { ButtonSizeTypes } from '../../theme/components/button/sizes';
import { ButtonVariantsTypes } from '../../theme/components/button/variants';
export interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariantsTypes;
    size?: ButtonSizeTypes;
    onClicked?: () => void;
    disabled?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;

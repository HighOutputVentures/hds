/// <reference types="react" />
import { CloseButtonSizeTypes } from '../../theme/components/button/sizes';
import { CloseButtonVariantTypes } from '../../theme/components/button/variants';
export interface CloseButtonProps {
    onClicked?: () => void;
    variant?: CloseButtonVariantTypes;
    size?: CloseButtonSizeTypes;
    disabled?: boolean;
}
declare const CloseButton: (props: Omit<CloseButtonProps, 'children'>) => JSX.Element;
export default CloseButton;
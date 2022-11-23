export declare const Checkbox: {
    baseStyle: {
        control: {
            borderColor: string;
            borderRadius: string;
            padding: string;
            _focus: {
                boxShadow: string;
            };
            bg: string;
            _disabled: {
                borderColor: string;
                bg: string;
                _checked: {
                    borderColor: string;
                    bg: string;
                    color: string;
                };
            };
        };
    };
    sizes: {
        sm: {
            control: {
                w: string;
                h: string;
            };
        };
        md: {
            control: {
                w: string;
                h: string;
            };
        };
        lg: {
            control: {
                w: string;
                h: string;
            };
        };
    };
    variants: {
        'primary.outlined': {
            control: {
                pointerEvents: string;
                _checked: {
                    bg: string;
                    color: string;
                    borderColor: string;
                    border: string;
                };
            };
        };
        'primary.solid': {
            control: {
                pointerEvents: string;
                _checked: {
                    bg: string;
                    color: string;
                    borderColor: string;
                    border: string;
                };
            };
        };
    };
    defaultProps: {
        variant: string;
        size: string;
    };
};
export default Checkbox;

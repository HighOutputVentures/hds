export declare const Checkbox: {
    baseStyle: {
        control: {
            borderRadius: string;
            padding: string;
        };
    };
    variants: {
        primary: {
            control: {
                borderColor: string;
                pointerEvents: string;
                _focus: {
                    shadow: string;
                };
                _checked: {
                    bg: string;
                    color: string;
                    borderColor: string;
                    _hover: {
                        bg: string;
                        color: string;
                        borderColor: string;
                    };
                };
            };
        };
        orange: {
            control: {
                borderColor: string;
                _focus: {
                    shadow: string;
                };
                _checked: {
                    bg: string;
                    color: string;
                    borderColor: string;
                    _hover: {
                        bg: string;
                        color: string;
                        borderColor: string;
                    };
                };
            };
        };
    };
    defaultProps: {
        variant: string;
    };
};
export default Checkbox;

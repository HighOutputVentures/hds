export declare const PinInputField: {
    baseStyle: {
        _placeholder: {
            color: string;
        };
        fontSize: string;
        _focusVisible: {
            outline: string;
            borderColor: string;
        };
        border: string;
        bgColor: string;
        textAlign: string;
        borderColor: string;
        color: string;
    };
    sizes: {
        sm: {
            h: string;
            w: string;
            borderRadius: string;
        };
        md: {
            h: string;
            w: string;
            borderRadius: string;
        };
        lg: {
            h: string;
            w: string;
            borderRadius: string;
        };
    };
    variants: {
        outline: {
            boxShadow: string;
            borderRadius: string;
            _focus: {
                borderColor: string;
                caretColor: string;
                boxShadow: string;
            };
        };
        flushed: {
            boxShadow: string;
            border: string;
            borderRadius: string;
            borderBottom: string;
            borderBottomColor: string;
            _focus: {
                borderColor: string;
                caretColor: string;
                boxShadow: string;
            };
        };
        filled: {
            boxShadow: string;
            borderRadius: string;
            _focus: {
                borderColor: string;
                caretColor: string;
                bgColor: string;
                boxShadow: string;
            };
            bgColor: string;
        };
        unstyled: {
            bgColor: string;
            border: string;
            _focus: {
                caretColor: string;
            };
        };
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default PinInputField;

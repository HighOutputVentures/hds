export declare const Form: {
    parts: string[];
    baseStyle: {
        formLabel: {
            size: string;
            color: string;
        };
        formInput: {
            size: string;
            padding: string;
            _placeholder: {
                color: string;
            };
            _focus: {
                border: string;
                borderColor: string;
            };
            _focusVisible: {
                outline: string;
            };
            _hover: {
                border: string;
                borderColor: string;
            };
            _disabled: {
                bgColor: string;
                borderColor: string;
            };
            border: string;
            borderColor: string;
        };
        formTextarea: {
            size: string;
            _placeholder: {
                color: string;
            };
            _hover: {
                border: string;
                borderColor: string;
            };
            padding: string;
            _focus: {
                border: string;
                borderColor: string;
            };
            _focusVisible: {
                outline: string;
            };
        };
        formHelperText: {
            size: string;
            mt: string;
            color: string;
        };
        formErrorMessage: {
            size: string;
            mt: string;
            color: string;
        };
    };
    sizes: {
        formLabel: {
            'header-1': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'header-2': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'header-3': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'header-4': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'header-5': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'header-6': {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'paragraph-xxl-default': {
                fontSize: string;
                lineHeight: string;
            };
            'paragraph-xl-default': {
                fontSize: string;
                lineHeight: string;
            };
            'paragraph-lg-default': {
                fontSize: string;
                lineHeight: string;
            };
            'paragraph-md-default': {
                fontSize: string;
                lineHeight: string;
            };
            'paragraph-sm-default': {
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'paragraph-xs-default': {
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'label-xl-default': {
                fontSize: string;
                lineHeight: string;
            };
            'label-lg-default': {
                fontSize: string;
                lineHeight: string;
            };
            'label-md-default': {
                fontSize: string;
                lineHeight: string;
            };
            'label-sm-default': {
                fontSize: string;
                lineHeight: string;
            };
            'label-xs-default': {
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'label-xxs-default': {
                fontSize: string;
                lineHeight: string;
                letterSpacing: string;
            };
            'button-default': {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
            };
            'button-uppercase': {
                fontSize: string;
                lineHeight: string;
                fontWeight: number;
                letterSpacing: string;
                textTransform: string;
            };
        };
    };
    variants: {
        outline: {
            formInput: {
                height: string;
                bgColor: string;
                borderColor: string;
                border: string;
                _focus: {
                    border: string;
                    borderColor: string;
                };
                _focusVisible: {
                    outline: string;
                };
                boxShadow: string;
                borderRadius: string;
                color: string;
                _invalid: {
                    border: string;
                    borderColor: string;
                    _focus: {
                        border: string;
                        borderColor: string;
                    };
                };
            };
            formTextarea: {
                mt: string;
                size: string;
                boxShadow: string;
                border: string;
                borderColor: string;
                color: string;
                borderRadius: string;
                _focus: {
                    border: string;
                    borderColor: string;
                };
                _focusVisible: {
                    outline: string;
                };
                _invalid: {
                    border: string;
                    borderColor: string;
                    _focus: {
                        borderColor: string;
                        border: string;
                    };
                };
            };
        };
        flushed: {
            formInput: {
                height: string;
                bgColor: string;
                borderBottomColor: string;
                borderBottom: string;
                _focus: {
                    borderBottom: string;
                    borderBottomColor: string;
                };
                borderRadius: string;
                color: string;
                _invalid: {
                    borderBottom: string;
                    borderBottomColor: string;
                    _focus: {
                        borderBottom: string;
                        borderBottomColor: string;
                    };
                };
            };
            formTextarea: {
                mt: string;
                size: string;
                borderBottom: string;
                borderBottomColor: string;
                color: string;
                borderRadius: string;
                _invalid: {
                    borderBottom: string;
                    borderBottomColor: string;
                    _focus: {
                        borderBottomColor: string;
                        borderBottom: string;
                    };
                };
            };
        };
        filled: {
            formInput: {
                height: string;
                bgColor: string;
                _focus: {
                    bgColor: string;
                };
                borderRadius: string;
                color: string;
                _invalid: {
                    border: string;
                    borderColor: string;
                    _focus: {
                        border: string;
                        borderColor: string;
                    };
                };
            };
            formTextarea: {
                mt: string;
                color: string;
                borderRadius: string;
                bgColor: string;
                _focus: {
                    bgColor: string;
                };
                _invalid: {
                    borderBottom: string;
                    borderBottomColor: string;
                    _focus: {
                        borderBottomColor: string;
                        borderBottom: string;
                    };
                };
            };
        };
        unstyled: {
            formInput: {
                height: string;
                bgColor: string;
                border: string;
                color: string;
                _invalid: {
                    border: string;
                    borderColor: string;
                    _focus: {
                        border: string;
                        borderColor: string;
                    };
                };
            };
            formTextarea: {
                mt: string;
                color: string;
                bgColor: string;
                border: string;
                _invalid: {
                    borderBottom: string;
                    borderBottomColor: string;
                    _focus: {
                        borderBottomColor: string;
                        borderBottom: string;
                    };
                };
            };
        };
        'check-in-edit': {
            formInput: {
                height: string;
                _focus: {
                    border: string;
                    borderColor: string;
                };
                _invalid: {
                    _focus: {
                        border: string;
                        borderColor: string;
                    };
                };
            };
            formTextarea: {
                _focusVisible: {
                    border: string;
                    borderColor: string;
                };
                _invalid: {
                    _focusVisible: {
                        border: string;
                        borderColor: string;
                    };
                };
                fontSize: string;
            };
        };
        'check-in': {
            formInput: {
                border: string;
                _focus: {
                    border: string;
                    borderColor: string;
                };
                _hover: {
                    border: string;
                    borderColor: string;
                };
            };
            formTextarea: {
                _focusVisible: {
                    border: string;
                    borderColor: string;
                };
                _invalid: {
                    _focusVisible: {
                        border: string;
                        borderColor: string;
                    };
                };
                fontSize: string;
            };
        };
    };
    defaultProps: {
        variant: string;
    };
};
export default Form;

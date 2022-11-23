export declare type ButtonVariantsTypes = 'solid-primary' | 'outline-primary' | 'ghost-primary' | 'solid-error' | 'outline-error' | 'ghost-error';
export declare type CloseButtonVariantTypes = 'solid-close-btn' | 'outline-close-btn' | 'ghost-close-btn';
export declare const buttonVariants: {
    'solid-primary': {
        bg: string;
        color: string;
        borderRadius: string;
        border: string;
        boxShadow: string;
        _hover: {
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
        };
        _active: {
            bg: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'outline-primary': {
        color: string;
        bg: string;
        border: string;
        boxShadow: string;
        borderRadius: string;
        _hover: {
            bg: string;
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
            border: string;
        };
        _active: {
            bg: string;
            border: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'ghost-primary': {
        color: string;
        bg: string;
        border: string;
        boxShadow: string;
        borderRadius: string;
        _hover: {
            bg: string;
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
        };
        _active: {
            bg: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'solid-error': {
        bg: string;
        color: string;
        borderRadius: string;
        border: string;
        boxShadow: string;
        _hover: {
            bg: string;
            border: string;
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
        };
        _active: {
            bg: string;
            border: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'outline-error': {
        bg: string;
        color: string;
        borderRadius: string;
        border: string;
        boxShadow: string;
        _hover: {
            bg: string;
            border: string;
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
        };
        _active: {
            bg: string;
            border: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'ghost-error': {
        bg: string;
        color: string;
        borderRadius: string;
        border: string;
        boxShadow: string;
        _hover: {
            bg: string;
            border: string;
            _disabled: {
                bg: string;
                border: string;
                boxShadow: string;
            };
        };
        _active: {
            bg: string;
            border: string;
            boxShadow: string;
        };
        _disabled: {
            bg: string;
            border: string;
            boxShadow: string;
        };
    };
    'solid-close-btn': {
        bg: string;
        borderRadius: string;
        _hover: {
            _disabled: {
                bg: string;
            };
        };
        _disabled: {
            bg: string;
        };
    };
    'outline-close-btn': {
        color: string;
        _hover: {
            color: string;
        };
        _focus: {
            color: string;
        };
    };
    'ghost-close-btn': {
        bg: string;
        borderRadius: string;
        color: string;
        _hover: {
            bg: string;
            color: string;
        };
        _focused: {
            bg: string;
            color: string;
        };
    };
};

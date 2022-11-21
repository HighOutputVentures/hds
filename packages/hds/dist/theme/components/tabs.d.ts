export declare const Tabs: {
    parts: string[];
    baseStyle: {
        root: {
            w: string;
            mt: number;
        };
        tab: {
            fontWeight: string;
            color: string;
            marginRight: number;
        };
        tabpanel: {
            p: number;
            mt: number;
            mb: number;
        };
    };
    variants: {
        primary: {
            tab: {
                _selected: {
                    paddingBottom: string;
                    borderBottom: string;
                    borderBottomColor: string;
                    color: string;
                    fontWeight: string;
                };
                _focus: {
                    boxShadow: string;
                };
                marginBottom: string;
            };
            tablist: {
                borderBottom: string;
                borderBottomColor: string;
            };
        };
    };
    defaultProps: {
        variant: string;
    };
};
export default Tabs;

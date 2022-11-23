import { MultiStyleConfig } from "@chakra-ui/react";
export default function withAvatar(): {
    components: {
        Avatar: MultiStyleConfig<{
            keys: string[];
        }>;
        AvatarLabel: MultiStyleConfig<{
            keys: string[];
        }>;
        AvatarGroupButton: MultiStyleConfig<{
            keys: string[];
        }>;
        Tooltip: {
            baseStyle?: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>) | import("@chakra-ui/styled-system").SystemStyleFunction | undefined;
            sizes?: {
                [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
            } | undefined;
            variants?: {
                "hds-avatar": (context: import("@chakra-ui/styled-system").StyleFunctionProps) => {
                    [x: string]: string | undefined;
                    marginBottom: string | undefined;
                    fontFamily: string;
                    fontSize: string;
                    lineHeight: string;
                    fontWeight: string;
                    color: string;
                    bgColor: string;
                    rounded: string;
                    paddingY: string;
                    paddingX: string;
                };
            } | undefined;
            defaultProps?: {
                size?: string | number | undefined;
                variant?: "hds-avatar" | undefined;
                colorScheme?: string | undefined;
            } | undefined;
        };
    };
};

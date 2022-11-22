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
            baseStyle?: import("@chakra-ui/styled-system").SystemStyleInterpolation;
            sizes?: {
                [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
            };
            variants?: {
                "hds-avatar": (context: import("@chakra-ui/styled-system").StyleFunctionProps) => {
                    [x: string]: string;
                    marginBottom: string;
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
            };
            defaultProps?: {
                size?: string | number;
                variant?: "hds-avatar";
                colorScheme?: string;
            };
        };
    };
};

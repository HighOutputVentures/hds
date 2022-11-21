import { MultiStyleConfig } from '@chakra-ui/react';
export default function withTag(): {
    components: {
        Tag: MultiStyleConfig<{
            keys: string[];
        }>;
        Checkbox: MultiStyleConfig<{
            keys: string[];
        }>;
    };
};

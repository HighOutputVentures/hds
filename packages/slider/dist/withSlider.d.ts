import { MultiStyleConfig } from "@chakra-ui/react";
export default function withSlider(): {
    components: {
        Slider: MultiStyleConfig<{
            keys: string[];
        }>;
    };
};

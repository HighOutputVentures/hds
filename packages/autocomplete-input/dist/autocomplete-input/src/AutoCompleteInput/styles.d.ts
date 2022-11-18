import { ChakraStylesConfig } from 'chakra-react-select';
export interface Item {
    value: string | number;
    label: string;
}
interface GetStylesProps {
    error?: boolean;
    multiple?: boolean;
    darkMode?: boolean;
    testId?: string;
}
declare const getStyles: ({ error, darkMode, testId, multiple, }: GetStylesProps) => ChakraStylesConfig<Item>;
export default getStyles;

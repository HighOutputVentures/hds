import { ThemingProps } from '@chakra-ui/react';
import { FC } from 'react';
export interface RadioImageGroupProps extends ThemingProps {
    avatars: Array<{
        value: string;
        image: string;
    }>;
    onChange: (value: string) => void;
    defaultValue?: string;
}
declare const RadioImageGroup: FC<RadioImageGroupProps>;
export default RadioImageGroup;

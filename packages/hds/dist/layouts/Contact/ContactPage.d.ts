import { BoxProps, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { ContactCardProps } from './ContactCard';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface ContagePageProps extends BoxProps {
    title?: string;
    secondaryTitle?: string;
    iconNode?: ReactNode;
    url?: string;
    partProps?: {
        contactCard?: WithoutChildren<ContactCardProps>;
        title?: WithoutChildren<TextProps>;
        secondaryTitle?: WithoutChildren<TextProps>;
    };
}
declare const ContactPage: FC<ContagePageProps>;
export default ContactPage;

import { BoxProps, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { ContactFormProps } from './ContactForm';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface ContactCardProps extends BoxProps {
    children?: ReactNode;
    title?: string;
    url?: string;
    partProps?: {
        contactForm?: WithoutChildren<ContactFormProps>;
        text?: WithoutChildren<TextProps>;
    };
}
declare const ContactCard: FC<ContactCardProps>;
export default ContactCard;

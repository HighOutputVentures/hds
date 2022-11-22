import { BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
export interface ContactCardProps extends Pick<BoxProps, 'pos' | 'top' | 'w'> {
    children?: ReactNode;
    title?: string;
    url?: string;
}
declare const ContactCard: FC<ContactCardProps>;
export default ContactCard;

import { FC, ReactNode } from 'react';
export interface ContagePageProps {
    title?: string;
    secondaryTitle?: string;
    iconNode?: ReactNode;
    url?: string;
}
declare const ContactPage: FC<ContagePageProps>;
export default ContactPage;

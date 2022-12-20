import { Box, BoxProps, Center, Text } from '@highoutput/hds';
import React, { FC, ReactNode } from 'react';
import ContactForm from './ContactForm';

export interface ContactCardProps extends Pick<BoxProps, 'pos' | 'top' | 'w'> {
  children?: ReactNode;
  title?: string;
  url?: string;
}

const ContactCard: FC<ContactCardProps> = (props) => {
  const { children, title = 'Drop your message', url } = props;
  return (
    <Box
      w={512}
      bg="white"
      borderRadius="8px"
      padding="56px"
      boxShadow="0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
      {...props}
      data-testid="box.contactcard.container"
    >
      <Center mb={8} data-testid="center.contactcard.titleposition">
        <Text size="header-4" data-testid="text.contactcard.title">
          {title}
        </Text>
      </Center>
      {children ? (
        children
      ) : (
        <ContactForm
          // {...partProps?.contactForm}
          url={url}
        />
      )}
    </Box>
  );
};

export default ContactCard;

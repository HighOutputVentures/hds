import React, { FC, ReactElement } from 'react';
import {
  Box,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export interface CTAProps {
  header?: string;
  subHeader?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
  onClose?: () => void;
  onSubmit?: () => void;
  content?: ReactElement;
  isSubscription?: boolean;
}

const CTA: FC<CTAProps> = ({
  header,
  subHeader,
  secondaryLabel,
  primaryLabel,
  onSubmit,
  onClose,
  isSubscription,
  content,
}) => (
  <Box>
    <Flex
      direction="column"
      w={{ base: 'auto', lg: '48rem' }}
      border="2px"
      borderColor="neutrals.200"
      borderRadius="0.5rem"
      justifyContent="center"
      p="24px"
    >
      <Text
        fontWeight={500}
        size={{ base: 'label-sm-default', lg: 'label-md-default' }}
      >
        {header}
      </Text>
      <Text
        color="neutrals.600"
        fontSize={14}
        lineHeight="20px"
        letterSpacing="0.02em"
      >
        {subHeader}
      </Text>

      <Box>{content}</Box>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 2, lg: 4 }}
        mt="1.25rem"
      >
        {isSubscription ? (
          <Flex direction="column" gap={2}>
            <Text size="label-xs-default" fontWeight={500}>
              Subscribe to updates
            </Text>
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={{ base: 2, lg: 4 }}
            >
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="neutrals.700" />}
                />
                <Input type="email" placeholder="you@untitledui.com" />
              </InputGroup>
              <Button
                onClick={onSubmit}
                px="2rem"
                width={{ base: '100%', lg: 'auto' }}
              >
                <Text size="button-default">{primaryLabel}</Text>
              </Button>
            </Flex>
          </Flex>
        ) : (
          <>
            {secondaryLabel && (
              <Button
                onClick={onClose}
                variant="outline"
                width={{ base: '100%', lg: 'auto' }}
              >
                <Text color="neutrals.700" size="button-default">
                  {secondaryLabel}
                </Text>
              </Button>
            )}
            {primaryLabel && (
              <Button onClick={onSubmit} width={{ base: '100%', lg: 'auto' }}>
                <Text size="button-default">{primaryLabel}</Text>
              </Button>
            )}
          </>
        )}
      </Flex>
    </Flex>
  </Box>
);

export default CTA;

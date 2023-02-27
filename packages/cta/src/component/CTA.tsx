import React, { FC } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { Button } from '@highoutput/hds';

export interface CTA {
  header: string;
  content: string;
  closeLabel?: string;
  submitLabel?: string;
  onClose?: () => void;
  onSubmit?: () => void;
}

const CTA: FC<CTA> = ({
  header,
  content,
  closeLabel,
  submitLabel,
  onSubmit,
  onClose,
}) => (
  <Box>
    <Flex
      direction="column"
      w="48rem"
      border="2px"
      borderColor="neutrals.200"
      borderRadius="0.5rem"
      justifyContent="center"
      p="24px"
    >
      <Text fontWeight={500} size="label-md-default">
        {header}
      </Text>
      <Text
        color="neutrals.600"
        fontSize={14}
        lineHeight="20px"
        letterSpacing="0.02em"
      >
        {content}
      </Text>

      <Flex direction="row" gap={4} mt="1.25rem">
        <Button onClick={onClose} variant="outline">
          <Text color="neutrals.700" size="button-default">
            {closeLabel}
          </Text>
        </Button>
        <Button onClick={onSubmit}>
          <Text size="button-default">{submitLabel}</Text>
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default CTA;

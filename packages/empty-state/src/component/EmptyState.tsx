import { AddIcon } from '@chakra-ui/icons';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

export interface EmptyStateProps {
  header: string;
  subHeader: string;
  icon?: ReactElement;
  primaryLabel: string;
  secondaryLabel: string;
  onClear?: () => void;
  onSubmit?: () => void;
}

const EmptyState: FC<EmptyStateProps> = ({
  header,
  subHeader,
  icon,
  primaryLabel,
  secondaryLabel,
  onClear,
  onSubmit,
}) => (
  <Box>
    <Flex
      direction="column"
      w={{ base: 'auto', lg: '48rem' }}
      justifyContent="center"
      p="24px"
      textAlign="center"
      alignItems="center"
    >
      {icon && (
        <Box my="1rem" bgColor="">
          {icon}
        </Box>
      )}
      <Text fontWeight={500} size={{ base: 'label-sm-default', lg: 'label-md-default' }}>
        {header}
      </Text>
      <Text
        w={{ lg: 352 }}
        color="gray.500"
        size={{ base: 'label-sm-default', lg: 'paragraphs-md-default' }}
        my="0.5rem"
      >
        {subHeader}
      </Text>

      <Flex gap={4} mt="1rem">
        {secondaryLabel && (
          <Button onClick={onClear} variant="outline">
            {secondaryLabel}
          </Button>
        )}
        {primaryLabel && (
          <Button leftIcon={<AddIcon />} onClick={onSubmit}>
            {primaryLabel}
          </Button>
        )}
      </Flex>
    </Flex>
  </Box>
);

export default EmptyState;

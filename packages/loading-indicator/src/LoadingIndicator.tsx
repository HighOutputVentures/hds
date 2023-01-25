import React, { FC } from 'react';
import { Text, Box, Spinner } from '@chakra-ui/react';

export interface LoadingIndicatorProps {
  variant?: 'solid' | 'twotone';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  labelText?: string;
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  variant = 'solid',
  size = 'md',
  showLabel = true,
  labelText = 'Loading...',
}) => {
  return (
    <Box textAlign="center">
      <Spinner variant={variant} size={size} />
      {showLabel && <Text fontSize="10px">{labelText}</Text>}
    </Box>
  );
};

export default LoadingIndicator;

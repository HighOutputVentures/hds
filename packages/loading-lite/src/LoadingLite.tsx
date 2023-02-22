import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

import './custom.css';
export interface LoadingLiteProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  labelText?: string;
}

const sizes = {
  xs: '20px',
  sm: '30px',
  md: '40px',
  lg: '50px',
  xl: '60px',
};

const LoadingLite: FC<LoadingLiteProps> = ({
  size = 'md',
  showLabel = true,
  labelText = 'Loading...',
}) => {
  return (
    <Box textAlign="center" pointerEvents="none">
      <Box
        margin="auto"
        border="2px solid #f3f3f3"
        borderTop="4px solid #3498db"
        borderRadius="50%"
        width={sizes[size]}
        height={sizes[size]}
        animation="spin 2s linear infinite"
      />
      {showLabel && <Text fontSize="10px">{labelText}</Text>}
    </Box>
  );
};

export default LoadingLite;

import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import Lottie from 'react-lottie';
import {
  dottedIndicator,
  ellipsisIndicator,
  solidIndicator,
  twoToneIndicator,
} from './indicators';

export interface LoadingIndicatorProps {
  variant?: 'solid' | 'twotone' | 'dotted' | 'ellipsis';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  labelText?: string;
}

const variants = {
  solid: solidIndicator,
  twotone: twoToneIndicator,
  dotted: dottedIndicator,
  ellipsis: ellipsisIndicator,
};

const sizes = {
  xs: 20,
  sm: 30,
  md: 40,
  lg: 50,
  xl: 60,
};

const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  variant = 'solid',
  size = 'md',
  showLabel = true,
  labelText = 'Loading...',
}) => {
  return (
    <Box textAlign="center" pointerEvents="none">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: variants[variant],
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={sizes[size]}
        width={sizes[size]}
      />
      {showLabel && <Text fontSize="10px">{labelText}</Text>}
    </Box>
  );
};

export default LoadingIndicator;

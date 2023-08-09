import type { MultiStyleConfig } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

export const Slider: MultiStyleConfig = {
  parts: ['container', 'track', 'thumb', 'filledTrack', 'mark'],
  baseStyle({ theme, colorScheme }) {
    return {
      track: {
        h: '8px',
        bg: 'neutral.200',
        rounded: '4px',
      },
      filledTrack: {
        bg: theme.colors[colorScheme]?.[700],
      },
      thumb: {
        w: '24px',
        h: '24px',
        bg: 'white',
        border: '1.5px solid',
        borderColor: 'primary.700',
        _focus: {
          boxShadow: `0px 0px 0px 3px ${applyOpacity(
            theme.colors[colorScheme]?.[100],
            80,
          )}`,
        },
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};

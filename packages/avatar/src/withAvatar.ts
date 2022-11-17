import { MultiStyleConfig } from '@chakra-ui/react';

export default function withAvatar() {
  const Avatar: MultiStyleConfig = {
    parts: [],
    baseStyle: {},
    variants: {},
    defaultProps: {},
    sizes: {},
  };

  return {
    components: {
      Avatar,
    },
  };
}

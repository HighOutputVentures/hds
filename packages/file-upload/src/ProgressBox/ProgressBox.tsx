import { Box, Flex, Icon, Progress, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
  UploadIcon,
  TrashIcon,
  SuccessCircleIcon,
} from '@highoutput/hds-icons';

const color = {
  bg: '#E5E7EB',
  textColor: { gray: '#6B7280', purple: '#6B46C1' },
};

const sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export interface ProgressBox {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  value?: number;
  file?: File[];
  onDelete?: () => void;
}

const ProgressBox: FC<ProgressBox> = ({
  size = 'sm',
  value,
  file,
  onDelete,
}) => {
  const calculateFileSize = (size = 0) => {
    const kilobyte = size / 1024;
    const megabyte = kilobyte / 1024;

    if (megabyte < 1) return `${kilobyte.toFixed(2)}KB`;
    return `${megabyte.toFixed(2)}MB`;
  };

  const files = (file?.length && Array.from(file)) as Record<string, any>[];
  const blob = files?.reduce((f: any) => new Blob([f], { type: f?.type }));

  return (
    <>
      <Flex
        direction="column"
        w="32rem"
        border="2px"
        borderColor={color.bg}
        borderRadius="0.5rem"
        justifyContent="center"
        my={4}
      >
        <Box m={4}>
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <Icon
                color={color.textColor.gray}
                h="2.5rem"
                w="2.5rem"
                as={UploadIcon}
              />
              <Box mx={4}>
                <Text
                  fontWeight={500}
                  size="label-xs-default"
                  isTruncated
                  maxW={320}
                >
                  {blob?.name ?? 'Name'}
                </Text>
                <Text size="paragraph-xs-default" color={color.textColor.gray}>
                  {calculateFileSize(blob?.size)}
                </Text>
              </Box>
            </Flex>
            <Box cursor="pointer" onClick={onDelete}>
              <Icon
                color={color.textColor.gray}
                h="1.25rem"
                w="1.25rem"
                as={value !== 100 ? TrashIcon : SuccessCircleIcon}
              />
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Box w="100%" mr={4} my={2}>
              <Progress
                size={sizes[size]}
                isAnimated
                hasStripe
                value={value}
                colorScheme="purple"
                borderRadius={4}
                max={100}
              />
            </Box>
            <Text color={color.textColor.gray} size="label-xs-default">
              {value}%
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ProgressBox;

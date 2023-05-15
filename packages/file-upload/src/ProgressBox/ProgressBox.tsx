import { Box, Flex, Icon, Progress, Text } from '@chakra-ui/react';
import {
  ErrorUploadIcon,
  SuccessCircleIcon,
  TrashIcon,
  UploadIcon,
} from '@highoutput/hds-icons';
import { FC } from 'react';

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
  hasError?: boolean;
  onDelete?: (data: Record<string, any>) => void;
  onTryAgain?: (data: Record<string, any>) => void;
}

const ProgressBox: FC<ProgressBox> = ({
  size = 'sm',
  value,
  file,
  hasError,
  onDelete,
  onTryAgain,
}) => {
  const calculateFileSize = (size = 0) => {
    const kilobyte = size / 1024;
    const megabyte = kilobyte / 1024;

    if (megabyte < 1) return `${kilobyte.toFixed(2)}KB`;
    return `${megabyte.toFixed(2)}MB`;
  };

  const files = (file?.length && Array.from(file)) as Record<string, any>[];
  const blob = files?.reduce((f: any) => new Blob([f], { type: f?.type }));

  const Icons = hasError ? ErrorUploadIcon : UploadIcon;
  const BGColor = hasError ? 'interface.error.500' : '';
  const BorderColor = hasError ? 'interface.error.600' : 'neutrals.200';

  return (
    <Flex
      direction="column"
      w="32rem"
      border="2px"
      bg={BGColor}
      borderColor={BorderColor}
      borderRadius="0.5rem"
      justifyContent="center"
      my={4}
    >
      <Box m={4}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Icon h="2.5rem" w="2.5rem" as={Icons} />
            <Box mx={4}>
              {hasError && (
                <Text size="label-xs-default" color={'interface.error.900'}>
                  Upload failed, please try again
                </Text>
              )}
              <Text
                fontWeight={500}
                size={!hasError ? 'paragraph-xs-default' : 'label-xs-default'}
                isTruncated
                maxW={320}
                py="1px"
                color={hasError ? 'interface.error.700' : 'neutrals.900'}
              >
                {blob?.name ?? 'Name'}
              </Text>
              {!hasError && (
                <Text size="paragraph-xs-default" color="neutrals.700">
                  {calculateFileSize(blob?.size)}
                </Text>
              )}
            </Box>
          </Flex>
          <Box
            cursor="pointer"
            onClick={onDelete}
            data-testid="hds.progress.delete.button"
          >
            <Icon
              color={!hasError ? 'neutrals.600' : 'interface.error.800'}
              h="1.25rem"
              w="1.25rem"
              as={value !== 100 ? TrashIcon : SuccessCircleIcon}
            />
          </Box>
        </Flex>
        {hasError ? (
          <Text
            mx={14}
            cursor="pointer"
            size="button-default"
            color="interface.error.800"
            onClick={onTryAgain}
          >
            Try Again
          </Text>
        ) : (
          <Flex alignItems="center">
            <Box w="100%" mr={4} my={2}>
              <Progress
                size={sizes[size]}
                isAnimated
                hasStripe
                value={value}
                data-testid="hds.progress"
                colorScheme="purple"
                borderRadius={4}
                max={100}
              />
            </Box>
            <Text
              color="neutrals.700"
              size="label-xs-default"
              data-testid="hds.progress.value"
            >
              {value}%
            </Text>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default ProgressBox;

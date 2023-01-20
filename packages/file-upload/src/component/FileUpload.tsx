import {
  Box,
  Flex,
  Icon,
  Input,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import {
  FileUploadIcon,
  UploadIcon,
  TrashIcon,
  SuccessCircleIcon,
} from '../../../icons';
import { ChangeHandler } from 'react-hook-form';

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

export interface FileUpload {
  accepts?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  value?: number;
  file?: FileList;
  onDelete?: ChangeHandler;
}

const FileUpload: FC<FileUpload> = ({
  accepts,
  onChange,
  disabled,
  onBlur,
  onDelete,
  size = 'sm',
  value,
  file,
}) => {
  const calculateFileSize = (size = 0) => {
    const kilobyte = size / 1024;
    const megabyte = kilobyte / 1024;

    if (megabyte < 1) return `${kilobyte.toFixed(2)}KB`;
    return `${megabyte.toFixed(2)}MB`;
  };

  return (
    <>
      <Flex
        direction="column"
        h="8rem"
        w="32rem"
        border="2px"
        borderColor={color.bg}
        borderRadius="0.5rem"
        pos="relative"
        justifyContent="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="0.75rem"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            h="2.5rem"
            w="2.5rem"
            bg={color.bg}
          >
            <Icon
              color={color.textColor.gray}
              h="1.5rem"
              w="1.5rem"
              as={FileUploadIcon}
            />
          </Box>
        </Box>
        <Stack spacing={1} direction="row" justifyContent="center">
          <Text color={color.textColor.purple} size="button-default">
            Click to upload
          </Text>
          <Text color={color.textColor.gray} size="paragraph-xs-default">
            or drag and drop
          </Text>
        </Stack>
        <Text
          textAlign="center"
          size="paragraph-xxs-default"
          color={color.textColor.gray}
        >
          {accepts?.toLocaleUpperCase()} (max. 800x400px)
        </Text>
        <Input
          id="file"
          type="file"
          w="100%"
          h="100%"
          opacity={0}
          pos="absolute"
          top={0}
          cursor="pointer"
          accept={accepts}
          objectPosition={{
            base: 'center center',
            lg: 'initial',
          }}
          objectFit={{ base: 'cover', lg: 'initial' }}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
      </Flex>

      {file?.length ? (
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
                  <Text fontWeight={500} size="label-xs-default" noOfLines={1}>
                    {file[0]?.name}
                  </Text>
                  <Text
                    size="paragraph-xs-default"
                    color={color.textColor.gray}
                  >
                    {calculateFileSize(file[0]?.size)}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default FileUpload;

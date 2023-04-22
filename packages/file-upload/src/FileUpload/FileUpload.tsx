import { Box, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FileUploadIcon } from '@highoutput/hds-icons';
import { ChangeHandler } from 'react-hook-form';

const color = {
  bg: '#E5E7EB',
  textColor: { gray: '#6B7280', purple: '#6B46C1' },
};

export interface FileUpload {
  accepts?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  disabled?: boolean;
  __testId?: string;
}

const FileUpload: FC<FileUpload> = ({
  accepts,
  onChange,
  __testId,
  disabled,
  onBlur,
}) => {
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
        <Box display="flex" justifyContent="center" alignItems="center" mb="0.75rem">
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
          data-testid={__testId ?? 'hds.file.input.upload'}
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
    </>
  );
};

export default FileUpload;

import { Box, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const FileUploadIcon = require('../../../../assets/icon/file-upload-icon.svg');

const FileUpload: FC = () => {
  return (
    <>
      <Flex
        direction="column"
        h="8rem"
        w="32rem"
        border="2px"
        borderColor="#E5E7EB"
        borderRadius="0.5rem"
        pos="relative"
        justifyContent="center"
      >
        <Box display="flex" justifyContent="center">
          <Icon color="#6B7280" h="2.25rem" w="2.25rem" as={FileUploadIcon} />
        </Box>
        <Stack
          spacing={1}
          direction="row"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          fontWeight={500}
          justifyContent="center"
        >
          <Text color="#6B46C1" size="button-default">
            Click to upload
          </Text>
          <Text color="#6B7280" size="paragraph-xs-default">
            or drag and drop
          </Text>
        </Stack>
        <Text textAlign="center" size="paragraph-xxs-default" color="#6B7280">
          SVG, PNG, JPG or GIF (max. 800x400px)
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
          accept=".png, .gif, .jpeg, .svg"
          objectPosition={{
            base: 'center center',
            lg: 'initial',
          }}
          objectFit={{ base: 'cover', lg: 'initial' }}
        />
      </Flex>
    </>
  );
};

export default FileUpload;

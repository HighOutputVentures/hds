import {
  As,
  Avatar,
  AvatarBadge,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  Image,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
// @ts-ignore
import { UploadIcon } from '@highoutput/hds-icons';
import React from 'react';
export interface MainNotificationsProps {
  title: string;
  supportingDetail: string;
  alertLabel?: {
    label1: string;
    label2?: string;
  };
  alertLinks?: {
    link1: string | VoidFunction;
    link2?: string | VoidFunction;
  };
  isOpen?: boolean;
  onClose?: () => void;
}

export interface ImageNotificationProps extends MainNotificationsProps {
  type: 'image';
  previewImage: string;
  progressValue?: never;
  avatar?: never;
  icon?: never;
  createdAt?: never;
}
export interface AvatarNotificationProps extends MainNotificationsProps {
  type: 'avatar';
  avatar: string;
  progressValue?: never;
  previewImage?: never;
  icon?: never;
  createdAt: string;
}
export interface PrimaryNotificationProps extends MainNotificationsProps {
  type: 'primary';
  icon: As<any> | undefined;
  progressValue?: never;
  previewImage?: never;
  avatar?: never;
  createdAt?: never;
}
export interface UploadNotificationProps extends MainNotificationsProps {
  icon?: never;
  progressValue: string;
  previewImage?: never;
  avatar?: never;
  createdAt?: never;
  type: 'upload';
}
export type NotificationsProps =
  | PrimaryNotificationProps
  | AvatarNotificationProps
  | ImageNotificationProps
  | UploadNotificationProps;
const Notification = (props: NotificationsProps) => {
  const {
    alertLabel,
    alertLinks,
    progressValue,
    previewImage,
    createdAt,
    avatar,
    icon,
    supportingDetail,
    title,
    isOpen,
    type,
    onClose,
  } = props;
  if (!isOpen) return null;
  return (
    <Flex
      padding={'12px 11px '}
      align="start"
      bg={'#FFFFFF'}
      boxShadow="0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
      borderWidth="1px"
      borderColor={`#F2F4F7`}
      // minW="359px"
      direction={['column', 'row']}
      maxW="440px"
      position={'relative'}
      w={'full'}
      gap={'16px'}
      borderRadius={'8px'}
      overflow="hidden"
      data-testid="notification-box"
    >
      {type === 'avatar' && (
        <Avatar src={avatar} width="40px" height="40px">
          <AvatarBadge boxSize="1em" bg="#00C408" />
        </Avatar>
      )}
      {icon && <Icon as={icon} width="40px" height="40px" />}
      {type === 'upload' && (
        <Icon as={UploadIcon} width={'46px'} height={'46px'} />
      )}
      <Flex direction="column" ml={['0', type === 'image' ? '100px' : '0']}>
        <HStack spacing={'8px'} alignContent="center" mb="4px">
          <Text
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={' 14px'}
            letterSpacing={'0.02em '}
            color="neutrals.900"
          >
            {title}
          </Text>
          {createdAt && <Text size="paragraph-xs-default">{createdAt}</Text>}
        </HStack>
        <Text size="paragraph-xs-default" mb="16px" color="neutrals.600">
          {supportingDetail}
        </Text>
        {type === 'upload' && (
          <Stack w="full" height="36px" spacing="8px" mb="16px">
            <Progress
              colorScheme={'purple'}
              value={progressValue ? parseInt(progressValue) : undefined}
              height={'8px'}
              borderRadius="4px"
            />
            <Text
              fontWeight={500}
              fontSize="14px"
              lineHeight={'20px'}
              width="full"
              color="neutrals.700"
              textAlign={'right'}
            >
              {`${progressValue}% uploaded...`}
            </Text>
          </Stack>
        )}
        {type === 'image' && (
          <Image
            src={previewImage}
            width={['100%', '80px']}
            maxHeight={'122px'}
            height={'100%'}
            objectFit={'cover'}
            objectPosition={'center'}
            position={['relative', 'absolute']}
            left={[null, 0]}
            mb={['16px', '0px']}
          />
        )}

        {alertLinks && alertLabel && (
          <HStack spacing="12px">
            <Text
              as="a"
              color="neutrals.600"
              fontSize={'18px'}
              lineHeight="24px"
              fontWeight={500}
              cursor="pointer"
              href={`${alertLinks.link1}`}
              target={'_blank'}
            >
              {alertLabel.label1}
            </Text>
            <Text
              as="a"
              href={`${alertLinks.link2}`}
              target={'_blank'}
              cursor="pointer"
            >
              <Text
                as="span"
                color={'#8A68EF'}
                fontSize={'18px'}
                lineHeight="24px"
                fontWeight={500}
                mr={'10px'}
              >
                {alertLabel.label2}
              </Text>
            </Text>
          </HStack>
        )}
      </Flex>
      <Box width={'20px'} height={'20px'}></Box>
      <CloseButton
        position="absolute"
        right={'15px'}
        top={'15px'}
        color={'neutrals.600'}
        _hover={{ background: 'none' }}
        onClick={onClose}
        width={'20px'}
        height={'20px'}
      />
    </Flex>
  );
};

export default Notification;

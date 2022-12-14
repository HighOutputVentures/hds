import { ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { CloseButton, Flex, HStack, Icon, Text } from '@chakra-ui/react';
// @ts-ignore
import { CheckCircleGreenIcon, WarningIcon } from '@highoutput/hds-icons';
import React from 'react';

export interface AlertsProps {
  status: 'info' | 'warning' | 'success' | 'error' | 'default';
  title: string;
  supportingDetail: string;
  alertLabel: {
    label1: string;
    label2?: string;
  };
  alertLinks: {
    link1: string | VoidFunction;
    link2?: string | VoidFunction;
  };
  isOpen?: boolean;
  onClose?: () => void;
}
const Alert = (props: AlertsProps) => {
  const {
    status,
    supportingDetail,
    title,
    isOpen,
    onClose,
    alertLabel,
    alertLinks,
  } = props;

  const AlertIcon =
    status === 'success'
      ? CheckCircleGreenIcon
      : status === 'warning'
      ? WarningIcon
      : InfoOutlineIcon;
  const BGColor =
    status === 'success'
      ? 'interface.success.500'
      : status === 'warning'
      ? 'interface.warning.500'
      : status === 'error'
      ? 'interface.error.500'
      : status === 'info'
      ? '#EDE8FC'
      : '#FCFCFD';

  const AlertTitleColor =
    status === 'success'
      ? 'interface.success.900'
      : status === 'warning'
      ? 'interface.warning.900'
      : status === 'error'
      ? 'interface.error.900 '
      : status === 'info'
      ? '#4A3880'
      : 'neutrals.900';
  const AlertDescColor =
    status === 'success'
      ? 'interface.success.800'
      : status === 'warning'
      ? 'interface.warning.800'
      : status === 'error'
      ? 'interface.error.800 '
      : status === 'info'
      ? '#5F48A3'
      : 'neutrals.800';
  const CloseBtnColor =
    status === 'success'
      ? 'interface.success.700'
      : status === 'warning'
      ? 'interface.warning.700'
      : status === 'error'
      ? 'interface.error.700 '
      : status === 'info'
      ? '#8A68EF'
      : 'neutrals.700';
  const BoxBorderColor =
    status === 'success'
      ? 'interface.success.600'
      : status === 'warning'
      ? 'interface.warning.600'
      : status === 'error'
      ? 'interface.error.600 '
      : status === 'info'
      ? '#C3B8E6'
      : 'neutrals.600';
  if (!isOpen) return null;
  return (
    <>
      <Flex
        padding={'16px'}
        align="start"
        bg={BGColor}
        borderWidth="1px"
        borderColor={`${BoxBorderColor}`}
        direction={['column', 'row']}
        maxW="1216px"
        position={'relative'}
        gap={'13.67px'}
        borderRadius={'8px'}
        data-testid="alert-box"
      >
        <Icon
          as={AlertIcon}
          position="relative"
          top={'3px'}
          color={AlertTitleColor}
        />
        <Flex direction="column">
          <Text
            color={AlertTitleColor}
            fontSize={'14px'}
            mb="4px"
            lineHeight="20px"
          >
            {title}
          </Text>
          <Text
            color={AlertDescColor}
            fontSize={'14px'}
            mb="12px"
            lineHeight="20px"
          >
            {supportingDetail}
          </Text>
          <HStack spacing="12px">
            <Text
              as="a"
              color={AlertDescColor}
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
                color={status === 'default' ? '#8A68EF' : AlertTitleColor}
                fontSize={'18px'}
                lineHeight="24px"
                fontWeight={500}
                mr={'12px'}
              >
                {alertLabel.label2}
              </Text>

              <Icon
                as={ArrowForwardIcon}
                color={status === 'default' ? '#8A68EF' : AlertTitleColor}
                width={'20px'}
                height={'20px'}
              />
            </Text>
          </HStack>
        </Flex>
        <CloseButton
          position="absolute"
          right={'5px'}
          top={'5px'}
          color={CloseBtnColor}
          _hover={{ background: 'none' }}
          onClick={onClose}
        />
      </Flex>
    </>
  );
};

export default Alert;

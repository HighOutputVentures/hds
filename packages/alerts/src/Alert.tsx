import { ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { CloseButton, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';

const CheckCircleGreenIcon = () => (
  <Icon width="20px" height="20px" viewBox="0 0 20 20" fill="none">
    <path
      d="M6.25008 9.99996L8.75008 12.5L13.7501 7.49996M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
      stroke="#139E19"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

const WarningIcon = () => (
  <Icon width="20px" height="20px" viewBox="0 0 20 20" fill="none">
    <path
      d="M9.99988 7.49995V10.8333M9.99988 14.1666H10.0082M8.84598 3.24305L1.9919 15.0819C1.61173 15.7386 1.42165 16.0669 1.44974 16.3364C1.47425 16.5714 1.59739 16.785 1.78852 16.924C2.00765 17.0833 2.38704 17.0833 3.14581 17.0833H16.8539C17.6127 17.0833 17.9921 17.0833 18.2112 16.924C18.4024 16.785 18.5255 16.5714 18.55 16.3364C18.5781 16.0669 18.388 15.7386 18.0078 15.0819L11.1538 3.24305C10.775 2.58875 10.5856 2.26159 10.3385 2.15172C10.1229 2.05587 9.87684 2.05587 9.66129 2.15172C9.41419 2.26159 9.22478 2.58875 8.84598 3.24305Z"
      stroke="#E69A00"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export interface AlertsProps {
  status: 'info' | 'warning' | 'success' | 'error' | 'default';
  title: string;
  supportingDetail: string;
  alertLabel: [label1: string, label2?: string];
  alertLinks: [link1: string | VoidFunction, link2?: string | VoidFunction];
  isOpen?: boolean;
  onClose?: () => void;
}
const Alert = (props: AlertsProps) => {
  const {
    status = 'default',
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
    <Flex
      padding={'16px '}
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
            href={`${alertLinks[0]}`}
            target={'_blank'}
          >
            {alertLabel[0]}
          </Text>
          <Text
            as="a"
            href={`${alertLinks[1]}`}
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
              {alertLabel[1]}
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
  );
};

export default Alert;

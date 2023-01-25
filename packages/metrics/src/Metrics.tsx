import { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import ArrowDown from './icons/ArrowDown';
import ArrowUp from './icons/ArrowUp';
import NegativeChartIcon from './icons/NegativeChartIcon';
import PositiveChartIcon from './icons/PositiveChartIcon';
import { DotsVerticalIcon } from '@highoutput/hds-icons';

export interface MetricsProps {
  /** Percentage change of Metric */
  percentage: number;
  /** Field to check total change of the metric positive negative or neutral(no change) */
  metricChange: 'positive' | 'negative';
  /** Main Label of the Metric */
  metricLabel?: string;
  icon?: React.ReactNode;
  metricValue?: string;
  /** Text for when you last viewed the metric */
  lastViewedText?: string;
  /** View Details button Text */
  viewDetailsText?: string;
  /** View Callback function you can add your modal or redirection to page here */
  viewDetailsCallback?: () => {};
  showChart?: boolean;
}

const Metrics: FC<MetricsProps> = ({
  percentage,
  metricChange,
  metricLabel,
  icon,
  metricValue,
  lastViewedText,
  viewDetailsText,
  viewDetailsCallback,
  showChart,
}) => {
  return (
    <Flex
      flexDir="column"
      minHeight={114}
      maxW="390px"
      bg="white"
      border="1px solid #FCFCFC"
      padding="20px 16px"
      boxShadow="0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
      border-radius="8px"
    >
      <HStack mr={8} w="full" align="start" justify="space-between">
        <HStack>
          {icon}
          <Text size="label-sm-default">{metricLabel}</Text>
        </HStack>
        <Icon as={DotsVerticalIcon} color="neutrals.500" />
      </HStack>

      <HStack w="full" spacing="16px" mt="24px">
        <VStack w="full" align="start" spacing="16px">
          <Text mt={2} size="header-4">
            {metricValue}
          </Text>
          <HStack height="18px" borderRadius="16px" padding="2px 10px 2px 0px">
            {metricChange === 'positive' ? (
              <Icon as={ArrowUp} />
            ) : (
              <Icon as={ArrowDown} />
            )}
            <Text
              color={
                metricChange === 'positive'
                  ? 'interface.success.900'
                  : 'interface.error.900'
              }
              size="label-xs-default"
            >
              {percentage}%
            </Text>
            <Text color="neutrals.500">{lastViewedText}</Text>
          </HStack>
        </VStack>
        {showChart && metricChange === 'positive' && (
          <Box maxW="128px" w="full" maxH="64px" h="full">
            <Icon as={PositiveChartIcon} w="full" h="full" />
          </Box>
        )}{' '}
        {showChart && metricChange === 'negative' && (
          <Box maxW="128px" w="full" maxH="64px" h="full">
            <Icon as={NegativeChartIcon} w="full" h="full" />
          </Box>
        )}
      </HStack>

      {viewDetailsText && (
        <Button
          mt="16px"
          fontWeight="semibold"
          _hover={{
            textDecoration: 'none',
            color: 'brand.primary.700',
          }}
          alignSelf="end"
          onClick={() => {
            if (viewDetailsCallback) viewDetailsCallback();
          }}
          variant="link"
          color="brand.primary.900"
        >
          {viewDetailsText}
        </Button>
      )}
    </Flex>
  );
};

export default Metrics;

import { FC } from 'react';
import { Button, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import ArrowDown from './icons/ArrowDown';
import ArrowUp from './icons/ArrowUp';

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
  viewDetailsCalllback?: () => {};
}

const Metrics: FC<MetricsProps> = ({
  percentage,
  metricChange,
  metricLabel,
  icon,
  metricValue,
  lastViewedText,
  viewDetailsText,
  viewDetailsCalllback,
}) => {
  return (
    <Flex
      flexDir="column"
      minHeight={114}
      width="344px"
      bg="white"
      border="1px solid #FCFCFC"
      padding="20px 16px"
      boxShadow="0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
      border-radius="8px"
    >
      <HStack mr={8}>
        {icon}
        <Text size="label-sm-default">{metricLabel}</Text>
      </HStack>

      <Text mt={2} size="header-4">
        {metricValue}
      </Text>
      <HStack
        height="18px"
        mt={2}
        borderRadius="16px"
        padding="2px 10px 2px 0px"
      >
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

      <Button
        mt={5}
        fontWeight="semibold"
        _hover={{
          textDecoration: 'none',
          color: 'brand.primary.700',
        }}
        alignSelf="end"
        onClick={() => {
          if (viewDetailsCalllback) viewDetailsCalllback();
        }}
        variant="link"
        color="brand.primary.900"
      >
        {viewDetailsText}
      </Button>
    </Flex>
  );
};

export default Metrics;

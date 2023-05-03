import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, SystemStyleObject, Text } from '@chakra-ui/react';
import { Button } from '@highoutput/hds-forms';
import { FC, ReactElement } from 'react';
import CloudIcon from './CloudIcon';

export type EmptyStateProps = Omit<SystemStyleObject, 'onSubmit'> & {
  icon?: ReactElement;
  header: string;
  subHeader: string;
  hasPrimaryButton?: boolean;
  primaryButtonLabel?: string;
  primaryButtonIcon?: JSX.Element;
  hasSecondaryButton?: string;
  secondaryButtonLabel?: string;
  onClear?(): void;
  onSubmit?(): void;
};

const EmptyState: FC<EmptyStateProps> = (props) => {
  const {
    icon = <Icon as={CloudIcon} w="220px" h="160px" />,
    header,
    subHeader,
    hasPrimaryButton = true,
    hasSecondaryButton = true,
    primaryButtonLabel = 'Clear Search',
    primaryButtonIcon = <AddIcon w={3} h={3} />,
    secondaryButtonLabel = 'New Project',
    onClear,
    onSubmit,
    ...others
  } = props;

  return (
    <Box sx={others}>
      <Flex
        direction="column"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        padding={{
          base: 4,
          lg: 0,
        }}
      >
        <Box
          pb={{
            base: 6,
            lg: 8,
          }}
        >
          {icon}
        </Box>

        <Text
          size={{
            lg: 'label-sm-default',
            md: 'paragraph-sm-default',
          }}
          fontWeight={500}
        >
          {header}
        </Text>

        <Text
          mt={{
            base: 1,
            lg: 2,
          }}
          w={{ md: 352 }}
          size="paragraph-sm-default"
          color="Gray.500"
        >
          {subHeader}
        </Text>

        <Flex gap={4} mt={8}>
          {hasSecondaryButton && (
            <Button variant="outline" accent="gray" onClick={onClear}>
              {secondaryButtonLabel}
            </Button>
          )}

          {hasPrimaryButton && (
            <Button leftIcon={primaryButtonIcon} onClick={onSubmit}>
              {primaryButtonLabel}
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default EmptyState;

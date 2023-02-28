import { MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox as ChakraCheckbox,
  CheckboxIcon,
  CheckboxProps,
  Icon,
  IconProps,
  Text,
  useMultiStyleConfig,
  VStack,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { omit } from './utils';

export type CheckTypeProps = {
  type: 'checkboxType';
  checkbox_icon: 'minusIcon' | 'checkIcon';
};

export type RadioTypeProps = {
  type: 'radioType';
  radio_icon: 'circleIcon' | 'checkIcon';
};

export type CheckProps = (CheckTypeProps | RadioTypeProps) &
  Pick<
    CheckboxProps,
    | 'defaultValue'
    | 'defaultChecked'
    | 'isChecked'
    | 'onChange'
    | 'onFocus'
    | 'isFocusable'
    | 'value'
    | 'isInvalid'
    | 'aria-label'
    | 'size'
  > & {
    helperMsg?: string;
    label?: string | ReactNode;
    onCheck?: (value: boolean) => void;
    variant?: 'primary.outlined' | 'primary.solid';
    disabled?: boolean;
    __testId?: string;
  };

const checkboxHoverStyle = (variant: 'primary.outlined' | 'primary.solid') => {
  return {
    _hover: {
      "span[class*='checkbox__control']:not([data-disabled])": {
        bg: 'brand.primary.500',
        borderColor: 'brand.primary.700',
        color: 'brand.primary.500',
        _checked: {
          bg: `${variant === 'primary.outlined' ? 'brand.primary.500' : 'brand.primary.900'}`,
          borderColor: `${
            variant === 'primary.outlined' ? 'brand.primary.700' : 'brand.primary.900'
          }`,
          color: `${variant === 'primary.outlined' ? 'brand.primary.700' : 'alpha.white.500'}`,
        },
      },
    },
  };
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckProps>((props, ref) => {
  const { size, variant, disabled, ...others } = props;

  const styles = useMultiStyleConfig('Checkbox', { variant, size });

  var classHover = checkboxHoverStyle(variant || 'primary.outlined');

  const checkboxIcon = () => {
    if (props.type === 'checkboxType' && props.checkbox_icon === 'minusIcon') {
      return <MinusIcon data-testid={`hds.checkbox.minus.icon`} />;
    }
    return <CheckboxIcon data-testid={`hds.checkbox.check.icon`} />;
  };

  const radioIcon = () => {
    const iconSize = size === 'md' ? 'xs' : size === 'lg' ? 'md' : size === 'xl' ? '16px' : '8px';
    if (props.type === 'radioType' && props.radio_icon === 'checkIcon') {
      return <Icon as={CheckboxIcon} fontSize={iconSize} />;
    }
    return <CircleIcon fontSize={iconSize} data-testid={`hds.checkbox.circle.icon`} />;
  };

  return (
    <React.Fragment>
      {props.type === 'checkboxType' && (
        <ChakraCheckbox
          variant={variant}
          size={size}
          ref={ref}
          icon={checkboxIcon()}
          isDisabled={disabled}
          sx={classHover}
          data-testid={props.__testId ?? `hds.checkbox`}
          onChange={({ target }) => {
            props.onCheck?.(target.checked);
          }}
          {...omit(others, 'onCheck', 'helperMsg', '__testId')}
        >
          {typeof props.label === 'string' ? (
            <CheckboxLabel checkboxLabel={props.label} helperMsg={props.helperMsg} />
          ) : (
            <Box>{props.label}</Box>
          )}
        </ChakraCheckbox>
      )}
      {props.type === 'radioType' && (
        <ChakraCheckbox
          variant={variant}
          size={size}
          ref={ref}
          data-testid={props.__testId ?? `hds.checkbox`}
          sx={classHover}
          isDisabled={disabled}
          styleConfig={{
            baseStyle: {
              control: {
                ...styles.control,
                borderRadius: 'full',
              },
            },
          }}
          onChange={({ target }) => {
            props.onCheck?.(target.checked);
          }}
          icon={radioIcon()}
          {...omit(others, 'onCheck', 'helperMsg', '__testId')}
        >
          {props.label && typeof props.label === 'string' ? (
            <CheckboxLabel checkboxLabel={props.label} helperMsg={props.helperMsg} />
          ) : (
            props.label && <Box>{props.label}</Box>
          )}
        </ChakraCheckbox>
      )}
    </React.Fragment>
  );
});

export default Checkbox;

interface CheckboxLabelProps {
  checkboxLabel: string;
  helperMsg?: string;
}

const CheckboxLabel = ({ checkboxLabel, helperMsg }: CheckboxLabelProps) => {
  return (
    <VStack align="start" justify="start" spacing={0}>
      <Text size="label-xs-default" color="neutrals.900" data-testid={`hds.checkbox.label`}>
        {checkboxLabel}
      </Text>
      {helperMsg && (
        <Text size="label-xs-default" color="neutrals.600" data-testid={`hds.checkbox.helperMsg`}>
          {helperMsg}
        </Text>
      )}
    </VStack>
  );
};

export const CircleIcon = (props: Omit<IconProps, 'children' | 'css'>) => (
  <Icon
    width="8px"
    height="8px"
    verticalAlign={'center'}
    viewBox="0 0 200 200"
    fill="brand.primary.900"
    {...props}
  >
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

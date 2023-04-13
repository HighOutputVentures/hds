import { MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox as ChakraCheckbox,
  CheckboxIcon,
  CheckboxProps,
  Icon,
  IconProps,
  MultiStyleConfig,
  ResponsiveValue,
  Text,
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
          bg: `${
            variant === 'primary.outlined'
              ? 'brand.primary.500'
              : 'brand.primary.900'
          }`,
          borderColor: `${
            variant === 'primary.outlined'
              ? 'brand.primary.700'
              : 'brand.primary.900'
          }`,
          color: `${
            variant === 'primary.outlined'
              ? 'brand.primary.700'
              : 'alpha.white.500'
          }`,
        },
      },
    },
  };
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckProps>(
  (props, ref) => {
    const { size, variant, disabled, ...others } = props;
    const styleConfigRadio = useCheckboxStyleConfig({
      size: size,
      variant: variant,
      type: 'radio',
    });
    const styleConfigCheckbox = useCheckboxStyleConfig({
      size: size,
      variant: variant,
      type: 'checkbox',
    });

    var classHover = checkboxHoverStyle(variant || 'primary.outlined');

    const checkboxIcon = () => {
      if (
        props.type === 'checkboxType' &&
        props.checkbox_icon === 'minusIcon'
      ) {
        return <MinusIcon data-testid={`hds.checkbox.minus.icon`} />;
      }
      return <CheckboxIcon data-testid={`hds.checkbox.check.icon`} />;
    };

    const radioIcon = () => {
      const iconSize =
        size === 'md'
          ? 'xs'
          : size === 'lg'
          ? 'md'
          : size === 'xl'
          ? '16px'
          : '8px';
      if (props.type === 'radioType' && props.radio_icon === 'checkIcon') {
        return <Icon as={CheckboxIcon} fontSize={iconSize} />;
      }
      return (
        <CircleIcon
          fontSize={iconSize}
          data-testid={`hds.checkbox.circle.icon`}
        />
      );
    };

    return (
      <React.Fragment>
        {props.type === 'checkboxType' && (
          <ChakraCheckbox
            variant={variant}
            size={size}
            ref={ref}
            icon={checkboxIcon()}
            sx={classHover}
            isDisabled={disabled}
            styleConfig={styleConfigCheckbox}
            data-testid={props.__testId ?? `hds.checkbox`}
            onChange={({ target }) => {
              props.onCheck?.(target.checked);
            }}
            {...omit(others, 'onCheck', 'helperMsg', '__testId')}
          >
            {typeof props.label === 'string' ? (
              <CheckboxLabel
                checkboxLabel={props.label}
                helperMsg={props.helperMsg}
              />
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
            styleConfig={styleConfigRadio}
            icon={radioIcon()}
            isDisabled={disabled}
            onChange={({ target }) => {
              props.onCheck?.(target.checked);
            }}
            {...omit(others, 'onCheck', 'helperMsg', '__testId')}
          >
            {props.label && typeof props.label === 'string' ? (
              <CheckboxLabel
                checkboxLabel={props.label}
                helperMsg={props.helperMsg}
              />
            ) : (
              props.label && <Box>{props.label}</Box>
            )}
          </ChakraCheckbox>
        )}
      </React.Fragment>
    );
  }
);

export default Checkbox;

interface CheckboxLabelProps {
  checkboxLabel: string;
  helperMsg?: string;
}

const CheckboxLabel = ({ checkboxLabel, helperMsg }: CheckboxLabelProps) => {
  return (
    <VStack align="start" justify="start" spacing={0}>
      <Text
        size="label-xs-default"
        color="neutrals.900"
        data-testid={`hds.checkbox.label`}
      >
        {checkboxLabel}
      </Text>
      {helperMsg && (
        <Text
          size="label-xs-default"
          color="neutrals.600"
          data-testid={`hds.checkbox.helperMsg`}
        >
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
type UseCheckboxStyleConfigArg = {
  size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg'> | undefined;
  variant: 'primary.outlined' | 'primary.solid' | undefined;
  type: 'radio' | 'checkbox';
};
function useCheckboxStyleConfig(arg: UseCheckboxStyleConfigArg) {
  const styleConfig = React.useMemo<MultiStyleConfig>(
    function getStyleConfig() {
      return {
        parts: ['control', 'icon'],
        baseStyle: {
          control: {
            borderColor: 'neutrals.300',
            borderWidth: '2px',
            borderStyle: 'solid',
            padding: '6px',
            _focus: { boxShadow: '0px 0px 0px 4px #F4EBFF' },
            _checked: {
              color: 'black',
            },
            color: 'transparent',
            bg: 'alpha.white.500',
            _disabled: {
              borderColor: 'neutrals.200',
              bg: 'neutrals.100',
              _checked: {
                borderColor: 'neutrals.200',
                bg: 'neutrals.100',
                color: 'neutrals.200',
              },
            },
            rounded: arg.type === 'radio' ? 'full' : 'base',
          },
        },
        sizes: {
          sm: {
            control: {
              w: '16px',
              h: '16px',
            },
            icon: {
              w: '8px',
              h: '8px',
            },
          },
          md: {
            control: {
              w: '20px',
              h: '20px',
            },
            icon: {
              w: '10px',
              h: '10px',
            },
          },
          lg: {
            control: {
              w: '24px',
              h: '24px',
            },
            icon: {
              w: '10px',
              h: '10px',
            },
          },
          xl: {
            control: {
              w: '32px',
              h: '32px',
            },
            icon: {
              w: '12px',
              h: '12px',
            },
          },
        },
        variants: {
          'primary.outlined': {
            control: {
              pointerEvents: 'none',
              _checked: {
                bg: 'brand.primary.500',
                color: 'brand.primary.700',
                borderColor: 'brand.primary.700',
                border: '1px solid',
              },
            },
          },
          'primary.solid': {
            control: {
              pointerEvents: 'none',
              _checked: {
                bg: 'brand.primary.700',
                color: 'alpha.white.500',
                borderColor: 'brand.primary.700',
                border: '1px solid',
              },
            },
          },
        },
        defaultProps: {
          variant: 'primary.outlined',
          size: 'sm',
        },
      };
    },
    [arg]
  );

  return styleConfig;
}

import {
  Box,
  Checkbox as ChakraCheckbox,
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps,
  CheckboxProps as ChakraCheckboxProps,
  Icon,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import CheckIcon from '../icons/CheckIcon';
import MinusIcon from '../icons/MinusIcon';
import { Size, Variant } from '../types';
import { useCheckboxStyleConfig } from './hooks';

type BaseProps = Omit<
  ChakraCheckboxProps,
  /* restrict from using these props */
  | 'as'
  | 'sx'
  | 'size'
  | 'icon'
  | 'variant'
  | 'iconSize'
  | 'iconColor'
  | 'inputProps'
  | 'styleConfig'
>;

export interface CheckboxProps extends BaseProps {
  size?: Size;
  hint?: string;
  label?: string;
  variant?: Variant;
  __testId?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    size = 'md',
    hint,
    label,
    variant = 'outline',
    __testId = 'hds.checkbox.input',
    ...others
  } = props;

  const styleConfig = useCheckboxStyleConfig({
    size,
    variant,
  });

  const shouldShowLabelSect = !!label || !!hint;

  const CheckboxIcon = React.useMemo(() => {
    if (others.isIndeterminate) {
      return MinusIcon;
    } else {
      return CheckIcon;
    }
  }, [others.isIndeterminate]);

  return (
    <ChakraCheckbox
      ref={ref}
      icon={<Icon as={CheckboxIcon} />}
      styleConfig={styleConfig}
      data-testid={__testId}
      {...others}
    >
      {shouldShowLabelSect && (
        <Box>
          <Text
            sx={{
              color: 'neutrals.900',
              margin: '0px',
              fontSize: '14px',
              lineHeight: '14px',
              letterSpacing: '0.02em',
            }}
            data-testid="hds.checkbox.label"
          >
            {label}
          </Text>
          <Text
            sx={{
              color: 'neutrals.600',
              fontSize: '14px',
              lineHeight: '14px',
              letterSpacing: '0.02em',

              ...(size === 'sm' && { marginTop: '0px' }),
              ...(size === 'md' && { marginTop: '2px' }),
            }}
            data-testid="hds.checkbox.hint"
          >
            {hint}
          </Text>
        </Box>
      )}
    </ChakraCheckbox>
  );
});

export const CheckboxGroup = ChakraCheckboxGroup;

export type CheckboxGroupProps = Pick<
  ChakraCheckboxGroupProps,
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'isDisabled'
  | 'isNative' /* might need this just in case */
  | 'children'
> & {
  size?: Size;
  variant?: Variant;
};

export default Checkbox;

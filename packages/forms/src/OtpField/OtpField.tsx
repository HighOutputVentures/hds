import {
  Box,
  Flex,
  PinInput,
  PinInputField,
  PinInputFieldProps,
  PinInputProps,
} from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import { Prettify } from '../types';

type Picked = Pick<
  PinInputProps,
  | 'type'
  | 'value'
  | 'onChange'
  | 'onComplete'
  | 'defaultValue'
  | 'autoFocus'
  | 'placeholder'
>;

type Size = 'sm' | 'md' | 'lg';

type Base = {
  size?: Size;
  fieldCount?: 4 | 6;
  __fieldTestId?: string;
};

export type OtpFieldProps = Prettify<Picked & Base & FormGroupProps>;

export default function OtpField(props: OtpFieldProps) {
  const {
    type = 'number',
    size = 'sm',
    value,
    onChange,
    onComplete,
    defaultValue,
    placeholder = '0',
    fieldCount = 4,
    __fieldTestId = 'hds.otp-field.input',
    ...others
  } = props;

  const styles = useStyles();

  const fields = React.useMemo(() => {
    return new Array(fieldCount).fill(null).reduce<Field[]>((...args) => {
      const hasSeparator = fieldCount === 6 && args[2] === 2;

      let array: Field[];

      array = [...args[0]];
      array = [
        ...array,
        { render: (props: PinInputFieldProps) => <PinInputField {...props} /> },
      ];

      return !hasSeparator
        ? array
        : [
            ...array,
            {
              render: (props: SeparatorProps) => <Separator {...props} />,
              isSeparator: true,
            },
          ];
    }, []);
  }, [fieldCount]);

  return (
    <FormGroup {...others}>
      <Flex gap={3} alignItems="center" width="fit-content">
        <PinInput
          otp
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onComplete={onComplete}
          defaultValue={defaultValue}
          styleConfig={{ baseStyle: {}, sizes: {} }}
        >
          {fields.map(({ render, isSeparator }) =>
            render({
              key: uuid(),
              ...(!isSeparator && {
                sx: {
                  ...styles.field,

                  ...(size === 'sm' && {
                    width: '64px',
                    height: '64px',
                  }),

                  ...(size === 'md' && {
                    width: '80px',
                    height: '80px',
                  }),

                  ...(size === 'lg' && {
                    width: '96px',
                    height: '96px',
                  }),

                  color: 'brand.primary.700',
                  fontSize: '44px',
                  fontWeight: 'semibold',
                  textAlign: 'center',
                  display: 'block',
                  rounded: '8px',
                },

                ...(!!others.error && {
                  'data-invalid': true,
                }),

                'data-testid': __fieldTestId,
              }),
            }),
          )}
        </PinInput>
      </Flex>
    </FormGroup>
  );
}

type Field =
  | {
      render(props: PinInputFieldProps): JSX.Element;
      isSeparator?: false;
    }
  | {
      render(props: SeparatorProps): JSX.Element;
      isSeparator: true;
    };

type SeparatorProps = {
  size?: Size;
};

function Separator(_: SeparatorProps) {
  return (
    <Box
      width={5}
      height={2}
      bgColor="neutrals.200"
      display="inline-block"
      rounded="sm"
    />
  );
}

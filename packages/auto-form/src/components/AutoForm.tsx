import { Box, Button, VStack } from '@chakra-ui/react';
import { MultilineField, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

export type AutoFormProps = {
  yupSchema?: any;
  onSubmitForm?(v: any): void;
  placeholders?: Array<string>;
};

export enum InputTypeEnum {
  Textarea = 'textarea',
  Input = 'input',
}

export interface InputTypeProps {
  key: string;
  label: string;
  placeholder: string;
}

const getInputType = (
  input: InputTypeProps,
  type: InputTypeEnum,
  form: UseFormReturn
) => {
  const { key, placeholder, label } = input;
  const { register, formState } = form;
  const { isSubmitting, errors } = formState;
  const error = errors[`${key}`]?.message as unknown as string;

  const input_type = {
    textarea: (
      <MultilineField
        {...register(key)}
        key={key}
        id={key}
        label={label}
        __fieldTestId="hds.autoform.multiline-field"
        placeholder={placeholder}
        error={error}
        isDisabled={isSubmitting}
        styles={{
          width: '100%',
        }}
      />
    ),
    input: (
      <TextField
        {...register(key)}
        key={key}
        id={key}
        label={label}
        __fieldTestId="hds.autoform.text-field"
        placeholder={placeholder}
        error={error}
        isDisabled={isSubmitting}
      />
    ),
  };

  return input_type[type];
};

const AutoForm: FC<AutoFormProps> = (props) => {
  const { yupSchema, onSubmitForm, placeholders } = props;

  const dataKey = Object.keys(yupSchema.fields);

  const form = useForm({
    resolver: yupResolver(yupSchema),

    shouldUnregister: true,
  });

  const { handleSubmit } = form;

  const onSubmitData = (s: any) => {
    if (onSubmitForm) onSubmitForm(s);
  };

  return (
    <Box width={512}>
      <VStack as={'form'} onSubmitCapture={handleSubmit(onSubmitData)}>
        {dataKey.map((key, idx) => {
          const input = {
            key,
            label:
              yupSchema.fields[`${key}`].spec.label ??
              key.charAt(0).toUpperCase() + key.slice(1),
            placeholder: placeholders?.[idx],
          } as InputTypeProps;
          const type = yupSchema.fields[`${key}`].spec?.meta?.type || 'input';

          return getInputType(input, type, form);
        })}
        <Button
          type="submit"
          variant={'primary'}
          width={'100%'}
          data-testid="hds.button-form.submit"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default AutoForm;

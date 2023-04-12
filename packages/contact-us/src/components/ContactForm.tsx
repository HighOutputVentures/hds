import { Alert, AlertDescription, AlertIcon, Button } from '@chakra-ui/react';
import { Box, Stack } from '@highoutput/hds';
import { MultilineField, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useSupport from './useSupport';
import {
  ContactFormInputProps,
  withContactFormSchema,
  withContactFormSchemaValues,
} from './validation';

export interface ContactFormProps {
  onSubmit?(values: ContactFormInputProps): void;
  url?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const { onSubmit, url } = props;
  const { postSupport, hasError, isSuccess, isLoading } = useSupport();
  const { register, handleSubmit, formState, reset } =
    useForm<withContactFormSchemaValues>({
      resolver: yupResolver(withContactFormSchema),
      defaultValues: {
        emailAddress: '',
        message: '',
        details: {
          name: '',
        },
      },
      shouldUnregister: true,
    });

  const onSubmitForm = async (values: withContactFormSchemaValues) => {
    if (url) {
      await postSupport(url, values);

      reset({
        emailAddress: '',
        message: '',
        details: {
          name: '',
        },
      });
    }

    if (onSubmit) onSubmit(values);
  };

  const { isSubmitting, errors } = formState;

  return (
    <Box maxW={512} data-testid="box.contactform.container">
      <Box
        as="form"
        onSubmitCapture={handleSubmit(onSubmitForm)}
        data-testid="box.contactform.form"
      >
        <Stack spacing={4}>
          <TextField
            {...register('details.name')}
            id="name"
            label="Name"
            placeholder="Input your name"
            error={errors.details?.name?.message}
            isDisabled={isSubmitting}
          />
          <TextField
            {...register('emailAddress')}
            id="emailAddress"
            label="Email"
            placeholder="Input your email address"
            error={errors.emailAddress?.message}
            isDisabled={isSubmitting}
            data-testid="input.contactform.email"
          />
          <MultilineField
            {...register('message')}
            id="message"
            label="Desciption of concern"
            placeholder="Enter description"
            error={errors.message?.message}
            isDisabled={isSubmitting}
            data-testid="textarea.contactform.description"
          />
          <Button
            w="full"
            variant="primary"
            isLoading={isSubmitting || isLoading}
            type="submit"
            data-testid="button.contactform.submit"
          >
            Send
          </Button>

          {hasError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>Oops, Something went wrong.</AlertDescription>
            </Alert>
          )}

          {isSuccess && (
            <Alert status="success">
              <AlertIcon />
              <AlertDescription>Message successfully sent!</AlertDescription>
            </Alert>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactForm;

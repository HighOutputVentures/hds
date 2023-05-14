import { chakra, Stack, SystemStyleObject } from '@chakra-ui/react';
import { Button, PasswordField, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { EmailPasswordLoginSchema, TEmailPasswordLoginSchema } from './validators';

type FieldConfig = {
  label?: string;
};

type ButtonConfig = {
  label?: string;
};

export type EmailPasswordLoginFormProps = Omit<SystemStyleObject, 'onSubmit'> & {
  emailAdd?: FieldConfig;
  password?: FieldConfig;
  submitBtn?: ButtonConfig;
  renderFooter?: React.ReactNode;
  renderHeader?: React.ReactNode;
  onSubmit?(values: TEmailPasswordLoginSchema): void;
  __emailAddTestId?: string;
  __passwordTestId?: string;
  __submitBtnTestId?: string;
};

export const EmailPasswordLoginForm: React.FC<EmailPasswordLoginFormProps> = ({
  emailAdd,
  password,
  submitBtn,
  renderHeader,
  renderFooter,
  onSubmit,

  __emailAddTestId = 'hds.credential-login.input.email',
  __passwordTestId = 'hds.credential-login.input.password',
  __submitBtnTestId = 'hds.credential-login.submit-button',

  ...others
}) => {
  const { register, formState, handleSubmit } = useForm<TEmailPasswordLoginSchema>({
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: yupResolver(EmailPasswordLoginSchema),
    defaultValues: {
      password: '',
      emailAddress: '',
    },
  });

  return (
    <chakra.div
      sx={{
        maxW: '400px',
        ...others,
      }}
      data-testid="hds.credential-login"
    >
      {renderHeader}

      <chakra.form onSubmit={handleSubmit(onSubmit ?? function noop() {})}>
        <Stack spacing={4}>
          <TextField
            id="email"
            label={emailAdd?.label}
            placeholder="Input your email"
            error={formState.errors.emailAddress?.message}
            isDisabled={formState.isSubmitting}
            __fieldTestId={__emailAddTestId}
            {...register('emailAddress')}
          />

          <PasswordField
            id="password"
            label={password?.label}
            placeholder="Input your password"
            error={formState.errors.password?.message}
            isDisabled={formState.isSubmitting}
            __fieldTestId={__passwordTestId}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          width="full"
          marginTop={8}
          isLoading={formState.isSubmitting}
          __testId={__submitBtnTestId}
        >
          {submitBtn?.label ?? 'Login'}
        </Button>
      </chakra.form>

      {renderFooter}
    </chakra.div>
  );
};

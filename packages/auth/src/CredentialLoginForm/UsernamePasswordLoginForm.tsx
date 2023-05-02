import { chakra, Stack, SystemStyleObject } from '@chakra-ui/react';
import { Button, PasswordField, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { TUsernamePasswordLoginSchema, UsernamePasswordLoginSchema } from './validators';

type FieldConfig = {
  label?: string;
};

type ButtonConfig = {
  label?: string;
};

export type UsernamePasswordLoginFormProps = Omit<SystemStyleObject, 'onSubmit'> & {
  username?: FieldConfig;
  password?: FieldConfig;
  submitBtn?: ButtonConfig;
  renderFooter?: React.ReactNode;
  renderHeader?: React.ReactNode;
  onSubmit?(values: TUsernamePasswordLoginSchema): void;
  __usernameTestId?: string;
  __passwordTestId?: string;
  __submitBtnTestId?: string;
};

export const UsernamePasswordLoginForm: React.FC<UsernamePasswordLoginFormProps> = ({
  username,
  password,
  submitBtn,
  renderHeader,
  renderFooter,
  onSubmit,

  __usernameTestId = 'hds.credential-login.input.username',
  __passwordTestId = 'hds.credential-login.input.password',
  __submitBtnTestId = 'hds.credential-login.submit-button',

  ...others
}) => {
  const { register, formState, handleSubmit } = useForm<TUsernamePasswordLoginSchema>({
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: yupResolver(UsernamePasswordLoginSchema),
    defaultValues: {
      username: '',
      password: '',
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
            label={username?.label}
            placeholder="Input your username"
            error={formState.errors.username?.message}
            isDisabled={formState.isSubmitting}
            __fieldTestId={__usernameTestId}
            {...register('username')}
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

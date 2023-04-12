import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
import { PasswordField, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

import {
  CredentialFormInputEmailProps,
  CredentialFormInputNameProps,
  withCredentialFormSchemaEmail,
  withCredentialFormSchemaEmailValues,
  withCredentialFormSchemaName,
  withCredentialFormSchemaNameValues,
} from './validation';

export type CredentialLoginFormDefaultProps = {
  loginTitle?: ReactNode;
  signUpTitle?: ReactNode;
  passwordLabel?: string;
  customLink?: ReactNode;
  passwordLeftIcon?: ReactNode;
  formHeaderTitle?: ReactNode | string;
  formHeaderSubTitle?: ReactNode | string;
  width?: string | number;
  formName?: string;
  __passwordTestId?: string;
  __inputTestId?: string;
};
export interface CredentialLoginFormNameProps
  extends CredentialLoginFormDefaultProps {
  variant: 'name-password';
  userNameLeftIcon?: JSX.Element;
  nameLabel?: string;
  onSubmit?(values: CredentialFormInputNameProps): void;
}
export interface CredentialLoginFormEmailProps
  extends CredentialLoginFormDefaultProps {
  variant: 'email-password';
  emailLeftIcon?: JSX.Element;
  emailLabel?: string;
  onSubmit?(values: CredentialFormInputEmailProps): void;
}

export type CredentialLoginFormProps =
  | CredentialLoginFormNameProps
  | CredentialLoginFormEmailProps;

const CredentialLoginForm: FC<CredentialLoginFormProps> = (props) => {
  const {
    signUpTitle,
    formHeaderSubTitle,
    formHeaderTitle,
    loginTitle,
    onSubmit,
    passwordLabel,
    __inputTestId,
    __passwordTestId,
    width = '512px',
    customLink,
  } = props;

  const [isSignUp, setIsSignUp] = React.useState(false);
  const [defaultLinkActive, setDefaultLinkActive] = React.useState(true);
  const { register, handleSubmit, formState } = useForm<
    withCredentialFormSchemaEmailValues & withCredentialFormSchemaNameValues
  >({
    resolver: yupResolver(
      props.variant === 'name-password'
        ? withCredentialFormSchemaName
        : withCredentialFormSchemaEmail
    ),
    shouldUnregister: true,
  });

  React.useEffect(() => {
    if (typeof customLink !== 'undefined') {
      setDefaultLinkActive(false);
    }
  }, [customLink, setDefaultLinkActive]);

  const onSubmitForm = async (
    values: withCredentialFormSchemaNameValues &
      withCredentialFormSchemaEmailValues
  ) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Box as={'form'} w={width} onSubmit={handleSubmit(onSubmitForm)}>
      <Center p={0}>
        <VStack spacing="15px">
          {isSignUp && signUpTitle
            ? signUpTitle
            : !isSignUp && loginTitle
            ? loginTitle
            : !isSignUp && !loginTitle}
          {formHeaderSubTitle && formHeaderTitle}
          {formHeaderTitle && typeof formHeaderTitle === 'string' && (
            <Text color="neutrals.600" size="label-xs-default">
              {formHeaderTitle}
            </Text>
          )}
          {formHeaderSubTitle && formHeaderSubTitle}
          {formHeaderSubTitle && typeof formHeaderSubTitle === 'string' && (
            <Text color="neutrals.700" size="label-xs-default">
              {formHeaderSubTitle}
            </Text>
          )}
        </VStack>
      </Center>

      <Stack spacing={'1rem'}>
        {props.variant === 'name-password' ? (
          <TextField
            {...register('name')}
            id={'name'}
            leftIcon={props.userNameLeftIcon}
            label={
              props.nameLabel
                ? props.nameLabel?.charAt(0).toUpperCase() +
                  props.nameLabel?.slice(1)
                : undefined
            }
            __fieldTestId={__inputTestId ?? 'hds.credential.input.username'}
            placeholder={`Input your ${
              props.nameLabel?.toLowerCase() ?? 'username'
            }`}
            error={formState.errors.name?.message}
            isDisabled={formState.isSubmitting}
          />
        ) : (
          <TextField
            {...register('email')}
            id={'email'}
            label={props.emailLabel}
            leftIcon={props.emailLeftIcon}
            placeholder="Input your email"
            __fieldTestId={__inputTestId ?? 'hds.credential.input.email'}
            error={formState.errors.email?.message}
            isDisabled={formState.isSubmitting}
          />
        )}

        <PasswordField
          {...register('password')}
          id="password"
          label={passwordLabel}
          placeholder="Input your password"
          __fieldTestId={__passwordTestId ?? 'hds.credential.input.password'}
          error={formState.errors.password?.message}
          isDisabled={formState.isSubmitting}
        />
      </Stack>
      <Button
        w="full"
        data-testid={`hds.credential.submit.button`}
        variant="primary"
        isLoading={formState.isSubmitting}
        type="submit"
        my={8}
      >
        {isSignUp ? 'Sign Up' : 'Login'}
      </Button>
      {customLink && customLink}
      {defaultLinkActive && (
        <Center>
          <Text>
            {isSignUp ? 'Already have an account?' : 'No account yet?'}{' '}
            <Text
              as={'a'}
              data-testid={'hds.switch.form.link'}
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
              aria-label={
                isSignUp ? 'hds.login.link.label' : 'hds.signup.link.label'
              }
              onClick={() => setIsSignUp((prev) => !prev)}
              fontWeight={'bold'}
              role={'link'}
            >
              {isSignUp ? 'Login' : 'Sign up'}
            </Text>
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default CredentialLoginForm;

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Stack, Text, VStack } from '@chakra-ui/react';
// @ts-ignore
import { InputField } from '@highoutput/hds-forms';
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
  userNameLeftIcon?: ReactNode;
  nameLabel?: string;
  onSubmit?(values: CredentialFormInputNameProps): void;
}
export interface CredentialLoginFormEmailProps
  extends CredentialLoginFormDefaultProps {
  variant: 'email-password';
  emailLeftIcon?: ReactNode;
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
    passwordLeftIcon,
    loginTitle,
    onSubmit,
    passwordLabel,
    __inputTestId,
    __passwordTestId,
    width = '512px',
    customLink,
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);
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
          <InputField
            {...register('name')}
            id={'name'}
            leftIcon={props.userNameLeftIcon}
            label={
              props.nameLabel
                ? props.nameLabel?.charAt(0).toUpperCase() +
                  props.nameLabel?.slice(1)
                : undefined
            }
            __testId={__inputTestId ?? 'hds.credential.input.username'}
            placeholder={`Input your ${
              props.nameLabel?.toLowerCase() ?? 'username'
            }`}
            errorMsg={formState.errors.name?.message}
            disabled={formState.isSubmitting}
          />
        ) : (
          <InputField
            {...register('email')}
            id={'email'}
            label={props.emailLabel}
            leftIcon={props.emailLeftIcon}
            placeholder="Input your email"
            __testId={__inputTestId ?? 'hds.credential.input.email'}
            errorMsg={formState.errors.email?.message}
            disabled={formState.isSubmitting}
          />
        )}

        <InputField
          {...register('password')}
          id="password"
          label={passwordLabel}
          type={showPassword ? 'text' : 'password'}
          placeholder="Input your password"
          errorMsg={formState.errors.password?.message}
          disabled={formState.isSubmitting}
          leftIcon={passwordLeftIcon}
          __testId={__passwordTestId ?? 'hds.credential.input.password'}
          rightIcon={
            <Button
              data-testid={'hds.show.hide.btn'}
              background={'none'}
              _hover={{ background: 'none' }}
              _active={{ background: 'none' }}
              aria-label={showPassword ? 'show-password' : 'hide-password'}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <ViewIcon color="neutrals.600" fontSize="md" />
              ) : (
                <ViewOffIcon color="neutrals.600" fontSize="md" />
              )}
            </Button>
          }
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

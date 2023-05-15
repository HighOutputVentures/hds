import { chakra, SystemStyleObject } from '@chakra-ui/react';
import { Button, TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { GenerateOtpSchema, IGenerateOtpSchema } from './validators';

type FieldConfig = {
  label?: string;
};

type ButtonConfig = {
  label?: string;
};

export type OtpLoginFormStep1Props = SystemStyleObject & {
  email?: FieldConfig;
  submitBtn?: ButtonConfig;
  onSubmit?(data: IGenerateOtpSchema): void;
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
  __emailTestId?: string;
  __submitBtnTestId?: string;
};

export const OtpLoginFormStep1: React.FC<OtpLoginFormStep1Props> = ({
  email,
  submitBtn,
  onSubmit,
  renderFooter,
  renderHeader,
  __emailTestId = 'hds.otp-login.input.email',
  __submitBtnTestId = 'hds.otp-login.submit-button',
  ...others
}) => {
  const { register, handleSubmit, formState } = useForm<IGenerateOtpSchema>({
    resolver: yupResolver(GenerateOtpSchema),
    shouldUnregister: true,
    shouldFocusError: true,
    defaultValues: {
      emailAddress: '',
    },
  });

  return (
    <chakra.div
      sx={{
        maxW: '400px',
        ...others,
      }}
      data-testid="hds.otp-login.step-1"
    >
      {renderHeader}

      <chakra.form onSubmit={handleSubmit(onSubmit ?? function noop() {})}>
        <TextField
          id="email"
          label={email?.label}
          error={formState.errors.emailAddress?.message}
          placeholder="Enter your email address"
          __fieldTestId={__emailTestId}
          {...register('emailAddress')}
        />

        <Button
          type="submit"
          width="full"
          marginTop={5}
          isLoading={formState.isSubmitting}
          __testId={__submitBtnTestId}
        >
          {submitBtn?.label ?? 'Sign In'}
        </Button>
      </chakra.form>

      {renderFooter}
    </chakra.div>
  );
};

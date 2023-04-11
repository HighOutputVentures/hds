import { Box, Button } from '@chakra-ui/react';
import { TextField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import OTPForm, { OTPFormProps } from './OTPForm';
import {
  AuthenticateSchemaValues,
  generateEmailOTPSchema,
  GenerateEmailOTPSchemaValues,
} from './validation';

export interface OTPVerificationProps extends OTPFormProps {
  onSubmitEmailValue?(value: GenerateEmailOTPSchemaValues): void;
  onSubmitOTPValue?(value: AuthenticateSchemaValues): void;
  otpReceived: boolean;
  numberOfFields?: 4 | 6;
  otpType?: 'number' | 'alphanumeric';
  __testId?: string;
}

const OTPVerificationForm = (props: OTPVerificationProps) => {
  const {
    otpReceived,
    onSubmitEmailValue,
    numberOfFields,
    title,
    subTitle,
    onSubmitOTPValue,
    __testId,
  } = props;

  const { register, handleSubmit, formState } =
    useForm<GenerateEmailOTPSchemaValues>({
      resolver: yupResolver(generateEmailOTPSchema),
      defaultValues: {
        emailAddress: '',
      },
      shouldUnregister: true,
    });

  const onSubmitEmail = async (value: GenerateEmailOTPSchemaValues) => {
    if (onSubmitEmailValue) {
      onSubmitEmailValue(value);
    }
  };
  const onSubmitOTP = async (value: AuthenticateSchemaValues) => {
    if (onSubmitOTPValue) {
      onSubmitOTPValue(value);
    }
  };

  const { errors, isSubmitting } = formState;

  return (
    <Box>
      {!otpReceived ? (
        <Box
          as={'form'}
          data-testid="box.emailform.form"
          w={350}
          onSubmit={handleSubmit(onSubmitEmail)}
        >
          <TextField
            id="emailAddress"
            error={errors.emailAddress?.message}
            isDisabled={isSubmitting}
            placeholder={'Enter your email address'}
            __fieldTestId={__testId ?? 'hds.otp.verification.input.email'}
            {...register('emailAddress')}
          />

          <Button
            variant={'primary'}
            type="submit"
            isLoading={isSubmitting}
            data-testid="hds.otp.verification.submit.button"
            width={'100%'}
            marginTop={'10px'}
          >
            Sign In
          </Button>
        </Box>
      ) : (
        <Box data-testid="otp.component">
          <OTPForm
            title={title}
            subTitle={subTitle}
            onSubmitOTPValue={(value) => onSubmitOTP(value)}
            numberOfFields={numberOfFields}
          />
        </Box>
      )}
    </Box>
  );
};

export default OTPVerificationForm;

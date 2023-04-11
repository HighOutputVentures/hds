import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { OtpField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { authenticateSchema, AuthenticateSchemaValues } from './validation';

export interface OTPFormProps {
  title?: ReactNode;
  subTitle?: ReactNode;
  numberOfFields?: 4 | 6;
  buttonText?: string;
  otpType?: 'number' | 'alphanumeric';
  onSubmitOTPValue?(value: AuthenticateSchemaValues): void;
}
const OTPForm = (props: OTPFormProps) => {
  const {
    subTitle,
    title,
    numberOfFields = 6,
    buttonText,
    onSubmitOTPValue,
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const {
    control,
    handleSubmit: handleSubmitOtp,
    formState: formStateOtp,
  } = useForm<AuthenticateSchemaValues>({
    resolver: yupResolver(authenticateSchema),
    context: { numberOfFields: numberOfFields },
    shouldUnregister: true,
    defaultValues: {
      otp: '',
    },
  });
  const onSubmitOTP = async (value: AuthenticateSchemaValues) => {
    if (onSubmitOTPValue) {
      onSubmitOTPValue(value);
    }
  };
  return (
    <Box
      as="form"
      w={350}
      data-testid="box.otpform.form"
      onSubmit={handleSubmitOtp(onSubmitOTP)}
    >
      <Box mb="6">
        {title ? (
          title
        ) : (
          <Heading as="h1" mb={2}>
            Check your inbox
          </Heading>
        )}

        {subTitle ? (
          subTitle
        ) : (
          <Text>We have sent a 6-digit code to your email </Text>
        )}
      </Box>

      <Controller
        name="otp"
        control={control}
        render={({ field, fieldState }) => (
          <OtpField
            id="otp"
            autoFocus
            isDisabled={formStateOtp.isSubmitting}
            fieldCount={numberOfFields}
            onComplete={buttonRef.current?.click}
            onChange={(value) => {
              field.onChange({ target: { value } });
            }}
            error={fieldState.error?.message}
            value={field.value}
          />
        )}
      />

      <Button
        variant={'primary'}
        ref={buttonRef}
        type="submit"
        isLoading={formStateOtp.isSubmitting}
        width={'100%'}
        data-testid="hds.otp.submit.button"
        marginTop={5}
      >
        {buttonText ? buttonText : 'Sign In'}
      </Button>
    </Box>
  );
};

export default OTPForm;

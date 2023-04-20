import { chakra, SystemStyleObject } from "@chakra-ui/react";
import { Button, OtpField } from "@highoutput/hds-forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { ILoginOtpSchema, LoginOtpSchema } from "./validators";

type OtpConfig = {
  label?: string;
  fieldCount?: 4 | 6;
};

type ButtonConfig = {
  label?: string;
};

export type OtpLoginFormStep2Props = SystemStyleObject & {
  otp?: OtpConfig;
  submitBtn?: ButtonConfig;
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
  onSubmit?(data: ILoginOtpSchema): void;
  __otpTestId?: string;
  __submitBtnTestId?: string;
};

export const OtpLoginFormStep2: React.FC<OtpLoginFormStep2Props> = ({
  otp,
  onSubmit,
  submitBtn,
  renderHeader,
  renderFooter,
  __otpTestId = "hds.otp-login.input.otp",
  __submitBtnTestId = "hds.otp-login.submit-button",
  ...others
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { control, handleSubmit, formState } = useForm<ILoginOtpSchema>({
    resolver: yupResolver(LoginOtpSchema),
    shouldUnregister: true,
    shouldFocusError: true,
    defaultValues: {
      otp: "",
    },
    context: {
      numberOfFields: otp?.fieldCount ?? 4,
    },
  });

  return (
    <chakra.div
      sx={{
        width: "fit-content",
        ...others,
      }}
      data-testid="hds.otp-login.step-2"
    >
      {renderHeader}

      <chakra.form onSubmit={handleSubmit(onSubmit ?? function noop() {})}>
        <Controller
          name="otp"
          control={control}
          render={({ field, fieldState }) => (
            <OtpField
              autoFocus
              value={field.value}
              label={otp?.label}
              error={fieldState.error?.message}
              isDisabled={formState.isSubmitting}
              fieldCount={otp?.fieldCount ?? 4}
              onComplete={buttonRef.current?.click}
              onChange={(value) => {
                field.onChange({
                  target: {
                    value,
                  },
                });
              }}
              __fieldTestId={__otpTestId}
            />
          )}
        />

        <Button
          ref={buttonRef}
          type="submit"
          width="full"
          marginTop={5}
          isLoading={formState.isSubmitting}
          __testId={__submitBtnTestId}
        >
          {submitBtn?.label ?? "Sign In"}
        </Button>
      </chakra.form>

      {renderFooter}
    </chakra.div>
  );
};

import * as yup from "yup";

export const GenerateOtpSchema = yup.object({
  emailAddress: yup.string().email("Invalid email address").required("Email is required"),
});

export type IGenerateOtpSchema = yup.InferType<typeof GenerateOtpSchema>;

export const LoginOtpSchema = yup.object({
  otp: yup
    .string()
    .when("$numberOfFields", (numberOfFields: number, authenticateSchema: any) => {
      return authenticateSchema.length(numberOfFields, "OTP code is incomplete");
    })
    .required("OTP code is required"),
});

export type ILoginOtpSchema = yup.InferType<typeof LoginOtpSchema>;

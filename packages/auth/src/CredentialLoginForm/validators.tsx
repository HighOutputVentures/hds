import * as yup from "yup";

export const UsernamePasswordLoginSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export type TUsernamePasswordLoginSchema = yup.InferType<
  typeof UsernamePasswordLoginSchema
>;

export const EmailPasswordLoginSchema = yup
  .object({
    emailAddress: yup
      .string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export type TEmailPasswordLoginSchema = yup.InferType<typeof EmailPasswordLoginSchema>;

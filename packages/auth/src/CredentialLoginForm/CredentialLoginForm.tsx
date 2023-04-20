import * as React from "react";
import { FC } from "react";
import { omit } from "../utils";
import {
  EmailPasswordLoginForm,
  EmailPasswordLoginFormProps,
} from "./EmailPasswordLoginForm";
import {
  UsernamePasswordLoginForm,
  UsernamePasswordLoginFormProps,
} from "./UsernamePasswordLoginForm";

export type CredentialLoginFormProps =
  | ({ variant: "name-password" } & UsernamePasswordLoginFormProps)
  | ({ variant: "email-password" } & EmailPasswordLoginFormProps);

export const CredentialLoginForm: FC<CredentialLoginFormProps> = (props) => {
  switch (props.variant) {
    case "email-password":
      return <EmailPasswordLoginForm {...omit(props, "variant")} />;
    case "name-password":
      return <UsernamePasswordLoginForm {...omit(props, "variant")} />;
    default:
      return null;
  }
};

export default CredentialLoginForm;

import * as React from "react";
import { omit } from "../utils";
import { OtpLoginFormStep1, OtpLoginFormStep1Props } from "./OtpLoginFormStep1";
import { OtpLoginFormStep2, OtpLoginFormStep2Props } from "./OtpLoginFormStep2";

export type OtpLoginFormProps =
  | ({ step?: 1 } & OtpLoginFormStep1Props)
  | ({ step: 2 } & OtpLoginFormStep2Props);

export function OtpLoginForm(props: OtpLoginFormProps) {
  switch (props.step) {
    case 2:
      return <OtpLoginFormStep2 {...omit(props, "step")} />;
    default:
      return <OtpLoginFormStep1 {...omit(props, "step")} />;
  }
}

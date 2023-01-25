import * as React from "react";
import { useToast, UseToastFnConfig } from "./useToast";

export function ToastExample({ onCloseComplete }: UseToastFnConfig) {
  const toast = useToast();

  return (
    <>
      <button
        onClick={() => {
          toast.success("This is a success message!!", { onCloseComplete });
        }}
      >
        Success
      </button>
      <button
        onClick={() => {
          toast.error("This is an error message!!", { onCloseComplete });
        }}
      >
        Error
      </button>
    </>
  );
}

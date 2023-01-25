import * as React from "react";
import { useToast } from "./useToast";

export function ToastExample() {
  const toast = useToast();

  return (
    <>
      <button
        onClick={() => {
          toast.success("This is a success message!!");
        }}
      >
        Success
      </button>
      <button
        onClick={() => {
          toast.error("This is an error message!!");
        }}
      >
        Error
      </button>
    </>
  );
}

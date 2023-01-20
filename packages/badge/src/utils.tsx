import * as React from "react";

export function clone(element: any, props: Record<string, any> = {}) {
  if (React.isValidElement(element)) return React.cloneElement(element, props);

  throw new Error("Couldn't clone element");
}

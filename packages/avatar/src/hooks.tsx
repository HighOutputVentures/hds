import { useBreakpoint } from "@chakra-ui/react";
import { findClosestBreakpoint } from "./utils";

type ResponsiveSize = string | Record<string, string>;

export function useActualSize<T extends ResponsiveSize>(size: T, fallback = "md") {
  const breakpoint = useBreakpoint({ fallback });

  const keys = typeof size === "string" ? [] : Object.keys(size);

  return typeof size === "string"
    ? size
    : /* @ts-ignore "Bug in type assertions" */
    breakpoint in size
    ? size[breakpoint]
    : keys.length
    ? size[findClosestBreakpoint(keys, breakpoint)]
    : fallback;
}

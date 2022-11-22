import { Breakpoints } from "./types";

export function omit<T extends Record<string, any>, K extends (keyof T)[]>(
  subject: T,
  ...keys: K
): Omit<T, K[number]> {
  const copy = { ...subject }; /* do NOT mutate original object 😏 */

  for (const key of keys) {
    if (key in copy) {
      delete copy[key];
    }
  }

  return copy;
}

export function pick<T extends Record<string, any>, K extends (keyof T)[]>(obj: T, ...keys: K) {
  const copy = { ...obj };
  const picked: Partial<Record<K[number], T[K[number]]>> = {};

  for (const key of keys) {
    if (key in copy) {
      picked[key] = copy[key];
    }
  }

  return picked;
}

export function findClosestBreakpoint(breakpoints: (Breakpoints | string)[], base: string) {
  if (breakpoints.length > 0) {
    if (breakpoints.length === 1) return breakpoints[0];

    if (base === "xl") {
      if (breakpoints.includes("xl")) return "xl";
      if (breakpoints.includes("lg")) return "lg";
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }

    if (base === "lg") {
      if (breakpoints.includes("lg")) return "lg";
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }

    if (base === "md") {
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }

    if (base === "sm") {
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }
  }

  /* shouldn't be reached but just in case. 😅 */
  return "md";
}

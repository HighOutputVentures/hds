import { useBreakpoint } from '@chakra-ui/react';

type ResponsiveSize = string | Partial<Record<string, string>>;

export function useActualSize<T extends ResponsiveSize>(size: T, fallback = 'md') {
  const breakpoint = useBreakpoint();

  const keys = typeof size === 'string' ? [] : Object.keys(size);

  return typeof size === 'string'
    ? size
    : breakpoint in size
    ? size[breakpoint]
    : keys.length
    ? size[findClosestBreakpoint(keys, breakpoint)]
    : fallback;
}

function findClosestBreakpoint(keys: string[], base: string) {
  if (keys.length > 0) {
    if (keys.length === 1) return keys[0];

    if (base === 'xl') {
      if (keys.includes('xl')) return 'xl';
      if (keys.includes('lg')) return 'lg';
      if (keys.includes('md')) return 'md';
      if (keys.includes('sm')) return 'sm';
      if (keys.includes('base')) return 'base';
    }

    if (base === 'lg') {
      if (keys.includes('lg')) return 'lg';
      if (keys.includes('md')) return 'md';
      if (keys.includes('sm')) return 'sm';
      if (keys.includes('base')) return 'base';
    }

    if (base === 'md') {
      if (keys.includes('md')) return 'md';
      if (keys.includes('sm')) return 'sm';
      if (keys.includes('base')) return 'base';
    }

    if (base === 'sm') {
      if (keys.includes('sm')) return 'sm';
      if (keys.includes('base')) return 'base';
    }
  }

  /* shouldn't be reached but just in case. 😅 */
  return 'md';
}

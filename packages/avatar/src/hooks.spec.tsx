import { renderHook } from '@testing-library/react';
import { useActualSize } from './hooks';

jest.mock('@chakra-ui/react', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpoint() {
      return 'sm';
    },
  };
});

describe('hooks', () => {
  describe('useActualSize', () => {
    it('Should return size based on breakpoint', () => {
      const { result } = renderHook(() =>
        useActualSize({
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        }),
      );

      expect(result.current).toBe('sm');
    });

    it('Should be able to use fallback', () => {
      const { result } = renderHook(() => useActualSize({}, 'xs'));

      expect(result.current).toBe('xs');
    });

    it('Should use closest size', () => {
      const { result } = renderHook(() => useActualSize({ md: 'md', base: 'sm' }));

      expect(result.current).toBe('sm');
    });
  });
});

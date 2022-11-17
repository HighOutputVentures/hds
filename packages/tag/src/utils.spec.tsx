import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import { omit, space } from './utils';

jest.mock('@chakra-ui/react', () => {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    Spacer(_: unknown) {
      return <div data-testid="spacer" />;
    },
  };
});

describe('utils', () => {
  describe('omit', () => {
    it('Should omit props by keys (0)', () => {
      const subject = {
        Aa: 1,
        Bb: 2,
        Cc: 3,
        Dd: 4,
        Ee: 5,
      };

      expect(omit(subject, 'Aa', 'Bb', 'Cc')).toStrictEqual(
        expect.objectContaining({
          Dd: 4,
          Ee: 5,
        }),
      );
    });

    it('Should omit props by keys (1)', () => {
      expect(omit({ Aa: 1 }, 'Aa')).toStrictEqual(expect.objectContaining({}));
    });
  });

  describe('space', () => {
    beforeEach(() => {
      render(<div />);
    });

    it('Should add space if condition is true', async () => {
      space(true, {});

      await waitFor(() => {
        expect(screen.queryByTestId('spacer')).toBeDefined();
      });
    });

    it('Should NOT add space if condition is false', async () => {
      space(false, {});

      await waitFor(() => {
        expect(screen.queryByTestId('spacer')).toBeNull();
      });
    });
  });
});

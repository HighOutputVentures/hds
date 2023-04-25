import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Radio from './Radio';

describe('Radio', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Radio hint="Hint" label="Label" />
      </ChakraProvider>,
    );
  });

  it('Should render radio', () => {
    expect(screen.getByTestId('hds.radio.input')).toBeInTheDocument();
  });

  it('Should render radio label', () => {
    expect(screen.getByTestId('hds.radio.label')).toBeInTheDocument();
  });

  it('Should render radio hint', () => {
    expect(screen.getByTestId('hds.radio.hint')).toBeInTheDocument();
  });
});

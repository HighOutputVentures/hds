import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import Tag from './Tag';
import withTag from './withTag';

describe('Tag', () => {
  beforeEach(() => {
    const { debug } = render(
      <ChakraProvider theme={extendTheme(withTag())}>
        <Tag />
      </ChakraProvider>,
    );

    debug();
  });

  it.todo('Should render tag');
  it.todo('Should render label');
  it.todo('Should render indicator');
  it.todo('Should render icon');
  it.todo('Should render avatar');
  it.todo('Should render close button');
  it.todo('Should call onClose callback when close button is clicked');
  it.todo('Should render checkbox');
  it.todo('Should be able to set checkbox value');
  it.todo('Should be able to add checkbox change handler');
});

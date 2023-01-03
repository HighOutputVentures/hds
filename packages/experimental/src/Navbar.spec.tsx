import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import * as React from 'react';
import Navbar from './Navbar';

describe('Navbar', () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(<Navbar />);
  });
});

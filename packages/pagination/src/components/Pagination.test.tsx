import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import Pagination from './Pagination';

const handlePageChange = jest.fn();
const handleSizeChange = jest.fn();

describe('Pagination', () => {
  beforeEach(() => {
    render(
      <Pagination
        page={2}
        size={5}
        total={75}
        onPageChange={handlePageChange}
        onSizeChange={handleSizeChange}
        options={{
          sizes: [5, 10, 25, 50],
        }}
      />
    );
  });

  it('Should be able to change page size', () => {
    const dropdown = screen.getByRole('combobox', { name: 'Change page size' });

    fireEvent.change(dropdown, {
      target: {
        value: 15,
      },
    });

    expect(handleSizeChange).toBeCalledWith(expect.any(Number));
  });

  it('Should be able to go to previous page', () => {
    const prevBtn = screen.getByRole('button', { name: 'Go to previous page' });
    fireEvent.click(prevBtn);
    expect(handlePageChange).toBeCalledWith(expect.any(Number));
  });

  it('Should be able to go to next page', () => {
    const nextBtn = screen.getByRole('button', { name: 'Go to next page' });
    fireEvent.click(nextBtn);
    expect(handlePageChange).toBeCalledWith(expect.any(Number));
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import { DatePicker } from './DatePicker';

import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import DatePickerDropdown from './DatePickerDropdown';
import DatePickerModal from './DatePickerModal';
const MOCKDATA = [
  { date: new Date('2022-9-3'), title: 'appointment', id: '1' },
  { date: new Date('2022-11-25'), title: 'second', id: '3' },
  { date: new Date('2022-9-25'), title: 'doctor', id: '2' },
  { date: new Date('2022-12-6'), title: 'bd', id: '1' },
  { date: new Date('2022-12-23'), title: 'bd', id: '1' },
];
describe('Datepicker pre-set range type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={'pre-set ranges'}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={'Asia/Manila'}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const RangeDatePicker = await screen.findAllByTestId('range-datepicker');
    expect(RangeDatePicker).toHaveLength(1);
  });
});
describe('Datepicker single date type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={'single date'}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={'Asia/Manila'}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const SingleDatePicker = await screen.findAllByTestId('single-datepicker');
    expect(SingleDatePicker).toHaveLength(1);
  });
});

describe('Datepicker dual date type Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePicker
          dateEvents={MOCKDATA}
          type={'dual dates'}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={'Asia/Manila'}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const DualDatePicker = await screen.findAllByTestId('dual-datepicker');
    expect(DualDatePicker).toHaveLength(1);
  });
});
describe('Datepicker modal Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePickerModal
          dateEvents={MOCKDATA}
          type={'dual dates'}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={'Asia/Manila'}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const ModalDatePicker = await screen.findAllByTestId('modal-datepicker');
    expect(ModalDatePicker).toHaveLength(1);
  });
});
describe('Datepicker dropdown Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <DatePickerDropdown
          dateEvents={MOCKDATA}
          type={'dual dates'}
          userId="1"
          onClose={jest.fn()}
          isOpen={true}
          timezone={'Asia/Manila'}
        />
      </ThemeProvider>
    );
  });

  it('Should render', async () => {
    const DropdownDatePicker = await screen.findAllByTestId(
      'dropdown-datepicker'
    );
    expect(DropdownDatePicker).toHaveLength(1);
  });
});

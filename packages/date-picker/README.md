### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-date-picker
```

### Usage

```jsx
import {
  DatePicker,
  DatePickerDropdown,
  DatePickerModal,
} from '@highoutput/hds-date-picker';

const MOCKDATA = [
  { date: new Date('2022-9-3'), title: 'appointment', id: '1' },
  { date: new Date('2022-11-25'), title: 'second', id: '3' },
  { date: new Date('2022-9-25'), title: 'doctor', id: '2' },
  { date: new Date('2022-12-6'), title: 'bd', id: '1' },
  { date: new Date('2022-12-23'), title: 'bd', id: '1' },
];

export const DatePicker = () => {
  const onClose = () => {};
  let isOpen = false;
  return (
    <DatePicker
      dateEvents={MOCKDATA}
      type={'pre-set ranges'}
      userId={'1'}
      timezone={'Asia/Manila'}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
};
export const DatePickerDropdown = () => {
  const onClose = () => {};
  let isOpen = false;
  return (
    <DatePickerDropdown
      dateEvents={MOCKDATA}
      type={'pre-set ranges'}
      userId={'1'}
      timezone={'Asia/Manila'}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
};

export const DatePickerModal = () => {
  const onClose = () => {};
  let isOpen = false;
  return (
    <DatePickerModal
      dateEvents={MOCKDATA}
      type={'pre-set ranges'}
      userId={'1'}
      timezone={'Asia/Manila'}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
};
```

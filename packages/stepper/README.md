### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-stepper
```

### Usage

```tsx
import { Stepper } from '@highoutput/hds-stepper';

export const SamplePage = () => {
  const steps = [
    {
      label: 'Your details',
      description: 'Please provide your name and email',
    },
    {
      label: 'Company details',
      description: 'A few details about your company',
    },
    {
      label: 'Invite your team',
      description: 'Start collaborating with your team',
    },
  ];
  const [value, setValue] = React.useState<number>(1);

  const handleOnClickStep = (step: number) => {
    //  form validation eligible for next step
    //   if no error
    //   set active step
    setValue(step);
    // else
    // display errors
  };
  return (
    <Stepper
      {...props}
      items={items}
      value={value}
      onChange={(d) => handleOnClickStep(d)}
    ></Stepper>
  );
};
```

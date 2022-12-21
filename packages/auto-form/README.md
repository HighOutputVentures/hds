### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-auto-form
```

### Usage

```tsx
import { AutoForm } from '@highoutput/hds-auto-form';

const autoFormSchema = object().shape({
  title: string().required().label('Title').required('Title is required'),
  description: string()
    .label('Description')
    .meta({ type: 'textarea' })
    .required('Description is required'),
});

export const SamplePage = () => {
  return (
    <>
      <AutoForm
        onSubmitForm={() => {}}
        placeholders={['Enter title', 'Enter description']}
        yupSchema={autoFormSchema}
      />
    </>
  );
};
```

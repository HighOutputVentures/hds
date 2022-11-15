### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install the package, use:

```
npm i @highoutput/hds-forms
```

### Usage

```ts
// feedback-form.tsx
import { chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { TextAreaField } from './src';

const schema = yup.object({
  feedback: yup.string().min(5).max(150).trim(),
});

type Schema = yup.InferType<typeof schema>;

export default function Component() {
  const { register, formState, handleSubmit } = useForm<Schema>({
    shouldUnregister: true,
    shouldFocusError: true,
    resolver: yupResolver(schema),
    defaultValues: {
      feedback: '',
    },
  });

  return (
    <chakra.form onSubmit={handleSubmit(function noop() {})}>
      <TextAreaField
        label="Leave a Feedback"
        errorMsg={formState.errors.feedback?.message}
        placeholder="Enter comment..."
        {...register('feedback')}
      />

      <chakra.button type="submit" disabled={formState.isSubmitting}>
        Submit
      </chakra.button>
    </chakra.form>
  );
}
```

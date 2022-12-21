# HDS

We aim to build a library of custom ReactJS components that implements our unique UI design conventions (HDS). Our components will be based primarily on Chakra UI. React Storybook will be used for documentation and testing.

- Reusable block of components
- HDS integrated styling
- Easy to implement

## Installation

```bash
npm i @highoutput/hds
```

In your main app file import theme provider and make it a parent of all components.

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@highoutput/hds';

const App = () => {
  return (<ThemeProvider>{...components here}</ThemeProvider>);
};

ReactDOM.render(<App />, document.getElementById('root'));
```

After that you can use all the components within hds core.

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputField, Box } from '@highoutput/hds';

const Form = () => {
  return (
    <Box>
      <InputField
        helperMsg="This is a hint text to help user"
        id="name"
        label="Name"
        onBlur={() => {}}
        onChange={() => {}}
        onPressEnter={() => {}}
        placeholder="Input your name"
      />
    </Box>
  );
};

export default Form;
```

## Check out for more information

- [Storybook Documentation and Preview](https://hds-highoutput.vercel.app/?path=/story/getting-started--page)
- [Chakra Components](https://chakra-ui.com/docs/components)

## Other Packages

- [@highoutput/hds-icons](https://www.npmjs.com/package/@highoutput/hds-icons)
- [@highoutput/hds-auth](https://www.npmjs.com/package/@highoutput/hds-auth)
- [@highoutput/hds-spinner](https://www.npmjs.com/package/@highoutput/hds-spinner)
- [@highoutput/hds-pagination](https://www.npmjs.com/package/@highoutput/hds-pagination)
- [@highoutput/hds-array-field](https://www.npmjs.com/package/@highoutput/hds-array-field)
- [@highoutput/hds-auto-form](https://www.npmjs.com/package/@highoutput/hds-auto-form)
- [@highoutput/hds-contact-us](https://www.npmjs.com/package/@highoutput/hds-contact-us)
- [@highoutput/hds-utilities](https://www.npmjs.com/package/@highoutput/hds-utilities)
- [@highoutput/hds-forms](https://www.npmjs.com/package/@highoutput/hds-forms)
- [@highoutput/hds-autocomplete-input](https://www.npmjs.com/package/@highoutput/hds-autocomplete-input)

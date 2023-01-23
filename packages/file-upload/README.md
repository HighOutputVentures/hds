### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-modal
```

### Usage

```tsx
import FileUpload from '@highoutput/file-upload';

export const FileUploadSample = () => {
  const handleChange = () => {
    // do something
  };

  return (
    <FileUpload onChange={handleChange} accepts=".png, .gif, .jpeg, .svg" />
  );
};
```

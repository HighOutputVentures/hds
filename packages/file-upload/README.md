### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/file-upload
```

### Usage

```tsx
import { FileUpload, ProgressBox } from '@highoutput/hds-file-upload';

export const FileUploadSample = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (event) => Promise.resolve(setFiles(event.target.files));

  return (
    <ThemeProvider>
      <Flex justify="center">
        <FileUpload {...args} onChange={handleChange} />
      </Flex>

      {(files as File[])?.length ? (
        <Flex justify="center">
          <ProgressBox file={files} onDelete={(): void => setFiles([])} value={80} />
        </Flex>
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
};
```

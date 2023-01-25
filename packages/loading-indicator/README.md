### Getting started

Loading indicators are a helpful way to indicate to the user that content is on the way. These should be user sparingly, and only in cases where the loading time is very short. For longer load times, we suggest using a progress bar or a similar to give the user a more realistic indication of how long the process will take.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-loading-indicator
```

### Usage

```tsx
import LoadingIndicator from '@highoutput/hds-loading-indicator';

export const LoadingIndicatorSample = () => {
  return <LoadingIndicator />;
};
```

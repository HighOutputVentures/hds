### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-tooltip
```

### Usage

```jsx
import { Tooltip, Notification } from '@highoutput/hds-alerts';

export const AlertSamplePage = () => {
  return (
    <Alert
      supportingDetail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      status="default"
      alertLinks={['google.com', 'twitter.com']}
      alertLabel={['Learn More', 'View Changes']}
      title="We’ve just released a new feature"
    />
  );
};

export const NotificationSamplePage = () => {
  return (
    <Notification
      type={'avatar'}
      avatar={Avatar}
      createdAt={'2 mins ago'}
      supportingDetail="I’ve finished adding my notes. Happy for us to review whenever you’re ready!"
      alertLinks={['#', '#']}
      alertLabel={['Dismiss', 'Changelog']}
      title="Katherine Moss"
      isOpen={true}
    />
  );
};
```

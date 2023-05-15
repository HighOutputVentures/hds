import { ThemeProvider } from '@highoutput/hds';
import { Notification, useNotification } from '@highoutput/hds-alerts';
import { Button } from '@highoutput/hds-forms';
import { PrimaryIcon } from '@highoutput/hds-icons';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = () => {
  const notify = useNotification();

  return (
    <ThemeProvider>
      <Button
        onClick={() => {
          notify({
            icon: <PrimaryIcon w="40px" h="40px" />,
            title: <>We&rsquo;ve just released a new update!</>,
            position: 'top',
            description: (
              <>
                Check out the all new dashboard view. Pages and exports now load faster.
              </>
            ),
            okayButton: 'Dismiss',
          });
        }}
      >
        Trigger Notif
      </Button>

      <Notification
        mt={4}
        icon={<PrimaryIcon w="40px" h="40px" />}
        title={<>We&rsquo;ve just released a new update!</>}
        okayButton="Changelog"
        description="Check out the all new dashboard view. Pages and exports now load faster. "
        closeButton="Dismiss"
        onOkay={() => {
          alert('Going to details page');
        }}
        onClose={() => {
          alert('Closing notification');
        }}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};

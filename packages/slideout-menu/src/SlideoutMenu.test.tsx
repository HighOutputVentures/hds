import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { SlideoutMenu } from './SlideoutMenu';

describe('SlideoutMenu', () => {
  it('should render', () => {
    const { getByTestId, getByRole } = render(
      <SlideoutMenu
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
      />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByTestId('hds.slideout.content')).toBeTruthy();
  });

  it('should display the trigger button', () => {
    const { getByRole } = render(
      <SlideoutMenu
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
      />
    );
    const triggerBtn = getByRole('button', { name: 'Open' });

    expect(triggerBtn).toBeTruthy();
  });

  it('should show when trigger button is clicked', () => {
    const { getByTestId, getByRole } = render(
      <SlideoutMenu
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
      />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByTestId('hds.slideout.content')).toBeTruthy();
  });

  it('should render the header', async () => {
    const headerText = 'Slideout Header Sample';

    const { getByRole, getByText } = render(
      <SlideoutMenu
        renderHeader={headerText}
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
      />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(headerText)).toBeTruthy();
  });

  it('should render the content', async () => {
    const text = 'Slideout Menu Sample';

    const { getByRole, getByText } = render(
      <SlideoutMenu
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
      >
        {text}
      </SlideoutMenu>
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(text)).toBeTruthy();
  });

  it('should render the footer', async () => {
    const footerText = 'Slideout Footer Sample';

    const { getByRole, getByText } = render(
      <SlideoutMenu
        renderTrigger={({ onOpen }) => (
          <button aria-label="Open" onClick={onOpen}>
            Open
          </button>
        )}
        renderFooter={footerText}
      />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(footerText)).toBeTruthy();
  });
});

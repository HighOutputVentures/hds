import { render, fireEvent } from '@testing-library/react';
import SlideoutMenu from './SlideoutMenu';
import * as React from 'react';

const props = {
  triggerContent: 'Open',
};

describe('SlideoutMenu', () => {
  it('should render', () => {
    const { getByTestId, getByRole } = render(<SlideoutMenu {...props} />);

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByTestId('hds.slideout.content')).toBeTruthy();
  });

  it('should display the trigger button', () => {
    const { getByRole } = render(<SlideoutMenu {...props} />);
    const triggerBtn = getByRole('button', { name: 'Open' });

    expect(triggerBtn).toBeTruthy();
  });

  it('should show when trigger button is clicked', () => {
    const { getByTestId, getByRole } = render(<SlideoutMenu {...props} />);
    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByTestId('hds.slideout.content')).toBeTruthy();
  });

  it('should render the header', async () => {
    const headerText = 'Slideout Header Sample';
    const { getByRole, getByText } = render(
      <SlideoutMenu {...props} header={headerText} />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(headerText)).toBeTruthy();
  });

  it('should render the content', async () => {
    const text = 'Slideout Menu Sample';
    const { getByRole, getByText } = render(
      <SlideoutMenu {...props}>
        <div>{text}</div>
      </SlideoutMenu>
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(text)).toBeTruthy();
  });

  it('should render the footer', async () => {
    const footerText = 'Slideout Footer Sample';
    const { getByRole, getByText } = render(
      <SlideoutMenu {...props} footer={footerText} />
    );

    const triggerBtn = getByRole('button', { name: 'Open' });

    fireEvent.click(triggerBtn);

    expect(getByText(footerText)).toBeTruthy();
  });
});

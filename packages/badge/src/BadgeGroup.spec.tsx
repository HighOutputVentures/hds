import { ChakraProvider } from '@chakra-ui/react';
import { AppleIcon } from '@highoutput/hds-icons';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BadgeGroup } from './BadgeGroup';

const handleClick = jest.fn();

describe('BadgeGroup', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <BadgeGroup
          title="Title"
          description="Description"
          icon={<AppleIcon role="img" aria-label="Example icon" />}
          onClick={handleClick}
        />
      </ChakraProvider>,
    );
  });

  it('Should render badge group', () => {
    expect(screen.queryByRole('alert')).toBeDefined();
  });

  it('Should render title', () => {
    expect(screen.queryByText('Title')).toBeDefined();
  });

  it('Should render description', () => {
    expect(screen.queryByText('Description')).toBeDefined();
  });

  it('Should render icon', () => {
    expect(screen.queryByRole('img', { name: 'Example icon' })).toBeDefined();
  });

  it('Should run callback fn when button is clicked', async () => {
    expect(screen.queryByRole('button')).toBeDefined();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    await waitFor(() => {
      expect(handleClick).toHaveBeenCalled();
    });
  });
});

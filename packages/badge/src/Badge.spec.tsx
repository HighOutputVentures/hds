import { ChakraProvider } from '@chakra-ui/react';
import { AppleIcon } from '@highoutput/hds-icons';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Badge
          label="Hello world"
          aria-label="testing"
          hasIndicator
          leftIcon={<AppleIcon aria-label="Clickable icon" />}
          avatar="https://i.pravatar.cc/300"
        />
      </ChakraProvider>,
    );
  });

  it('Should render badge', () => {
    expect(screen.queryByRole('status', { name: 'testing' })).toBeDefined();
  });

  it('Should render label', () => {
    expect(screen.queryByText('Hello world')).toBeDefined();
  });

  it('Should render indicator', () => {
    expect(screen.queryByRole('status', { name: 'Online' })).toBeDefined();
  });

  it('Should render icon', () => {
    expect(screen.queryByRole('button', { name: 'Clickable icon' })).toBeDefined();
  });

  it('Should render avatar', () => {
    expect(screen.queryByRole('img', { name: 'Avatar' })).toBeDefined();
  });
});

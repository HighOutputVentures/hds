import { Avatar } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import * as React from 'react';
import AvatarLabel from './AvatarLabel';

describe('AvatarLabel', () => {
  beforeEach(() => {
    render(
      <AvatarLabel>
        <Avatar />
      </AvatarLabel>,
    );
  });

  it.todo('Should render name');
  it.todo('Should render image');
  it.todo('Should render support text');
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import React from 'react';
import renderer from 'react-test-renderer';
import ArrayField from './ArrayField';

describe('Array Field Component', () => {
  beforeAll(() => {
    render(
      <ArrayField
        defaultValues={{
          input: [
            {
              value: '',
            },
          ],
        }}
        maxValue={5}
        onChange={jest.fn()}
        onRemove={jest.fn()}
        onAppend={jest.fn()}
        onBlur={jest.fn()}
      />
    );
  });

  it('should renders input field form container', () => {
    const formControl = screen.queryByTestId('hds.form.control');
    expect(formControl).toBeDefined();
  });

  it('should renders input field input group', () => {
    const inputGroup = screen.queryByTestId('hds.input.group');
    expect(inputGroup).toBeDefined();
  });

  it('should renders input field input', () => {
    const input = screen.queryByTestId('hds.input.field');
    expect(input).toBeDefined();
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const component = renderer.create(
        <ArrayField
          defaultValues={{
            input: [{ value: '' }],
          }}
          maxValue={3}
          onChange={function () {}}
          onRemove={function () {}}
          onAppend={function () {}}
          onBlur={function () {}}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});

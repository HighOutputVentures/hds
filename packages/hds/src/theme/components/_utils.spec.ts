import { createObjectFromKeysWithSameProps } from './_utils';

describe("'applyOpacity'", () => {
  test.todo('hex');
  test.todo('rgb');
});

describe("'createObjectFromKeysWithSameProps'", () => {
  test('Should work properly', () => {
    const result = createObjectFromKeysWithSameProps(
      {
        prop1: 1,
        prop2: 2,
      },
      'key1',
      'key2',
      'key3',
    );

    expect(result).toBe({
      key1: { prop1: 1, prop2: 2 },
      key2: { prop1: 1, prop2: 2 },
      key3: { prop1: 1, prop2: 2 },
    });
  });
});

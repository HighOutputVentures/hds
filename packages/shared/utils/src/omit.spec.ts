import { omit } from './omit';

describe('omit', () => {
  it('returns a new object with the specified keys removed', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const result = omit(obj, 'foo', 'baz');

    expect(result).toEqual({ bar: 2 });
    expect(result).not.toBe(obj);
  });

  it('does not modify the original object', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };

    omit(obj, 'foo', 'baz');
    expect(obj).toEqual({ foo: 1, bar: 2, baz: 3 });
  });
});

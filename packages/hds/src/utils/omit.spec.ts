import { omit } from './omit';

describe("'omit'", () => {
  it('should omit the specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };

    expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
    expect(omit(obj, 'b', 'c')).toEqual({ a: 1 });
  });

  it('should return a new object without modifying the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, 'a');

    expect(result).toEqual({ b: 2, c: 3 });
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
    expect(result).not.toBe(obj);
  });

  it('should handle omitting non-existing keys', () => {
    const obj = { a: 1, b: 2, c: 3 } as Record<string, any>;

    expect(omit(obj, 'd')).toEqual({ a: 1, b: 2, c: 3 });
    expect(omit(obj, 'd', 'e')).toEqual({ a: 1, b: 2, c: 3 });
  });
});

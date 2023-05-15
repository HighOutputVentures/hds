import { slugify } from './slugify';

describe('slugify', () => {
  it('should slugify a string', () => {
    const text = 'Hello, world!';
    const expected = 'hello-world';
    const result = slugify(text);
    expect(result).toEqual(expected);
  });
});

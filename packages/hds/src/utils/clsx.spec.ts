import { clsx } from './clsx';

describe('clsx', () => {
  it('returns an empty string when no classNames are provided', () => {
    expect(clsx()).toEqual('');
  });

  it('filters out undefined classNames', () => {
    const result = clsx('class1', undefined, 'class2', undefined);
    expect(result).toEqual('class1 class2');
  });

  it('joins multiple classNames with a space', () => {
    const result = clsx('class1', 'class2', 'class3');
    expect(result).toEqual('class1 class2 class3');
  });
});

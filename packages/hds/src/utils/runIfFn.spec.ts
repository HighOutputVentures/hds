import { runIfFn } from './runIfFn';

describe("'runIfFn'", () => {
  it('should return the value if it is not a function', () => {
    expect(runIfFn(123)).toEqual(123);
    expect(runIfFn('hello')).toEqual('hello');
    expect(runIfFn(true)).toEqual(true);
    expect(runIfFn({ key: 'value' })).toEqual({ key: 'value' });
    expect(runIfFn([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should call the function with the provided arguments if the value is a function', () => {
    const add = (a: number, b: number) => a + b;
    const multiply = (a: number, b: number) => a * b;

    expect(runIfFn(add, 2, 3)).toEqual(5);
    expect(runIfFn(multiply, 4, 5)).toEqual(20);
  });

  it('should handle functions that return functions', () => {
    const add = (a: number) => (b: number) => a + b;

    expect(runIfFn(add(2), 3)).toEqual(5);
    expect(runIfFn(add(4), 5)).toEqual(9);
  });

  it('should handle functions with multiple arguments', () => {
    const concatenate = (a: string, b: string, c: string) => `${a}${b}${c}`;
    const sum = (...numbers: number[]) => numbers.reduce((total, num) => total + num, 0);

    expect(runIfFn(concatenate, 'Hello', ', ', 'World')).toEqual('Hello, World');
    expect(runIfFn(sum, 1, 2, 3, 4, 5)).toEqual(15);
  });
});

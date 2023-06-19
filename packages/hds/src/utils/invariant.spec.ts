import { invariant, InvariantViolation } from './invariant';

describe("'invariant'", () => {
  it('should throw an error when the condition is falsy', () => {
    expect(() => {
      invariant(false, 'Invariant message');
    }).toThrow(InvariantViolation);
  });

  it('should throw a default error message when no message is provided', () => {
    expect(() => {
      invariant(false);
    }).toThrow('Invariant violation');
  });

  it('should not throw an error when the condition is truthy', () => {
    expect(() => {
      invariant(true);
    }).not.toThrow();
  });
});

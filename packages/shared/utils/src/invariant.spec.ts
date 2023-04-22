import { invariant, InvariantViolation } from './invariant';

describe('invariant', () => {
  it('does not throw an error when the condition is truthy', () => {
    expect(() => invariant(true)).not.toThrow();
    expect(() => invariant(1)).not.toThrow();
    expect(() => invariant('hello')).not.toThrow();
    expect(() => invariant({})).not.toThrow();
  });

  it('throws an InvariantViolation error when the condition is falsy', () => {
    expect(() => invariant(false)).toThrow(InvariantViolation);
    expect(() => invariant(0)).toThrow(InvariantViolation);
    expect(() => invariant('')).toThrow(InvariantViolation);
    expect(() => invariant(null)).toThrow(InvariantViolation);
    expect(() => invariant(undefined)).toThrow(InvariantViolation);
  });

  it('uses the provided message when one is provided', () => {
    const message = 'Custom message';
    expect(() => invariant(false, message)).toThrow(message);
  });

  it('uses the default message when no message is provided', () => {
    expect(() => invariant(false)).toThrow('Invariant violation');
  });
});

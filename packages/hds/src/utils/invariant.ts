export class InvariantViolation extends Error {}

export function invariant(condition: unknown, message?: string): asserts condition {
  if (!condition) throw new InvariantViolation(message ?? 'Invariant violation');
}

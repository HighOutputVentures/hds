class InvariantError extends Error {}

export default function invariant(condition: unknown, message?: string): asserts condition {
  if (!condition) throw new InvariantError(message);
}

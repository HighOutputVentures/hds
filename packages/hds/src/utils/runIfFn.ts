export type Fn<Arg = unknown, ReturnValue = unknown> = (...args: Arg[]) => ReturnValue;

const isFunction = <T = Fn>(value: unknown): value is T => typeof value === 'function';

export function runIfFn<Return, Args>(
  valueOrFn: Return | ((...fnArgs: Args[]) => Return),
  ...args: Args[]
) {
  return isFunction<Fn<Args, Return>>(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

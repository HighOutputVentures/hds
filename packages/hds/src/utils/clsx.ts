export function clsx(...classNames: (string | undefined)[]) {
  return classNames.filter(Boolean).join(' ');
}

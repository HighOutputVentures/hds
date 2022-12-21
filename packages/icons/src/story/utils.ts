export function sortObject(subject: { [key: string]: any }) {
  return Object.entries(subject)
    .sort(([i], [j]) => i.localeCompare(j))
    .reduce<Record<string, any>>((obj, [key, value]) => {
      return { ...obj, [key]: value };
    }, {});
}

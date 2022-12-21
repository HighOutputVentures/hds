export function sortObject(subject: { [key: string]: any }) {
  return Object.entries(subject)
    .sort(([i], [j]) => i.localeCompare(j))
    .reduce((acc, [key, value]) => {
      return { ...acc, [key]: value };
    }, {});
}

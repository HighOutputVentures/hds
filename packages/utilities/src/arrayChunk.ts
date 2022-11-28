export default function arrayChunk<T extends any[]>(array: T, size: number) {
  const chunks: T[number][][] = [];
  const copy = [...array];

  const len = copy.length;
  const max = Math.ceil(len / size);
  let idx = 0;

  for (; idx < max; idx++) {
    chunks.push(copy.splice(0, size));
  }

  return chunks;
}

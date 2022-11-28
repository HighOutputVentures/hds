export default function arrayRandom<T extends any[]>(choices: T): T[number] {
  return choices[Math.floor(Math.random() * choices.length)];
}

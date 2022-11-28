/**
 *
 * @example
 * arrayUnique([1, 2, 3, 4, 5, 1, 2, 3, 4]) // [1, 2, 3, 4, 5]
 * arrayUnique([
 *  {key: 1},
 *  {key: 2},
 *  {key: 3},
 *  {key: 1},
 *  {key: 2},
 * ], (item) => item.key) // [{key: 1}, {key: 2}, {key: 3}]
 *
 */
export default function arrayUnique<T extends any[]>(array: T, callback?: (item: T[number]) => any): any[];

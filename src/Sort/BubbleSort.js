/* eslint-disable jsdoc/reject-function-type */
// @ts-nocheck TODO: Fix types on this later

/**
 * This sort works by iterating through the list of values from the start
 * comparing each pair of values and swapping them if they are in the wrong order
 * @param {Array} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {Array} the sorted array
 */
export function BubbleSort (array, comparator = (a, b) => a < b, step) {
  const N = array.length
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (comparator(array[j + 1], array[j])) {
        const tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
    if (step) { step(array) }
  }
  return array
}

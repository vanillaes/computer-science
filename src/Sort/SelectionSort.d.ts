/**
 * A SelectionSort algorithm
 *
 * The sort works by iterating through the array starting from the beginning.
 * Each item is compared to every subsequent item in the array to determine
 * which is smaller. Either the current item is kept or a smaller item is
 * swapped into its spot. This repeats until the order of items is arranged
 * from smallest-to-largest.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
export function SelectionSort(array: any[], comparator?: Function, step?: Function): any[];

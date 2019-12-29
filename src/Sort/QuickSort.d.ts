/**
 * A QuickSort algorithm
 *
 * Quicksort chooses an element of the array to serve as the pivot element and
 * then moves two pointers in from the ends of the array until values are found
 * that should be swapped to have a more sorted array this is then done recursively
 * the subarray contained on each side of the pivot until fully sorted.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
export function QuickSort(array: any[], comparator?: Function, step?: Function): any[];

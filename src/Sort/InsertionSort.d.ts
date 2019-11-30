/**
 * A InsertionSort algorithm
 *
 * The sort maintains a sorted (left) and unsorted (right) sections. As each
 * value is checked, if it's greater than the previous value it gets swapped
 * to the left until it is no longer greater.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
export function InsertionSort(array: any[], comparator?: Function, step?: Function): any[];

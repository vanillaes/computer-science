/**
 * A BubbleSort algorithm
 *
 * This sort works by iterating through the list of values from the start
 * comparing each pair of values and swapping them if they are in the wrong order
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
export function BubbleSort(array: any[], comparator?: Function, step?: Function): any[];

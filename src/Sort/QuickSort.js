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
function QuickSort (array, comparator, step) {
  if (array.length < 2) { return }
  if (typeof comparator !== 'function') { comparator = (a, b) => a < b }

  sortRecursive(array, 0, array.length - 1, comparator, step)
  return array
}

const swap = (array, i, j) => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

const hoarePivot = (array, left, right, comparator, step) => {
  const pivot = Math.floor((left + right) / 2)
  while (left <= right) {
    while (comparator(array[left], array[pivot])) {
      left++
    }
    while (comparator(array[pivot], array[right])) {
      right--
    }
    if (left <= right) {
      swap(array, left, right)
      left++
      right--
    }
    if (step) { step(array) }
  }
  return left
}

const sortRecursive = (array, left, right, comparator, step) => {
  if (right - left < 1) { return }
  const pivot = hoarePivot(array, left, right, comparator, step)

  if (left < pivot - 1) {
    sortRecursive(array, left, pivot - 1, comparator, step)
  }
  if (pivot < right) {
    sortRecursive(array, pivot, right, comparator, step)
  }
}

export { QuickSort }

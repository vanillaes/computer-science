import test from 'tape'
import { QuickSort } from '@vanillaes/computer-science'

test('QuickSort(array) - should sort the array', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['AA', 'BB', 'BB', 'BB', 'BB', 'BB', 'CC', 'CC']
  const actual = QuickSort(data)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

test('QuickSort(array) - should sort the array', t => {
  const data = [5, 3, 88, 1, 23, 5, 0, -4]
  const expected = [-4, 0, 1, 3, 5, 5, 23, 88]
  const actual = QuickSort(data)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

test('QuickSort(array, comparator) - should sort the array using a custom comparator', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'AA']
  const descending = (a, b) => a > b
  const actual = QuickSort(data, descending)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

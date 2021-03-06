import test from 'tape'
import { InsertionSort } from '@vanillaes/computer-science'

test('InsertionSort() - should sort the array', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['AA', 'BB', 'BB', 'BB', 'BB', 'BB', 'CC', 'CC']
  const actual = InsertionSort(data)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

test('InsertionSort(array) - should sort the array using a custom comparator', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'BB', 'AA']
  const descending = (a, b) => a > b
  const actual = InsertionSort(data, descending)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

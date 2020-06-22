import test from 'tape'
import { BubbleSort } from '@vanillaes/computer-science'

test('BubbleSort() - should sort the array', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['AA', 'BB', 'BB', 'BB', 'BB', 'BB', 'CC', 'CC']
  const actual = BubbleSort(data)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

test('BubbleSort(array) - should sort the array using a custom comparator', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB']
  const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'BB', 'AA']
  const descending = (a, b) => a > b
  const actual = BubbleSort(data, descending)

  t.deepEqual(expected, actual, 'Output should be sorted')

  t.end()
})

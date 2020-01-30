import test from 'tape';
import { SelectionSort } from 'computer-science';

test('SelectionSort() - should sort the array', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'];
  const expected = ['AA', 'BB', 'BB', 'BB', 'BB', 'BB', 'CC', 'CC'];
  const result = SelectionSort(data);

  t.deepEqual(expected, result, 'Output should be sorted');

  t.end();
});

test('SelectionSort(array) - should sort the array using a custom comparator', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'];
  const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'BB', 'AA'];
  const descending = (a, b) => a > b;
  const result = SelectionSort(data, descending);

  t.deepEqual(expected, result, 'Output should be sorted');

  t.end();
});

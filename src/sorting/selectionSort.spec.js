import test from 'tape';
import { selectionSort } from '../../index.js';

test('selectionSort() - should sort the array', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'];
  const expected = ['AA', 'BB', 'BB', 'BB', 'BB', 'BB', 'CC', 'CC'];
  const result = selectionSort(data);

  t.deepEqual(expected, result, 'Output should be sorted');

  t.end();
});

test('selectionSort() - should sort the a0rray using a custom comparator', t => {
  const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'];
  const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'BB', 'AA'];
  const descending = (a, b) => a > b;
  const result = selectionSort(data, descending);

  t.deepEqual(expected, result, 'Output should be sorted');

  t.end();
});

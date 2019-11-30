import test from 'tape';
import { InsertionSort } from './InsertionSort.js';

test('InsertionSort() - should sort the array', t => {
  const data = [5, 3, 4, 1, 2];
  const expected = [1, 2, 3, 4, 5];
  const result = InsertionSort(data);

  t.deepEqual(expected, result, 'Output should be sorted');

  t.end();
});

// test('InsertionSort(array) - should sort the array using a custom comparator', t => {
//   const data = ['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'];
//   const expected = ['CC', 'CC', 'BB', 'BB', 'BB', 'BB', 'BB', 'AA'];
//   const descending = (a, b) => a > b;
//   const result = InsertionSort(data, descending);

//   t.deepEqual(expected, result, 'Output should be sorted');

//   t.end();
// });

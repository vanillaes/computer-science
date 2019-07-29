// @ts-check
import test from 'tape';
import { QuickUnion } from './QuickUnion.js';

test('new QuickUnion() - should create an empty set', (t) => {
  const qu = new QuickUnion();
  const expected = new Map();

  t.notEqual(qu, null, `QuickUnion should exist`);
  t.deepEqual(qu.verticies, expected, `QuickUnion.verticies should initialize to an empty array`);
  t.equal(qu.count, 0, `QuickUnion.count should be 0`);

  t.end();
});

test('new QuickUnion() - should create a set with verticies', (t) => {
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);
  const expected = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4]
  ]);

  t.notEqual(qu, null, `QuickUnion should exist`);
  t.deepEqual(qu.verticies, expected, `QuickUnion.verticies should initialize w/ 4 verticies`);
  t.equal(qu.count, 4, `QuickUnion.count should be 4`);

  t.end();
});

test('new QuickUnion(items) - should create a set populated with items', (t) => {
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);
  const expected = new Map([
    ['a', 0],
    ['b', 1],
    ['c', 2],
    ['d', 3]
  ]);

  t.notEqual(qu, null, `QuickUnion should exist`);
  t.deepEqual(qu.verticies, expected, `QuickUnion.verticies should initialize w/ 4 verticies`);
  t.equal(qu.count, 4, `QuickUnion.count should be 4`);

  t.end();
});

test('QuickUnion.find(item) - should return the id of the item', (t) => {
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);
  const expected = 'b';
  const result = qu.find('b');

  t.deepEqual(result, expected, `QuickUnion.find should return the correct id`);

  t.end();
});

test('QuickUnion.find(item) - should throw if the item is not in the set', (t) => {
  t.plan(1);
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);

  try {
    qu.find('x');
  } catch (e) {
    t.pass(`Expected exception thrown`);
  }

  t.end();
});

test('QuickUnion.connected(itemA, itemB) - should return false if the verticies are not connected', (t) => {
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);
  const result = qu.connected('a', 'b');

  t.deepEqual(result, false, `QuickFind.connected should return false`);

  t.end();
});

test('QuickUnion.connected(itemA, itemB) - should return true if the verticies are connected', (t) => {
  const qu = new QuickUnion(['a', 'b', 'c', 'd']);
  qu.verticies.set('c', 'b');
  const result = qu.connected('b', 'c');

  t.deepEqual(result, true, `QuickUnion.connected should return true`);

  t.end();
});

test('QuickUnion.connected(itemA, itemB) - should return true if the verticies are connected', (t) => {
  const qu = new QuickUnion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  qu.union(4, 3);
  qu.union(3, 8);
  qu.union(6, 5);
  qu.union(9, 4);
  qu.union(2, 1);
  qu.union(5, 0);
  qu.union(7, 2);
  qu.union(6, 1);
  const expected = [1, 1, 1, 8, 3, 0, 5, 1, 8, 8];
  const result = [...qu.verticies.values()];

  t.deepEqual(result, expected, `QuickUnion.verticies should have the correct data`);
  t.equal(qu.count, 2, `QuickUnion.count should be 2`);

  t.end();
});

test('QuickUnion.sets() - Returns a 2D array containing the sets of joined verticies', (t) => {
  const qu = new QuickUnion([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  qu.union(4, 3);
  qu.union(3, 8);
  qu.union(6, 5);
  qu.union(9, 4);
  qu.union(2, 1);
  const expected = [
    [0],
    [1, 2],
    [5, 6],
    [7],
    [3, 4, 8, 9]
  ];
  const result = qu.sets();

  t.deepEqual(result, expected, `Outputs the correct sets`);

  t.end();
});

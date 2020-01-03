import test from 'tape';
import { QuickFind } from '../../index.js';

test('new QuickFind() - should create an empty set', (t) => {
  const qf = new QuickFind();
  const expected = new Map();

  t.notEqual(qf, null, 'QuickFind should exist');
  t.deepEqual(qf.verticies, expected, 'QuickFind.verticies should initialize to an empty array');
  t.equal(qf.count, 0, 'QuickFind.count should be 0');

  t.end();
});

test('new QuickFind() - should create a set with verticies', (t) => {
  const qf = new QuickFind(['a', 'b', 'c', 'd']);
  const expected = new Map([
    ['a', 0],
    ['b', 1],
    ['c', 2],
    ['d', 3]
  ]);

  t.notEqual(qf, null, 'QuickFind should exist');
  t.deepEqual(qf.verticies, expected, 'QuickFind.verticies should initialize w/ 4 verticies');
  t.equal(qf.count, 4, 'QuickFind.count should be 4');

  t.end();
});

test('new QuickFind(items) - should create a set populated with items', (t) => {
  const qf = new QuickFind(['a', 'b', 'c', 'd']);
  const expected = new Map([
    ['a', 0],
    ['b', 1],
    ['c', 2],
    ['d', 3]
  ]);

  t.notEqual(qf, null, 'QuickFind should exist');
  t.deepEqual(qf.verticies, expected, 'QuickFind.verticies should initialize w/ 4 verticies');
  t.equal(qf.count, 4, 'QuickFind.count should be 4');

  t.end();
});

test('QuickFind.find(item) - should return the id of the item', (t) => {
  const qf = new QuickFind(['a', 'b', 'c', 'd']);
  const expected = 1;
  const result = qf.find('b');

  t.deepEqual(result, expected, 'QuickFind.find should return the correct id');

  t.end();
});

test('QuickFind.find(item) - should throw if the item is not in the set', (t) => {
  t.plan(1);
  const qf = new QuickFind(['a', 'b', 'c', 'd']);

  try {
    qf.find('x');
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('QuickFind.connected(itemA, itemB) - should return false if the verticies are not connected', (t) => {
  const qf = new QuickFind(['a', 'b', 'c', 'd']);
  const result = qf.connected('a', 'b');

  t.deepEqual(result, false, 'QuickFind.connected should return false');

  t.end();
});

test('QuickFind.connected(itemA, itemB) - should return true if the verticies are connected', (t) => {
  const qf = new QuickFind(['a', 'b', 'c', 'd']);
  qf.verticies.set('c', 1);
  const result = qf.connected('b', 'c');

  t.deepEqual(result, true, 'QuickFind.connected should return true');

  t.end();
});

test('QuickFind.connected(itemA, itemB) - should return true if the verticies are connected', (t) => {
  const qf = new QuickFind([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  qf.union(4, 3);
  qf.union(3, 8);
  qf.union(6, 5);
  qf.union(9, 4);
  qf.union(2, 1);
  qf.union(5, 0);
  qf.union(7, 2);
  qf.union(6, 1);
  const expected = [1, 1, 1, 8, 8, 1, 1, 1, 8, 8];
  const result = [...qf.verticies.values()];

  t.deepEqual(result, expected, 'QuickFind.verticies should have the correct data');
  t.equal(qf.count, 2, 'QuickFind.count should be 2');

  t.end();
});

test('QuickFind.sets() - Returns a 2D array containing the sets of joined verticies', (t) => {
  const qf = new QuickFind([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  qf.union(4, 3);
  qf.union(3, 8);
  qf.union(6, 5);
  qf.union(9, 4);
  qf.union(2, 1);
  const expected = [
    [0],
    [1, 2],
    [5, 6],
    [7],
    [3, 4, 8, 9]
  ];
  const result = qf.sets();

  t.deepEqual(result, expected, 'Outputs the correct sets');

  t.end();
});

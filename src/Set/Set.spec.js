import test from 'tape';
import { Set } from './Set.js';

test('new Set() - should create a new empty set', (t) => {
  const s = new Set();

  t.notEqual(s, null, 'Set should exist');
  t.equal(s.size, 0, 'Set.size should be 0');

  t.end();
});

test('Set.add(item) - should add one item to the set', (t) => {
  const s = new Set();
  const item = 'test1';
  s.add(item);

  t.deepEqual(s.values, [item], 'Set.values should contain the item');
  t.equal(s.size, 1, 'Set.size should be 1');

  t.end();
});

test('Set.add(item) - called multiple times with the same item should not contain duplicates', (t) => {
  const s = new Set();
  const item = 'test1';
  s.add(item);
  s.add(item);
  s.add(item);

  t.deepEqual(s.values, [item], 'Set.values should contain the item');
  t.equal(s.size, 1, 'Set.size should be 1');

  t.end();
});

test('Set.add() - should throw when no item is specified', (t) => {
  t.plan(1);
  const s = new Set();

  try {
    s.add();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Set.addAll(items) - should add multiple items to the Set', (t) => {
  const s = new Set();
  const items = ['test1', 'test2', 'test3'];
  s.addAll(items);

  t.deepEqual(s.values, items, 'Set.values should be contain all 3 items');
  t.equal(s.size, 3, 'Set.size should be 3');

  t.end();
});

test('Set.addAll() - should throw when no items are specified', (t) => {
  t.plan(1);
  const s = new Set();

  try {
    s.addAll();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('new Set(items) - should add items during construction', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);

  t.deepEqual(s.values, items, 'Set.values should contain the items');
  t.equal(s.size, 3, 'Set.size should be 3');

  t.end();
});

test('Set.remove(item) - should remove the item from the set', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);
  const result = s.remove('test1');
  const expect = ['test2', 'test3'];

  t.deepEqual(s.values, expect, 'Set.values should not contain the removed item');
  t.equal(s.size, 2, 'Set.size should be 2');
  t.true(result, 'result should return true when an item is removed');

  t.end();
});

test('Set.remove(item) - should not remove an item not in the set', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);
  const result = s.remove('test4');
  const expect = ['test1', 'test2', 'test3'];

  t.deepEqual(s.values, expect, 'Set.values should not be modified');
  t.equal(s.size, 3, 'Set.size should be 3');
  t.false(result, 'result should return false if the item is not in the set');

  t.end();
});

test('Set.remove() - should throw when no item is specified', (t) => {
  t.plan(1);
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);

  try {
    s.remove();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Set.clear() - should remove all items from the set', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);
  s.clear();

  t.deepEqual(s.values, [], 'Set.values should be empty');
  t.equal(s.size, 0, 'Set.size should be 0');

  t.end();
});

test('Set[Symbol.iterator] - should be iterable', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Set(items);
  const result = [...s];

  t.deepEqual(result, items, 'iteration works');

  t.end();
});

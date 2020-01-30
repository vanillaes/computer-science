import test from 'tape';
import { LRUCache } from '../../index.js';

test('new LRUCache() - should throw if no capacity is provided', (t) => {
  t.plan(1);

  try {
    // eslint-disable-next-line
    const lc = new LRUCache();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('new LRUCache(capacity) - should create a new cache with the defined capacity', (t) => {
  const lc = new LRUCache(1);

  t.notEqual(lc, null, 'LRUCache should exist');
  t.equal(lc.capacity, 1, 'LRUCache.capacity should initialize to 0');
  t.deepEqual(lc.items.size, 0, 'LRUCache.items should be empty');
  t.deepEqual(lc.dequeue.length, 0, 'LRUCache.dequeue should be empty');

  t.end();
});

test('new LRUCache.put(key, value) - should add an item to the cache', (t) => {
  const expectItems = [[1, 1]];
  const expectdequeue = [1];
  const lc = new LRUCache(1);
  lc.put(1, 1);
  const resultItems = [...lc.items.entries()];
  const resultdequeue = [...lc.dequeue.values()];

  t.deepEqual(resultItems, expectItems, 'LRUCache.items should contain the inserted item');
  t.deepEqual(resultdequeue, expectdequeue, 'LRUCache.dequeue should contain the inserted item');

  t.end();
});

test('new LRUCache.get(key) - should get the item from the cache', (t) => {
  const expect = 1;
  const lc = new LRUCache(1);
  lc.put(1, 1);
  const result = lc.get(1);

  t.deepEqual(result, expect, 'LRUCache.put() should return the item value');

  t.end();
});

test('new LRUCache.get(key) - should return -1 if the item is not in the cache', (t) => {
  const expect = -1;
  const lc = new LRUCache(1);
  lc.put(1, 1);
  const result = lc.get(2);

  t.deepEqual(result, expect, 'LRUCache.put() should return -1');

  t.end();
});

test('new LRUCache.get(key) - should move the item to the top of the cache when accessed', (t) => {
  const expect = [2, 1];
  const lc = new LRUCache(2);
  lc.put(1, 1);
  lc.put(2, 2);
  const result = [...lc.dequeue.values()];

  t.deepEqual(result, expect, 'LRUCache.dequeue should have the correct dequeue order');

  t.end();
});

test('new LRUCache.put(key, value) - should update the item if it is already in the dequeue', (t) => {
  const expect = 4;
  const lc = new LRUCache(2);
  lc.put(1, 1);
  lc.put(1, 4);
  const result = lc.items.get(1);

  t.deepEqual(result, expect, 'LRUCache.dequeue should contain the correct value');

  t.end();
});

test('new LRUCache.put(key, value) - should move the item to the top of the dequeue when the value is updated', (t) => {
  const expect = [1, 2];
  const lc = new LRUCache(3);
  lc.put(1, 1);
  lc.put(2, 2);
  lc.put(1, 4);
  const result = [...lc.dequeue.values()];

  t.deepEqual(result, expect, 'LRUCache.dequeue should contain the correct dequeue order');

  t.end();
});

test('LRUCache.clear() - should remove all items from the list', (t) => {
  const expectItems = [];
  const expectdequeue = [];
  const lc = new LRUCache(2);
  lc.put(1, 1);
  lc.put(2, 2);
  lc.clear();
  const resultItems = [...lc.items.entries()];
  const resultdequeue = [...lc.dequeue.values()];

  t.deepEqual(resultItems, expectItems, 'LRUCache.items should be cleared');
  t.deepEqual(resultdequeue, expectdequeue, 'LRUCache.dequeue should be cleared');

  t.end();
});

test('LRUCache.keys() - should return the keys in recent->least-recent order', (t) => {
  const expect = [3, 1];
  const lc = new LRUCache(2);
  lc.put(1, 2);
  lc.put(3, 4);
  const result = [...lc.keys()];

  t.deepEqual(result, expect, 'keys iteration works');

  t.end();
});

test('LRUCache.values() - should return the values in recent->least-recent order', (t) => {
  const expect = [4, 2];
  const lc = new LRUCache(2);
  lc.put(1, 2);
  lc.put(3, 4);
  const result = [...lc.values()];

  t.deepEqual(result, expect, 'values iteration works');

  t.end();
});

test('LRUCache.entries() - should return the entries in recent->least-recent order', (t) => {
  const expect = [[3, 4], [1, 2]];
  const lc = new LRUCache(2);
  lc.put(1, 2);
  lc.put(3, 4);
  const result = [...lc.entries()];

  t.deepEqual(result, expect, 'entries iteration works');

  t.end();
});

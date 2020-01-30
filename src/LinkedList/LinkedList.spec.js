import test from 'tape';
import { LinkedList } from 'computer-science';

test('new LinkedList() - should create a new empty list', (t) => {
  const ll = new LinkedList();

  t.notEqual(ll, null, 'LinkedList should exist');
  t.equal(ll.head, null, 'LinkedList.head should initialize to null');
  t.equal(ll.tail, null, 'LinkedList.tail should initialize to null');
  t.equal(ll.size, 0, 'LinkedList.size should be 0');

  t.end();
});

test('LinkedList.add(item) - should add one item to the list', (t) => {
  const ll = new LinkedList();
  const item = 'test1';
  ll.add(item);

  t.equal(ll.head.data, item, 'LinkedList.head should be the item');
  t.equal(ll.tail.data, item, 'LinkedList.tail should be the item');
  t.equal(ll.size, 1, 'LinkedList.size should be 1');

  t.end();
});

test('LinkedList.add() - should throw when no item is specified', (t) => {
  t.plan(1);
  const ll = new LinkedList();

  try {
    ll.add();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('LinkedList.add(item)* - called multiple times should add multiple items to the list', (t) => {
  const ll = new LinkedList();
  const items = ['test1', 'test2', 'test3'];
  items.forEach(item => ll.add(item));

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 3, 'LinkedList.size should be 3');

  t.end();
});

test('LinkedList.addAll(items) - should add multiple items to the list', (t) => {
  const ll = new LinkedList();
  const items = ['test1', 'test2', 'test3'];
  ll.addAll(items);

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 3, 'LinkedList.size should be 3');

  t.end();
});

test('LinkedList.addAll() - should throw when no items are specified', (t) => {
  t.plan(1);
  const ll = new LinkedList();

  try {
    ll.addAll();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('new LinkedList(items) - should add items during construction', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 3, 'LinkedList.size should be 3');

  t.end();
});

test('LinkedList.remove(item) - should remove the first item from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  const result = ll.remove('test1');

  t.equal(ll.head.data, items[1], 'LinkedList.head should be the second item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 2, 'LinkedList.size should be 2');
  t.true(result, 'result should return true when an item is removed');

  t.end();
});

test('LinkedList.remove(item) - should remove a middle item from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  const result = ll.remove('test2');

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 2, 'LinkedList.size should be 2');
  t.true(result, 'result should return true when an item is removed');

  t.end();
});

test('LinkedList.remove(item) - should remove the last item from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  const result = ll.remove('test3');

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[1], 'LinkedList.tail should be the second item');
  t.equal(ll.size, 2, 'LinkedList.size should be 2');
  t.true(result, 'result should return true when an item is removed');

  t.end();
});

test('LinkedList.remove(item)* - called multiple times should remove all items from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  items.forEach(item => ll.remove(item));

  t.equal(ll.head, null, 'LinkedList.head should reset to null');
  t.equal(ll.tail, null, 'LinkedList.tail should reset to null');
  t.equal(ll.size, 0, 'LinkedList.size should be 0');

  t.end();
});

test('LinkedList.remove(not-item) - should remove nothing from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  const result = ll.remove('not-item');

  t.equal(ll.head.data, items[0], 'LinkedList.head should be the first item');
  t.equal(ll.tail.data, items[2], 'LinkedList.tail should be the last item');
  t.equal(ll.size, 3, 'LinkedList.size should be 3');
  t.false(result, 'result should return true when an item is removed');

  t.end();
});

test('LinkedList.remove() - should throw  when no item is specified', (t) => {
  t.plan(1);
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);

  try {
    ll.remove();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('LinkedList.remove(item) - should throw when called on an empty list', (t) => {
  t.plan(1);
  const ll = new LinkedList();

  try {
    ll.remove('test1');
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('LinkedList.clear() - should remove all items from the list', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  ll.clear();

  t.equal(ll.head, null, 'LinkedList.head should reset to null');
  t.equal(ll.tail, null, 'LinkedList.tail should reset to null');
  t.equal(ll.size, 0, 'LinkedList.size should be 0');

  t.end();
});

test('LinkedList[Symbol.iterator] - should be iterable', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const ll = new LinkedList(items);
  const result = [...ll];

  t.deepEqual(result, items, 'iteration works');

  t.end();
});

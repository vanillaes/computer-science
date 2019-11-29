import test from 'tape';
import { Queue } from './Queue.js';

test('new Queue() - should create a new empty queue', (t) => {
  const q = new Queue();

  t.notEqual(q, null, 'Queue should exist');
  t.equal(q.first, null, 'Queue.first should initialize to null');
  t.equal(q.last, null, 'Queue.last should initialize to null');
  t.equal(q.size, 0, 'Queue.size should be 0');

  t.end();
});

test('Queue.enqueue(item) - should add one item to the queue', (t) => {
  const q = new Queue();
  const item = 'test1';
  q.enqueue(item);

  t.equal(q.first.data, item, 'Queue.first should be the item');
  t.equal(q.last.data, item, 'Queue.last should be the item');
  t.equal(q.size, 1, 'Queue.size should be 1');

  t.end();
});

test('Queue.enqueue() - should throw when no item is specified', (t) => {
  t.plan(1);
  const q = new Queue();

  try {
    q.enqueue();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Queue.enqueue(item)* - called multiple times should add multiple items to the queue', (t) => {
  const q = new Queue();
  const items = ['test1', 'test2'];
  items.forEach(item => q.enqueue(item));

  t.equal(q.first.data, items[0], 'Queue.first should be the first item');
  t.equal(q.last.data, items[1], 'Queue.last should be the second item');
  t.equal(q.size, 2, 'Queue.size should be 2');

  t.end();
});

test('Queue.enqueueAll(items) - should add multiple items to the queue', (t) => {
  const q = new Queue();
  const items = ['test1', 'test2'];
  q.enqueueAll(items);

  t.equal(q.first.data, items[0], 'Queue.first should be the first item');
  t.equal(q.last.data, items[1], 'Queue.last should be the second item');
  t.equal(q.size, 2, 'Queue.size should be 2');

  t.end();
});

test('Queue.enqueueAll() - should throw when no items are specified', (t) => {
  t.plan(1);
  const q = new Queue();

  try {
    q.enqueueAll();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('new Queue(items) - should enqueue items during construction', (t) => {
  const items = ['test1', 'test2'];
  const q = new Queue(items);

  t.equal(q.first.data, items[0], 'Queue.first should be the first item');
  t.equal(q.last.data, items[1], 'Queue.last should be the second item');
  t.equal(q.size, 2, 'Queue.size should be 2');

  t.end();
});

test('Queue.dequeue(item) - should dequeue an item from the queue', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const q = new Queue(items);
  const result = q.dequeue();

  t.equal(q.first.data, items[1], 'Queue.first should be the second item');
  t.equal(q.last.data, items[2], 'Queue.last should be the last item');
  t.equal(q.size, 2, 'Queue.size should be 2');
  t.equal(result, items[0], 'result should return the first item');

  t.end();
});

test('Queue.dequeue(item)* - called multiple times should dequeue all items from the queue', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const q = new Queue(items);
  for (let i = 0; i < items.length; i++) {
    q.dequeue();
  }

  t.equal(q.first, null, 'Queue.first should reset to null');
  t.equal(q.last, null, 'Queue.last should reset to null');
  t.equal(q.size, 0, 'Queue.size should be 0');

  t.end();
});

test('Stack.dequeue() - should throw when called on an empty queue', (t) => {
  t.plan(1);
  const q = new Queue();

  try {
    q.dequeue();
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Queue.peek() - should return the first item of the queue', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const q = new Queue(items);
  const result = q.peek();

  t.equal(result, items[0], 'Should return the first item in the queue');

  t.end();
});

test('Queue.clear() - should remove all items from the queue', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const q = new Queue(items);
  q.clear();

  t.equal(q.first, null, 'Queue.first should reset to null');
  t.equal(q.last, null, 'Queue.first should reset to null');
  t.equal(q.size, 0, 'queue.size should be 0');

  t.end();
});

test('Queue[Symbol.iterator] - should be iterable', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const q = new Queue(items);
  const result = [...q];

  t.deepEqual(result, items, 'iteration works');

  t.end();
});

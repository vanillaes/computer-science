import test from 'tape';
import { Stack } from './Stack.js';

test('new Stack - should create a new empty stack', (t) => {
  const s = new Stack();

  t.notEqual(s, null, `Stack should exist`);
  t.equal(s.top, null, `Stack.top should initialize to null`);
  t.equal(s.size, 0, `Stack.size should be 0`);

  t.end();
});

test('Stack.push(item) - should add one item to the stack', (t) => {
  const s = new Stack();
  const item = 'test1';
  s.push(item);

  t.equal(s.top.data, item, `Stack.top should be the item`);
  t.equal(s.size, 1, `Stack.size should be 1`);

  t.end();
});

test('Stack.push() - should throw when no item is specified', (t) => {
  t.plan(1);
  const s = new Stack();

  try {
    s.push();
  } catch(e) {
    t.pass(`Expected exception thrown`);
  }

  t.end();
});

test('Stack.push(item)* - called multiple times should add multiple items to the stack', (t) => {
  const s = new Stack();
  const items = ['test1', 'test2'];
  items.forEach(item => s.push(item));

  t.equal(s.top.data, items[1], `Stack.top should be the last item`);
  t.equal(s.size, 2, `Stack.size should be 2`);

  t.end();
});

test('Stack.pushAll(items) - should add multiple items to the stack', (t) => {
  const s = new Stack();
  const items = ['test1', 'test2']; 
  s.pushAll(items);

  t.equal(s.top.data, items[1], `Stack.top should be the last item`);
  t.equal(s.size, 2, `Stack.size should be 2`);

  t.end();
});

test('Stack.pushAll() - should throw when no items are specified', (t) => {
  t.plan(1);
  const s = new Stack();

  try {
    s.pushAll();
  } catch(e) {
    t.pass(`Expected exception thrown`);
  }

  t.end();
});

test('new Stack(items) - should push items during construction', (t) => {
  const items = ['test1', 'test2'];
  const s = new Stack(items);

  t.equal(s.top.data, items[1], `Stack.top should be the last item`);
  t.equal(s.size, 2, `Stack.size should be 2`);

  t.end();
});

test('Stack.pop() - should remove and return the top item', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Stack(items);
  const result = s.pop();

  t.equal(s.top.data, items[1], `Stack.top should be the second item`);
  t.equal(s.size, 2, `Stack.size should be 2`);
  t.equal(result, items[2], 'result should return the popped item')

  t.end();
});

test('Stack.pop()* - called multiple times should remove all items from the stack', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Stack(items);
  for(let i = 0; i < items.length; i++) {
    s.pop();
  }

  t.equal(s.top, null, `Stack.top should reset to null`);
  t.equal(s.size, 0, `Stack.size should be 0`);

  t.end();
});

test('Stack.pop() - should throw when called on an empty stack', (t) => {
  t.plan(1);
  const s = new Stack();

  try {
    s.pop();
  } catch(e) {
    t.pass(`Expected exception thrown`);
  }

  t.end();
});

test('Stack.peek() - should return the top item of the stack', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Stack(items);
  const result = s.peek();

  t.equal(result, items[2], `Should return the top item of the stack`);

  t.end();
});

test('Stack.clear() - should remove all items from the stack', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Stack(items);
  s.clear();

  t.equal(s.top, null, `Stack.top should reset to null`);
  t.equal(s.size, 0, `Stack.size should be 0`);

  t.end();
});

test('...Stack - should be iterable', (t) => {
  const items = ['test1', 'test2', 'test3'];
  const s = new Stack(items);
  const result = [ ...s ];

  t.deepEqual(result, items.reverse(), `iteration works`);

  t.end();
});

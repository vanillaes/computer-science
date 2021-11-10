import test from 'tape'
import { LinkedList } from '@vanillaes/computer-science'

test('new LinkedList() - should create a new empty list', (t) => {
  const ll = new LinkedList()

  const expect = []
  const actual = [...ll]
  t.notEqual(ll, null, 'LinkedList should exist')
  t.equal(ll.size, 0, 'LinkedList.size should be 0')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.add(item) - should add one item to the list', (t) => {
  const ll = new LinkedList()
  const item = 'test1'
  ll.add(item)

  const expect = [item]
  const actual = [...ll]
  t.equal(ll.size, 1, 'LinkedList.size should be 1')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.add() - should throw when no item is specified', (t) => {
  t.plan(1)
  const ll = new LinkedList()

  try {
    ll.add()
  } catch (e) {
    t.pass('Expected exception thrown')
  }

  t.end()
})

test('LinkedList.add(item)* - called multiple times should add multiple items to the list', (t) => {
  const ll = new LinkedList()
  const items = ['test1', 'test2', 'test3']
  items.forEach(item => ll.add(item))

  const actual = [...ll]
  t.equal(ll.size, 3, 'LinkedList.size should be 3')
  t.deepEqual(items, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.addAll(items) - should add multiple items to the list', (t) => {
  const ll = new LinkedList()
  const items = ['test1', 'test2', 'test3']
  ll.addAll(items)

  const actual = [...ll]
  t.equal(ll.size, 3, 'LinkedList.size should be 3')
  t.deepEqual(items, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.addAll() - should throw when no items are specified', (t) => {
  t.plan(1)
  const ll = new LinkedList()

  try {
    ll.addAll()
  } catch (e) {
    t.pass('Expected exception thrown')
  }

  t.end()
})

test('new LinkedList(items) - should add items during construction', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)

  const actual = [...ll]
  t.deepEqual(items, actual, 'LinkedList should match expected output')
  t.equal(ll.size, 3, 'LinkedList.size should be 3')
  t.deepEqual(items, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove(item) - should remove the first item from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  const result = ll.remove('test1')

  const expect = ['test2', 'test3']
  const actual = [...ll]
  t.equal(ll.size, 2, 'LinkedList.size should be 2')
  t.true(result, 'should return true when an item is removed')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove(item) - should remove a middle item from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  const result = ll.remove('test2')

  const expect = ['test1', 'test3']
  const actual = [...ll]
  t.equal(ll.size, 2, 'LinkedList.size should be 2')
  t.true(result, 'should return true when an item is removed')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove(item) - should remove the last item from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  const result = ll.remove('test3')

  const expect = ['test1', 'test2']
  const actual = [...ll]
  t.equal(ll.size, 2, 'LinkedList.size should be 2')
  t.true(result, 'should return true when an item is removed')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove(item)* - called multiple times should remove all items from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  items.forEach(item => ll.remove(item))

  const expect = []
  const actual = [...ll]
  t.equal(ll.size, 0, 'LinkedList.size should be 0')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove(not-item) - should remove nothing from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  const result = ll.remove('not-item')

  const actual = [...ll]
  t.equal(ll.size, 3, 'LinkedList.size should be 3')
  t.false(result, 'should return true when an item is removed')
  t.deepEqual(items, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList.remove() - should throw when no item is specified', (t) => {
  t.plan(1)
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)

  try {
    ll.remove()
  } catch (e) {
    t.pass('Expected exception thrown')
  }

  t.end()
})

test('LinkedList.remove(item) - should throw when called on an empty list', (t) => {
  t.plan(1)
  const ll = new LinkedList()

  try {
    ll.remove('test1')
  } catch (e) {
    t.pass('Expected exception thrown')
  }

  t.end()
})

test('LinkedList.clear() - should remove all items from the list', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  ll.clear()

  const expect = []
  const actual = [...ll]
  t.equal(ll.size, 0, 'LinkedList.size should be 0')
  t.deepEqual(expect, actual, 'LinkedList should match expected output')

  t.end()
})

test('LinkedList[Symbol.iterator] - should be iterable', (t) => {
  const items = ['test1', 'test2', 'test3']
  const ll = new LinkedList(items)
  
  const actual = [...ll]
  t.deepEqual(items, actual, 'iteration works')

  t.end()
})

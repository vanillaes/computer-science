# Linear Data Structures

## Description

Linear data structures get their name because they are typically used to map 1-to-1 relationships between data elements in a one-dimensional fashion.

While not an optimial solution for general use, sometimes they are a 'best fit' for some specific application models.

## LinkedList

A `LinkedList` is used to define a sequential list data. Ie a list of nodes that map direct parent->child relationsips.

### Complexity

*Write: O(1)*

A write creates a new `ListNode` and appends it to the end of the list.

*Read: O(N)*

Traverses from the beginning of the list until it either locates a matching item or reaches the end of the list. 

*Memory: O(N)*

Every ListNode stores the data as well as a reference to the `next` node in the list.

### Usage

*Creation*

```javascript
const list = new LinkedList();
```

*Creation w/ data*

```javascript
const list = new LinkedList(['item1', 'item2', 'item3']);
```

*Get the size (ie # of nodes) of the list*

```javascript
const size = list.size;
```

*Add an item to the list*

```javascript
list.add('item');
```

*Add an array of items to the list*

```javascript
list.addAll(['item1', 'item2', 'item3']);
```

*Remove an item from the list*

```javascript
list.remove('item');
```

*Remove all items from the list*

```javascript
list.clear();
```

*Iterate through the items in the list*

```javascript
const listToArray = ...list;
```

### Stack

A `Stack` is used to define a FIFO (First-In-First-Out) collection of data. Ie a stack contains nodes with data and the relationship to the next item lower on the stack. 

*Write: O(1)*

A write creates a new `StackNode` and appends it to top of the stack.

*Read: O(1)*

- Pop - removes and returns the top item of the stack
- Peek - returns the top item without removing it

*Memory: O(N)*

Every StackNode stores the data as well as a reference `link` to the next lower node in the stack.

### Usage

*Creation*

```javascript
const stack = new Stack();
```

*Creation w/ data*

```javascript
const stack = new Stack(['item1', 'item2', 'item3']);
```

*Get the size (ie # of nodes) of the Stack*

```javascript
const size = stack.size;
```

*Add an item to the stack*

```javascript
stack.push('item');
```

*Add an array of items to the stack*

```javascript
list.pushAll(['item1', 'item2', 'item3']);
```

*Remove and return an item from the top of the stack*

```javascript
const topItem = list.pop();
```

*Return but don't remove the top item on the stack*

```javascript
const topItem = list.peek()
```

*Remove all items from the stack*

```javascript
stack.clear();
```

*Iterate through the items in the stack*

```javascript
const listToArray = ...list;
```

Note: items will be read in top->bottom order.

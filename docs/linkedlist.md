# LinkedList

A `LinkedList` is used to store a sequential list of data.

## Complexity

**Write: O(1)**

A write creates a new `ListNode` and appends it to the end of the list.

**Read: O(N)**

Traverses from the beginning of the list until it either locates a matching item or reaches the end of the list. 

**Memory: O(N)**

Every `ListNode` stores the data as well as a reference to the next node in the list.

## Usage

**Creation**

```javascript
const list = new LinkedList();
```

**Creation w/ data**

```javascript
const list = new LinkedList(['item1', 'item2', 'item3']);
```

**Get the size (ie # of nodes) of the list**

```javascript
const size = list.size;
```

**Add an item to the list**

```javascript
list.add('item');
```

**Add an array of items to the list**

```javascript
list.addAll(['item1', 'item2', 'item3']);
```

**Remove an item from the list**

```javascript
list.remove('item');
```

**Remove all items from the list**

```javascript
list.clear();
```

**Iterate through the items in the list**

```javascript
const listToArray = ...list;
```

## Resources

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [LinkedList - trekhleb/javascript-algorithms][]
- [Linked Lists Introduction - WilliamFiset][]


[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[LinkedList - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
[Linked Lists Introduction - WilliamFiset]: https://www.youtube.com/watch?v=-Yn5DU0_-lw

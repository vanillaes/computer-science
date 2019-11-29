# LinkedList

A `LinkedList` is a data structure that stores a linear set of data in order of insertion

<!-- TODO: Add better description -->
<!-- TODO: Add a graphic representing the list -->

## API

```typescript
abstract class AbstractLinkedList {
  size: number;
  constructor(...items?: any[]);
  add(item: any);
  addAll(...items: any[]);
  remove(item: any);
  clear();
  [Symbol.iterator]();
}
```

## Implementations

- [LinkedList][]

[LinkedList]: ./LinkedList/LinkedList.md

## Resources

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [LinkedList - trekhleb/javascript-algorithms][]
- [Linked Lists Introduction - WilliamFiset][]


[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[LinkedList - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
[Linked Lists Introduction - WilliamFiset]: https://www.youtube.com/watch?v=-Yn5DU0_-lw

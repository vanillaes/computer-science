# Set

A `Set` is a data structure that stores a collection of unique values

<!-- TODO: Add better description -->
<!-- TODO: Add a graphic representing the list -->

## API

```typescript
abstract class AbstractSet {
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

- [Set][]

[Set]: ./Set/Set.md

## Resources

- [Set - MDN][]
- [Set - Ben's Blog]


[Set - MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Set - Ben's Blog]: http://blog.benoitvallon.com/data-structures-in-javascript/the-set-data-structure/
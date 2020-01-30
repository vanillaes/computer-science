# Miscellaneous

The following is a list of miscellaneous data structures that don't fall under any specific category.

## LRUCache (Least Recently Used Cache)

A LRUCache is a specialized data structure used to store a subset of the most recently added/accessed items in a collection.

### Characteristics
- uses a combination of a doubly linked list and a HashMap
- the cache has a fixed `capacity` specified during creation
- `put(key, value)` adds an item to the front of the list
- `put(key, value)` when the `capacity` is exceeded the last item in the list is removed
- `get(key)` returns the value of `item[key]`
- `get(key)` moves the item to the top of the front
- `put(key, value)` mutates the value if it already exists in the cache

### API

```typescript
abstract class LRUCache {
  capacity: number;
  constructor(capacity);
  get(key: any);
  put(key: any, value: any);
  clear(): void;
  keys(): Iterator<any>;
  values(): Iterator<any>;
  entries(): Iterator<Array<any>>;
}
```

### Implementation

- [LRUCache][]

[LRUCache]: ./MiscDS/LRUCache.md

### Resources

- [LRU Cache Data Structure - Interview Cake][]
- [LRU Cache - GeeksForGeeks][]


[LRU Cache Data Structure - Interview Cake]: https://www.interviewcake.com/concept/java/lru-cache
[LRU Cache - GeeksForGeeks]: https://www.geeksforgeeks.org/lru-cache-implementation/

# UnionFind

A `UnionFind` data structure used to keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.

<!-- TODO: Add better description -->
<!-- TODO: Add a graphic representing the list -->

## API

```typescript
abstract class AbstractUnionFind {
  count: number;
  constructor(...items?: any[]);
  find(item: any);
  connected(itemA: any, itemB: any): boolean;
  union((itemA: any, itemB: any);
  sets(): [][];
}
```

## Implementations

- [QuickFind][]
- [QuickUnion][]

[QuickFind]: ./UnionFind/QuickFind.md
[QuickUnion]: ./UnionFind/QuickUnion.md

## Resources

- [1.5 Case Study: Union-Find - Algorithms (4th ed)][]
- [Disjoint Set - trekhleb/javascript-algorithms][]
- [QuickFind.java - Algorithms (4th ed)][]
- [QuickUnion.java - Algorithms (4th ed)][]
- [Union Find - Union and Find Operations][]

[1.5 Case Study: Union-Find - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/
[QuickFind.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/QuickFindUF.java.html
[QuickUnion.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/QuickUnionUF.java.html
[Disjoint Set - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set
[Union Find - Union and Find Operations]: https://www.youtube.com/watch?v=0jNmHPfA_yE

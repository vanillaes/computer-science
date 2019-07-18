# QuickFind

QuickFind is a naive implementation of a UF (Union Find) a.k.a Disjoint Set data structure.

Naive meaning, it's the easy to understand/implement but is lacking in any valuable performance optimizations.

Unlike the QuickFind implementations found in most Algorithms textbooks (ie number-based only), this specific implementation is built for practical application. It has a little more overhead than a reference implementation but it will work with any type of value.


## Complexity

**Write: O(1)**

- constructor - QF is initialized with the graph data set. Each vertex inserted involves one Map.set() (ie contstant time).

**Read: O(1)**

- find - locates the ID of an item, requires a single dictionary lookup
- connected - returns the first item without removing it

**Union: O(n)**

- union - requires iterating through all verticies so all ids in setB are overwritten with the id of setA

**Memory: O(N)**

Every vertex includes the `value` and an associated `id`. All verticies are stored in a `Map`. So, lightly worse than linear complexity.

### Usage

**Creation**

```javascript
const quickFind = new QuickFind();
```

**Creation w/ data**

```javascript
const quickFind = new QuickFind(['item1', 'item2', 'item3']);
```

**Get the count of unique sets in the graph**

```javascript
const size = quickFind.count;
```

**Find the set ID for a value**

```javascript
const id = quickFind.find('item');
```

**Are the sets for 2 items already connected?**

```javascript
const isConnected = quickFind.connected('item1', 'item2');
```

**Join 2 verticies if they aren't already connected**

```javascript
quickFind.union('item1', 'item2');
```

**Outputs a 2D array of the sets and the values they contain**

```javascript
const sets = quickFind.sets();
```

## Resources

[1.5 Case Study: Union-Find - Algorithms (4th ed)][]
[Disjoint Set - trekhleb/javascript-algorithms][]
[QuickFind.java - Algorithms (4th ed)][]
[Union Find - Union and Find Operations][]

[1.5 Case Study: Union-Find - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/
[QuickFind.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/QuickFindUF.java.html
[Disjoint Set - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set
[Union Find - Union and Find Operations]: https://www.youtube.com/watch?v=0jNmHPfA_yE

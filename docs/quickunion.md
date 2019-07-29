# QuickUnion

QuickUnion is a slightly optimized implementaitn of a UF (Union Find) a.k.a Disjoint Set data structure.

To improve the speed of unions this implementation maps the relationships between the sets as a forest of trees. Best case, this unions should be performed in O(log n) time but since the tree isn't balanced/compressed during insertion worst-case lookups can still take O(N).

Unlike the QuickUnion implementations found in most Algorithms textbooks (ie number-based only), this specific implementation is built for practical application. The relationship between values and their corresponding IDs is stored in a Map for more flexibility while mainitaining constant looup time.

## Complexity

**Write: O(1)**

- constructor - QU is initialized with the graph data set. Each vertex inserted involves one Map.set() (ie contstant time).

**Read: O(log n)**

- find - locates the ID of an item, the tree representing the set is traversed to find the root
- connected - returns the first item without removing it

**Union: O(log n)**

- union - requires iterating through all verticies so all ids in setB are overwritten with the id of setA

**Memory: O(N)**

Every vertex includes the `value` and an associated `id`. All verticies are stored in a `Map`. So, lightly worse than linear complexity.

### Usage

**Creation**

```javascript
const quickUnion = new QuickUnion();
```

**Creation w/ data**

```javascript
const quickUnion = new QuickUnion(['item1', 'item2', 'item3']);
```

**Get the count of unique sets in the graph**

```javascript
const size = quickUnion.count;
```

**Find the set ID for a value**

```javascript
const id = quickUnion.find('item');
```

**Are the sets for 2 items already connected?**

```javascript
const isConnected = quickUnion.connected('item1', 'item2');
```

**Join 2 verticies if they aren't already connected**

```javascript
quickUnion.union('item1', 'item2');
```

**Outputs a 2D array of the sets and the values they contain**

```javascript
const sets = quickUnion.sets();
```

## Resources

- [1.5 Case Study: Union-Find - Algorithms (4th ed)][]
- [QuickUnion.java - Algorithms (4th ed)][]
- [Disjoint Set - trekhleb/javascript-algorithms][]
- [Union Find - Union and Find Operations][]

[1.5 Case Study: Union-Find - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/
[QuickUnion.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/15uf/QuickUnionUF.java.html
[Disjoint Set - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/disjoint-set
[Union Find - Union and Find Operations]: https://www.youtube.com/watch?v=0jNmHPfA_yE

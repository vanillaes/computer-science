# Sort.SelectionSort

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionselectionsortarrayarray-comparator-step"><code>export function SelectionSort *(array(array, [comparator], [step])*</code></h3>

The sort works by iterating through the array starting from the beginning.
Each item is compared to every subsequent item in the array to determine
which is smaller. Either the current item is kept or a smaller item is
swapped into its spot. This repeats until the order of items is arranged
from smallest-to-largest.

#### Arguments
1. `array` *(Array)*: the input array
2. `[comparator]` *(Function): a function to compare `2` values &#42;(defaults asc->desc)*&#42;
3. `[step]` *(Function)*: an optional function that gets applied at each step

#### Returns
*(Array)*: the sorted array

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

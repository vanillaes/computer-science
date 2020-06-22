/** A Set implementation using an array */
export class Set {
    /**
     * @param {*[]} [items] an array of items to add to the set
     */
    constructor(items?: any[]);
    /**
     * The set's values
     * @private
     * @type {*[]}
     */
    private values;
    /**
     * The number of items in the set
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the set
     *
     * @param {*} item an item to add to the set
     */
    add(item?: any): void;
    /**
     * Add multiple items to the set
     *
     * @param {*[]} items an array of items to be added to the set
     */
    addAll(items?: any[]): void;
    /**
     * Remove an item from the set
     *
     * @param {*} item the item to remove from the set
     * @returns {boolean} true if the item was successfully removed, false if not
     */
    remove(item?: any): boolean;
    /**
     * Remove all items from the set
     * @method
     */
    clear(): void;
    /**
     * Iterate all items in the set
     *
     * @private
     * @returns {Iterator<*>} an iterator for the data
     */
    private [Symbol.iterator];
}

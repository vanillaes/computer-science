/** A LRU (Least Recently Used) cache implementation */
export class LRUCache {
    constructor(capacity?: any);
    /**
     * the capacity of the cache
     * @private
     * @type {number}
     */
    capacity: number;
    /**
     * the items map
     * @private
     * @type {Map}
     */
    items: Map;
    /**
     * the cache order
     * @private
     * @type {Array}
     */
    dequeue: Array;
    /**
     * @param {number} key The key of the item to look up
     * @return {number} The value of the item
     */
    get(key: number): number;
    /**
     * @param {number} key The key of the item to add/update
     * @param {number} value The value of the item add/update
     * @return {void}
     */
    put(key: number, value: number): void;
    /**
     * Remove all items from the cache
     * @method
     */
    clear(): void;
    /**
     * An iterator that returns the keys in recent -> least-recent order
     *
     * @returns {*} an iterator for the item keys
     */
    keys(): any;
    /**
     * An iterator that returns the values in recent -> least-recent order
     *
     * @returns {*} an iterator for the item values
     */
    values(): any;
    /**
     * An iterator that returns the entries in recent -> least-recent order
     *
     * @returns {*} an iterator for the items
     */
    entries(): any;
}

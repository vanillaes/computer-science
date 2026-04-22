/** A LRU (Least Recently Used) cache implementation */
export class LRUCache {
    constructor(capacity?: null);
    /**
     * the capacity of the cache
     * @private
     * @type {number}
     */
    private capacity;
    /**
     * the items map
     * @private
     * @type {Map}
     */
    private items;
    /**
     * the cache order
     * @private
     * @type {Array}
     */
    private dequeue;
    /**
     * @param {number} key The key of the item to look up
     * @returns {number} The value of the item
     */
    get(key: number): number;
    /**
     * @param {number} key The key of the item to add/update
     * @param {number} value The value of the item add/update
     */
    put(key: number, value: number): void;
    /**
     * Remove all items from the cache
     */
    clear(): void;
    /**
     * An iterator that returns the keys in recent -> least-recent order
     * @yields {*} the next key
     */
    keys(): Generator<any, void, unknown>;
    /**
     * An iterator that returns the values in recent -> least-recent order
     * @yields {*} the next item
     */
    values(): Generator<any, void, unknown>;
    /**
     * An iterator that returns the entries in recent -> least-recent order
     * @yields {*} the next entry
     */
    entries(): Generator<any[], void, unknown>;
}

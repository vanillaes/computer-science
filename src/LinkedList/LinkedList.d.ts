/** A LinkedList implementation using nodes liked by reference */
export class LinkedList {
    /**
     * @param {array} [items] an array of items to add to the list
     */
    constructor(items?: any[]);
    /**
     * The head node in the list
     * @private
     * @type {Object}
     */
    private head;
    /**
     * The tail node in the list
     * @private
     * @type {Object}
     */
    private tail;
    /**
     * The number of items in the list
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the list
     *
     * @param {*} item an item to add to the list
     */
    add(item?: any): void;
    /**
     * Add multiple items to the list
     *
     * @param {*[]} items an array of items to be added to the list
     */
    addAll(items?: any[]): void;
    /**
     * Remove an item from the list
     *
     * @param {*} item the item to remove from the list
     * @returns {boolean} true if the item was successfully removed, false if not
     */
    remove(item?: any): boolean;
    /**
     * Remove all items from the list
     * @method
     */
    clear(): void;
    /**
     * Iterate all items (in-order) in the list
     *
     * @private
     * @returns {Iterator<*>} an iterator for the data
     */
    private [Symbol.iterator];
}

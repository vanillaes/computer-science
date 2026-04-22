/**
 * A LinkedList implementation using nodes liked by reference
 * @template T
 */
export class LinkedList<T> {
    /**
     * @param {T[]} [items] an array of items to add to the list
     */
    constructor(items?: T[]);
    /**
     * The head node in the list
     * @type {ListNode<T>|null}
     */
    head: ListNode<T> | null;
    /**
     * The tail node in the list
     * @type {ListNode<T>|null}
     */
    tail: ListNode<T> | null;
    /**
     * The number of items in the list
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the list
     * @param {*} item an item to add to the list
     */
    add(item?: any): void;
    /**
     * Add multiple items to the list
     * @param {T[]} [items] an array of items to be added to the list
     */
    addAll(items?: T[]): void;
    /**
     * Remove an item from the list
     * @param {*} item the item to remove from the list
     * @returns {boolean} true if the item was successfully removed, false if not
     */
    remove(item?: any): boolean;
    /**
     * Remove all items from the list
     */
    clear(): void;
    /**
     * Iterate all items (in-order) in the list
     * @private
     * @returns {Iterator<*>} an iterator for the data
     */
    private [Symbol.iterator];
}
/**
 * @template T
 * @private
 */
declare class ListNode<T> {
    /**
     * @param {T} data Data stored in the node
     * @param {ListNode<T>|null} next Reference to the next node
     */
    constructor(data: T, next?: ListNode<T> | null);
    /**
     * @type {T}
     */
    data: T;
    /**
     * @type {ListNode<T>|null}
     */
    next: ListNode<T> | null;
}
export {};

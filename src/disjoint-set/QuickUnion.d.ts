/**
 * @class QuickUnion
 * @exports
 */
export class QuickUnion {
    /**
     * @constructs QuickUnion
     * @param {*[]} [values]
     */
    constructor(values?: any[]);
    /**
     * The identity array
     *
     * @private
     * @type {Map}
     */
    verticies: Map;
    /**
     * The number of sets
     *
     * @type {Number}
     */
    count: Number;
    /**
     * Find the id for a value
     *
     * @param {*} value
     * @returns {*}
     */
    find(value: any): any;
    /**
     * Are the 2 verticies connected?
     *
     * @param {*} valueA
     * @param {*} valueB
     * @returns {boolean}
     */
    connected(valueA: any, valueB: any): boolean;
    /**
     * Join the verticies if not alredy in the same set
     *
     * @param {*} valueA
     * @param {*} valueB
     */
    union(valueA: any, valueB: any): void;
    /**
     * Returns a 2D array of the unique sets and the values in those sets
     *
     * @returns [][]
     */
    sets(): any[];
}

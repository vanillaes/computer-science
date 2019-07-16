// @ts-check

/**
 * @class QuickFind
 * @exports
 */
export class QuickFind {

  /**
   * The identity array
   *
   * @private
   * @type {Number[]}
   */
  id = [];


  /**
   * The number of sets
   *
   * @type {Number}
   */
  count = 0;


  /**
   * @constructs QuickFind
   * @param {*} [size=0]
   */
  constructor(size = 0) {
    const id = new Array(size);

    // create identities
    for (let i = 0; i < size; i++) {
      id[i] = i;
    }

    this.id = id;
    this.count = size;

    console.log(this.id);
  }

  /**
   * Find the id for a value
   *
   * @param {*} value
   * @returns {Number}
   */
  find(value) {
    return this.id[value];
  }

  /**
   * Are the 2 verticies connected?
   *
   * @param {*} idA
   * @param {*} idB
   * @returns {boolean}
   */
  connected(idA, idB) {
    return this.find(idA) === this.find(idB);
  }


  /**
   * Join the verticies if not alredy in the same set
   *
   * @param {*} valueA
   * @param {*} valueB
   */
  union(valueA, valueB) {
    if (this.connected(valueA, valueB)) { return; }
    
    const idA = this.find(valueA);
    const idB = this.find(valueB);
      for (let i = 0; i < this.id.length; i++) {
        if(this.id[i] == idA) {
          this.id[i] = idB;
        }
      }
    this.count--;
    
    console.log(`Union ${idA} + ${idB}`);
    console.log(this.id);
  }

}

/**
 * A list is an ordered sequence of data.
 * Each data item stored in a list is called an element.
 * In JavaScript, the elements of a list can be of any data type.
 * There is no predetermined number of elements that can be stored in a list,
 * though the practical limit will be the amount of memory
 * available to the program using the list.
 *
 * @export
 * @class List
 */
export class List {
    /**
     * Creates a new instance of List.
     * @constructor
     * @param {string[]} dataStore Array of elements in the list.
     * @param {number} pos Current position in list.
     * @param {number} listSize Number of elements in list.
     */
    public constructor (private dataStore: string[] = [], private pos: number = 0, private listSize: number = 0) {
        this.append = this.append.bind(this);
        this.find = this.find.bind(this);
        this.remove = this.remove.bind(this);
        this.length = this.length.bind(this);
        this.toString = this.toString.bind(this);
        this.insert = this.insert.bind(this);
        this.clean = this.clean.bind(this);
        this.contains = this.contains.bind(this);
        this.first = this.first.bind(this);
        this.end = this.end.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.currentPosition = this.currentPosition.bind(this);
        this.moveTo = this.moveTo.bind(this);
        this.getElement = this.getElement.bind(this);
    }

    /**
     * This function appends a new element
     * onto the list at the next available position,
     * which will be equal to the value of the listSize variable.
     *
     * @memberof List
     * @access public
     * @param {string} element new item to be added to the list
     * @returns void
     */
    public append (element: string) {
        this.dataStore[this.listSize++] = element;
    }

    /**
     * Iterates through dataStore looking for the specified element.
     *
     * @memberof List
     * @access public
     * @param {string} element element to look for
     * @return {number} the position where the element was found.
     * @return {number} If the element wasn’t found, returns `-1`
     */
    public find (element: string): number {
        const { length } = this.dataStore;
        for (let i = 0; i < length; ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Uses the position returned by **find()**
     * to splice the **dataStore** array at that place.
     *
     * @memberof List
     * @access public
     * @param {string} element to be remove
     * @returns `boolean` **true** if the item was removed
     */
    public remove (element: string): boolean {
        const foundAt = this.find(element);

        if (foundAt === -1) {
            return false;
        }

        this.dataStore.splice(foundAt, 1);
        --this.listSize;

        return true;
    }

    /**
     * @memberof List
     * @access public
     * @returns `number` of elements in the list
     */
    public length (): number {
        return this.listSize;
    }

    /**
     * allows us to view the elements of a list
     *
     * @memberof List
     * @access public
     * @returns `string[]` full list
     */
    public toString (): string[] {
        return this.dataStore;
    }

    /**
     * `insert()` uses the helper function `find()`
     * to determine the correct insertion position
     * for the `new element` by finding the `element`
     * specified in the `after` argument.
     *
     * @memberof List
     * @access public
     * @param {string} element to insert
     * @param {string} after an specific element
     * @returns `boolean` **true** if it was added
     */
    public insert (element: string, after: string): boolean {
        const insertPos = this.find(after);

        if (insertPos === -1) {
            return false;
        }

        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;

        return true;
    }

    /**
     * clear out the elements of a list and allow new elements to be entered.
     *
     * @memberof List
     * @access public
     * @returns `void`
     */
    public clean (): void {
        delete this.dataStore;
        this.dataStore = [];
        this.pos = 0;
        this.listSize = this.pos;
    }

    /**
     * clear out the elements of a list and allow new elements to be entered.
     *
     * @memberof List
     * @access public
     * @returns `true` if the list contains the element
     */
    public contains (element: string): boolean {
        const { length } = this.dataStore;
        for (let i = 0; length; ++i) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }

        return false;
    }

    /**
     * move to the first element of the list.
     *
     * @memberof List
     * @access public
     * @returns `void`
     */
    public first () {
        this.pos = 0;
    }

    /**
     * move to the last element of the list.
     *
     * @memberof List
     * @access public
     * @returns `void`
     */
    public end () {
        this.pos = this.listSize - 1;
    }

    /**
     *  move backward one element.
     *
     * @memberof List
     * @access public
     * @returns `void`
     */
    public prev () {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    /**
     *  move forward one element.
     *
     * @memberof List
     * @access public
     * @returns `void`
     */
    public next () {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    /**
     *  gets the index of the current element.
     *
     * @memberof List
     * @access public
     * @returns `index` of the current element
     */
    public currentPosition (): number {
        return this.pos;
    }

    /**
     *  moves to an specific element.
     *
     * @memberof List
     * @param {number} position of an specific element
     * @access public
     * @returns `void`
     */
    public moveTo (position: number) {
        this.pos = position;
    }

    /**
     * returns the element of the current position.
     *
     * @memberof List
     * @access public
     * @returns `string`
     */
    public getElement () {
        return this.dataStore[this.pos];
    }
}

const names: List = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

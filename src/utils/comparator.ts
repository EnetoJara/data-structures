export type CompareFunction = <A, B, C extends any>(a: A, b: B) => C;
export type StringOrNumber = string | number;
export type Index = 0 | 1 | -1;

export class Comparator {
    /**
     * Default comparison function. It just assumes that **a** and **b** are strings or numbers.
     *
     * @param {StringOrNumber} [a] - string or number.
     * @param {StringOrNumber} [b] - string or number.
     * @returns {Index}
     */
    public static defaultCompareFunction (a: StringOrNumber, b: StringOrNumber): Index {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    private compare: CompareFunction;

    /**
     * @param {CompareFunction} [compareFunction] - It may be custom compare function that, let's say may compare custom objects together.
     */
    public constructor (compareFunction: CompareFunction) {
        this.compare = compareFunction;
    }

    /**
     * Checks if two variables are equal.
     *
     * @param {StringOrNumber} [a] - String or Number.
     * @param {StringOrNumber} [b] - String or Number.
     * @return {boolean}
     */
    public equal<A, B> (a: A, b: B): boolean {
        return this.compare<A, B, StringOrNumber>(a, b) === 0;
    }

    /**
     * Checks if variable "a" is less than "b".
     *
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    public lessThan<A extends StringOrNumber, B extends StringOrNumber> (a: A, b: B): boolean {
        return this.compare<A, B, StringOrNumber>(a, b) < 0;
    }

    /**
     * Checks if variable "a" is greater than "b".
     *
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    public greaterThan<A extends StringOrNumber, B extends StringOrNumber> (a: A, b: B): boolean {
        return this.compare<A, B, StringOrNumber>(a, b) > 0;
    }

    /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    public lessThanOrEqual<A extends StringOrNumber, B extends StringOrNumber> (a: A, b: B): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Checks if variable *`a`* is greater than or equal to *`b`*.
     *
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    public greaterThanOrEqual<A extends StringOrNumber, B extends StringOrNumber> (a: A, b: B): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * Reverses the comparison order.
     */
    public reverse () {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}

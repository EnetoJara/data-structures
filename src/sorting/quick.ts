/**
 * The Quicksort algorithm is one of the fastest sorting algorithms
 * for large data sets. Quicksort is a divide-and-conquer algorithm
 * that recursively breaks a list of data into successively smaller
 * sublists consisting of the smaller elements and the larger elements.
 * The algorithm continues this process until all the data in the list is sorted.
 *
 * The algorithm divides the list into sublists by selecting one element
 * of the list as a pivot. Data is sorted around the pivot by moving elements
 * less than the pivot to the bottom of the list and elements that are greater
 * than the pivot to the top of the list.
 *
 * @function quickSort
 * @export
 * @param {number[]} arr `array` of unordered numbers.
 * @returns {number[]} `array` of ordered numbers.
 */
export function quickSort(arr: number[]): number[] {
    const { length } = arr;

    if (length === 0) {
        return [];
    }

    const left: number[] = [];
    const right: number[] = [];
    const pivot: number = arr[0];

    for (let i = 1; i < length; ++i) {
        const current = arr[i];

        if (current < pivot) {
            left.push(current);
        } else {
            right.push(current);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

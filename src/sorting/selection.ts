/**
 * This sort works by starting at the beginning of the array
 * and comparing the first element with the remaining elements.
 * After examining all the elements, the smallest element is placed
 * in the first position of the array, and the algorithm moves to the
 * second position. This process continues until the algorithm arrives at
 * the next to last position in the array, at which point all the data is sorted.
 *
 * @function selectionSort
 * @export
 * @param {number[]} arr unordered array of numbers
 */
export function selectionSort (arr: number[]): number[] {
    const { length } = arr;
    let aux: number;

    for (let i = 0; i <= length; ++i) {
        const l = length - 1;
        for (let j = i + 1; j <= l; ++j) {
            if (arr[j] < arr[i]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}

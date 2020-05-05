/**
 * The bubble sort gets its name because when data are sorted using
 * the algorithm, values float like a bubble from one end of `the array`
 * to the other. Assuming you are sorting a set
 * of numbers into ascending order, larger values
 * float to the right of the array and lower values float to the left.
 * This behavior is the result of the algorithm moving through
 * the array many times, comparing adjacent values, and swapping
 * them if the value to the left is greater than the value to the right.
 *
 * @function bubbleSort
 * @export
 * @param {number[]} arr array of numbers unordered
 * @returns {number[]} `array` of numbers ordered
 */
export function bubbleSort(arr: number[]): number[] {
    const { length } = arr;

    for (let i = 0; i < length; ++i) {
        for (let j = 0; j < length - 1 - i; ++j) {
            const current = arr[j];
            const next = arr[j + 1];

            if (current > next) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

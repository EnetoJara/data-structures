/**
 * The insertion sort is analogous to the way humans sort data numerically
 * or alphabetically. Let’s say I have asked each student in a class to turn
 * in an index card with his or her name, student ID, and a short biographical
 * sketch. The students return the cards in random order, but I want them
 * alphabetized so I can compare them to my class roster easily.
 *
 * @function insertionSort
 * @export
 * @param {number[]} arrayOfNumbers unordered array
 * @returns {number[]} `array` of sortered numbers
 */
export function insertionSort (arr: number[]): number[] {
    const l = arr.length;
    let j: number;
    let temp: number;

    for (let i = 1; i < l; i++) {
        j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}

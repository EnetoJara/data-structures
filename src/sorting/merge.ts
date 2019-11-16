/**
 * The Mergesort algorithm is so named because it works by merging
 * sorted sublists together to form a larger, completely sorted list.
 * In theory, this algorithm should be easy to implement. We need two
 * sorted subarrays and a third array into which we merge the two subarrays
 * by comparing data elements and inserting the smallest element value.
 * In practice, however, Mergesort has some problems because if we are trying
 * to sort a very large data set using the algorithm, the amount of space
 * we need to store the two merged subarrays can be quite large.
 * Since space is not such an issue in these days of inexpensive memory,
 * it is worth implementing Mergesort to see how it compares in efficiency to other sorting algorithms.
 *
 * @param {number[]} arr array of numbers
 * @requires mergeArrays
 * @returns {number[]} `array` of ordered numbers
 */
export function mergeSort (arr: number[]): number[] | undefined {
    if (arr.length < 2) {
        return;
    }

    let step: number = 1;
    let left: number;
    let right: number;

    const { length } = arr;
    while (step < length) {
        left = 0;
        right = step;
        while (right + step <= length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < length) {
            mergeArrays(arr, left, left + step, right, length);
        }
        step *= 2;
    }

    return arr;
}

/**
 * combines two arrays into one
 * @param arr array of numbers.
 * @param startLeft start position of the left array.
 * @param stopLeft stop position of the left array.
 * @param startRight start position of the right array.
 * @param stopRight stop position of the right array.
 */
function mergeArrays (arr: number[], startLeft: number, stopLeft: number, startRight: number, stopRight: number): void {
    const rightArr = new Array(stopRight - startRight + 1);
    const leftArr = new Array(stopLeft - startLeft + 1);

    let k: number = startRight;
    let auxIndex = rightArr.length - 1;

    for (let i = 0; i < auxIndex; ++i) {
        rightArr[i] = arr[k];
        ++k;
    }

    k = startLeft;
    auxIndex = leftArr.length - 1;
    for (let i = 0; i < auxIndex; ++i) {
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length - 1] = Infinity; // a sentinel value
    leftArr[leftArr.length - 1] = Infinity; // a sentinel value
    let m = 0;
    let n = 0;

    for (k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}

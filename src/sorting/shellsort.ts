/**
 *  This algorithm is based on the insertion sort but is a big
 * improvement over that basic sorting algorithm. Shellsort’s key concept
 * is that it compares distant elements first, rather than adjacent elements,
 * as is done in the insertion sort. Elements that are far out of place can
 * be put into place more efficiently using this scheme than by simply
 * comparing neighboring elements. As the algorithm loops through the data
 * set, the distance between each element decreases until, when at the end
 * of the data set, the algorithm is comparing elements that are adjacent.
 *
 * Shellsort works by defining a gap sequence that indicates how far apart
 * compared elements are when starting the sorting process. The gap sequence
 * can be defined dynamically, but for most practical applications, you can
 * predefine the gap sequence the algorithm will use. There are several
 * published gap sequences that produce different results. We are going
 * to use the sequence defined by Marcin Ciura in his paper on best increments
 * for average case of Shellsort `(“Best Increments for the Average Case
 * of Shell Sort”, 2001)`.
 * The gap sequence is: 701, 301, 132, 57, 23, 10, 4, 1.
 * However, before we write code for the average case, we are
 * going to examine how the algorithm works with a small data set.
 * @param {number[]} arr unsorted array
 * @returns {number[]} sorted array
 */
export function shellSort(arr: number[]): number[] {
    const gaps = [5, 3, 1];

    let aux: number;
    let currentGap: number;

    const { length } = arr;
    for (let g = 0; g < 3; ++g) {
        currentGap = gaps[g];

        for (let i = gaps[g]; i < length; ++i) {
            aux = arr[i];
            let j: number;
            for (j = i; j >= currentGap && arr[j - currentGap] > aux; j -= currentGap) {
                arr[j] = arr[j - currentGap];
            }
            arr[j] = aux;
        }
    }
    return arr;
}

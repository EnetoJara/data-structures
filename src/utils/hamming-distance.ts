/**
 * the Hamming distance between two strings of equal length
 * is the number of positions at which the corresponding symbols
 * are different. In other words, it measures the minimum number of
 * substitutions required to change one string into the other, or the minimum
 * number of errors that could have transformed one string into the other.
 * In a more general context, the Hamming distance is one of several string metrics
 * for measuring the edit distance between two sequences.
 *
 * @param {string} [str1] - First string param.
 * @param {string} [str2] - Second string param.
 *
 * @example
 * * "karolin" and "kathrin" is 3.
 * * "karolin" and "kerstin" is 3.
 * * 1011101 and 1001001 is 2.
 * * 2173896 and 2233796 is 3.
 *
 * @Link [wikipedia](https://en.wikipedia.org/wiki/Hamming_distance)
 */
export function hammingDistance (str1: string, str2: string):  number {
    let distance: number = 0;

    const aLength = str1.length;
    const bLength = str2.length;

    if (aLength !== bLength) {
        throw new Error("Strings must be same length")
    }

    for (let i = 0; i < aLength; i++) {
        if (str1[i] !== str2[i]) {
            ++distance;
        }
    }

    return distance;
}

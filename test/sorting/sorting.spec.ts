import { bubbleSort } from "../../src/sorting/bubble";
import { insertionSort } from "../../src/sorting/insertion";
import { mergeSort } from "../../src/sorting/merge";
import { quickSort } from "../../src/sorting/quick";
import { randomNumbers } from "../../src/sorting/random";
import { selectionSort } from "../../src/sorting/selection";
import { shellSort } from "../../src/sorting/shellsort";

const array100 = randomNumbers(100);
const array1000 = randomNumbers(1000);
const array10000 = randomNumbers(10000);
const array100000 = randomNumbers(100000);
const array1000000 = randomNumbers(1000000);

describe("sorting", () => {
    describe("basic", () => {
        describe("bubble sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];
            it("bubble sort 100 items", () => {
                const start = new Date().getTime();
                bubbleSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the bubble sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("bubble sort 1000 items", done => {
                const start = new Date().getTime();
                bubbleSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the bubble sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("bubble sort 10000 items", done => {
                const start = new Date().getTime();
                bubbleSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the bubble sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("bubble sort 100000 items", done => {
                const start = new Date().getTime();
                bubbleSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the bubble sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });

        describe("insertion sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];
            it("insertion sort 100 items", () => {
                const start = new Date().getTime();
                insertionSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the insertion sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("insertion sort 1000 items", done => {
                const start = new Date().getTime();
                insertionSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the insertion sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("insertion sort 10000 items", done => {
                const start = new Date().getTime();
                insertionSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the insertion sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("insertion sort 100000 items", done => {
                const start = new Date().getTime();
                insertionSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the insertion sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });

        describe("selection sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];
            it("selection sort 100 items", () => {
                const start = new Date().getTime();
                selectionSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the selection sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("selection sort 1000 items", done => {
                const start = new Date().getTime();
                selectionSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the selection sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("selection sort 10000 items", done => {
                const start = new Date().getTime();
                selectionSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the selection sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("selection sort 100000 items", done => {
                const start = new Date().getTime();
                selectionSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the selection sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });
    });

    describe("advance", () => {
        describe("shell sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];

            it("shell sort 100 items", () => {
                const start = new Date().getTime();
                shellSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the shell sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("shell sort 1000 items", done => {
                const start = new Date().getTime();
                shellSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the shell sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("shell sort 10000 items", done => {
                const start = new Date().getTime();
                shellSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the shell sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("shell sort 100000 items", done => {
                const start = new Date().getTime();
                shellSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the shell sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });

        describe("merge sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];
            const auxarray1000000 = [...array1000000];
            it("merge sort 100 items", () => {
                const start = new Date().getTime();
                mergeSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the merge sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("merge sort 1000 items", done => {
                const start = new Date().getTime();
                mergeSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the merge sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("merge sort 10000 items", done => {
                const start = new Date().getTime();
                mergeSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the merge sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("merge sort 100000 items", done => {
                const start = new Date().getTime();
                mergeSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the merge sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("merge sort 1000000 items", done => {
                const start = new Date().getTime();
                mergeSort(auxarray1000000);
                console.log(
                    "\t\tElapsed time for the merge sort on 1,000,000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });

        describe("quick sort", () => {
            const auxarray100 = [...array100];
            const auxarray1000 = [...array1000];
            const auxarray10000 = [...array10000];
            const auxarray100000 = [...array100000];
            const auxarray1000000 = [...array1000000];
            it("quick sort 100 items", () => {
                const start = new Date().getTime();
                quickSort(auxarray100);
                console.log(
                    "\t\tElapsed time for the quick sort on 100 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
            });

            it("quick sort 1000 items", done => {
                const start = new Date().getTime();
                quickSort(auxarray1000);
                console.log(
                    "\t\tElapsed time for the quick sort on 1000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("quick sort 10000 items", done => {
                const start = new Date().getTime();
                quickSort(auxarray10000);
                console.log(
                    "\t\tElapsed time for the quick sort on 10000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("quick sort 100000 items", done => {
                const start = new Date().getTime();
                quickSort(auxarray100000);
                console.log(
                    "\t\tElapsed time for the quick sort on 100000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });

            it("quick sort 1000000 items", done => {
                const start = new Date().getTime();
                quickSort(auxarray1000000);
                console.log(
                    "\t\tElapsed time for the quick sort on 1,000,000 elements is: " +
                        (new Date().getTime() - start) +
                        " milliseconds."
                );
                done();
            });
        });
    });
});

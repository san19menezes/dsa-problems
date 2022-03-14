//In bubble sort- we assume that after the first iteration, the array gets sorted from the end. And so the next iteration is reduced by 1 from the end.
function bubbleSort(array) {
    // Write your code here.
    let counter = 0;
    let swapped = false;
    while (!swapped) {
        swapped = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = false;
            }
        }
        counter++; // Since we would want to increment the counter in the successive iteration of the while lopp and not the for loop
    }
    return array;
}
function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

let array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(array));
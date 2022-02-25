//In insertion sort we assume that the array gets sorted from the beginning
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j--;
        }
    }
    return array;
}
function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6]));
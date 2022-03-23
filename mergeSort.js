// Solution 1:

//Time: O(n log n) | Space: O(n log n)
const mergeSort = (arr) => {
    //base condition
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, middle);
    let rightHalf = arr.slice(middle);
    return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}
const mergeSortedArrays = (leftHalf, rightHalf) => {
    let result = new Array(leftHalf.length + rightHalf.length);
    let i = j = k = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] <= rightHalf[j]) {
            result[k++] = leftHalf[i++]
        } else result[k++] = rightHalf[j++];
    }
    while (i < leftHalf.length)
        result[k++] = leftHalf[i++];

    while (j < rightHalf.length)
        result[k++] = rightHalf[j++];

    return result;
}
let array = [8, 5, 2, 9, 5, 6, 3];
console.log(mergeSort(array));
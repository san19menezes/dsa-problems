function binarySearch(array, target) {
    // Write your code here.	
    return binarySearchHelper(array, target, 0, array.length - 1)
}
function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const match = array[middle];
    if (target === match) return middle;
    else if (target < match) {
        return binarySearchHelper(array, target, left, middle - 1);
    }
    else {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}

let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let target = 21;
console.log(binarySearch(array, target));
function findThreeLargestNumbers(array) {
    // Write your code here.
    let largest = [null, null, null];
    for (let val of array) {
        updateLargest(largest, val);
    }
    return largest;
}
function updateLargest(largest, val) {
    if (largest[2] == null || val > largest[2]) {
        updateArr(largest, val, 2);
    }
    else if (largest[1] == null || val > largest[1]) {
        updateArr(largest, val, 1);
    }
    else if (largest[0] == null || val > largest[0]) {
        updateArr(largest, val, 0);
    }
}
function updateArr(arr, val, idx) { //loop till idx; if idx is 2 it will equate to i, and the preceeding elements will be left shifted
    for (let i = 0; i <= idx; i++) {
        if (i == idx) arr[i] = val;
        else arr[i] = arr[i + 1];
    }
}


console.log(findThreeLargestNumbers([1, 17, -7, -17, -27, 141, 18, 541, 8, 7, 7]));
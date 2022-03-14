var array = [3, 5, -4, 8, 11, 1, -1, 6];
var targetSum = 10;

function twoSum(arr, sum) {
  var left = 0,
    right = arr.length - 1,
    res = {};
  while (left < right) {
    if (arr[left] + arr[right] === sum) return [arr[left], arr[right]];
    if (arr[left] + arr[right] > sum) right--;
    else if (arr[left] + arr[right] < sum) left++;
  }
  return [];
}

console.log(twoSum(array, targetSum));

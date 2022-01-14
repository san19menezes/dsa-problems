var array = [-5, -4, -3, -2, -1];

function sortedSquare(arr) {
  let res = [],
    start = 0,
    end = array.length - 1;
  let p = array.length - 1;
  while (start <= end) {
    if (Math.abs(array[end]) > Math.abs(array[start])) {
      res[p] = array[end] * array[end];
      end--;
    } else if (Math.abs(array[end]) <= Math.abs(array[start])) {
      res[p] = array[start] * array[start];
      start++;
    }
    p--;
  }
  return res;
}

console.log(sortedSquare(array));

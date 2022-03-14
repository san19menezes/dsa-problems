var array = [5, 1, 22, 25, 6, -1, 8, 10];
var sequence = [1, 6, 10];

function validateSequence(arr, seq) {
  let arrP = 0,
    sArrP = 0;
  while (arrP < arr.length && sArrP < seq.length) {
    if (arr[arrP] === seq[sArrP]) sArrP++;
    else arrP++;
  }
  return sArrP === seq.length;
}

console.log(validateSequence(array, sequence));

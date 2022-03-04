//Using Array reverse
const strReverse = (str) => {
    let reverse = str.split('').reverse().join('');
    return reverse;
}


// Using recursion
const strReverseR = (str) => {
    if (str === '') return '';
    return strReverseR(str.substring(1)) + str.charAt(0);
}

//Using iteractive method
const strRevIterative = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

//Main
let str = 'hello hi';
console.log(strRevIterative(str));
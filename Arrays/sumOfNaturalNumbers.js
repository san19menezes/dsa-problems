const sumOfNaturalNumbers = (num) => {
    if (num <= 1) return num;
    return num + sumOfNaturalNumbers(num - 1);
}

console.log(sumOfNaturalNumbers(3))
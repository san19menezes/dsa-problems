const decimalToBinary = (decimal, result = '') => {
    if (decimal === 0) return result;
    result = decimal % 2 + result;
    return decimalToBinary(parseInt(decimal / 2), result); //use parseint to avoid decimals
}

console.log(decimalToBinary(233));
//Time: 2^n | Space: 
const fibbonaci = (num) => {
    if (num == 0 || num == 1) return num;
    else if (num == 2) return 1;
    else {
        return fibbonaci(num - 1) + fibbonaci(num - 2);
    }
}

//Time: O(n) | Space: O(n)
const fibbonaciM = (num, m = { 0: 0, 1: 1, 2: 1 }) => {
    if (num in m) {
        return m[num];
    }
    else {
        return fibbonaci(num - 1, m) + fibbonaci(num - 2, m);
    }
}

//Time: O(n) | Space: O(1)
const fibbonaciConst = (num) => {
    let output = [0, 1];
    let count = 2;
    let sum = 0;
    while (count <= num) {
        const [a, b] = output;
        sum = a + b;
        output = [b, sum];
        count++
    }
    return num == 0 ? 1 : output[1];
}


console.log(fibbonaciConst(12));
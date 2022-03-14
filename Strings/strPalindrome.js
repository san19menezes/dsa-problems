//Recursive
const strPalindromeR = (str) => {
    if (str.length == 0 || str.length == 1) return true;
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return strPalindrome(str.substring(1, str.length - 1));
    }
    return false;
}

//Iterative
const strPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
    }
    return true;
}

// let str = 'kayak';
let str = 'racecar';

console.log(strPalindrome(str));
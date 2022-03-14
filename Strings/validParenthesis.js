// EASY

function validParenthesis(string) {
    var myMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let arr = [];


    for (let char of string) {
        if (myMap[char]) {
            arr.push(myMap[char])
        } else {
            if (arr.pop() !== char) return false;
        }
    }
    return (!arr.length);
}

console.log(validParenthesis('{[()]}'));
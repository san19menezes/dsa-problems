//HARD

function longestValidParenthesis(str) {
    let result = 0;
    let arr = [-1];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(')
            arr.push(i);
        else if (arr.length !== 0) arr.pop();

        if (arr.length !== 0)
            result = Math.max(result, i - arr[arr.length - 1]);
        else arr.push(i)
    } return result;
}

//second method

// function longestValidParenthesis(str) {
//     let result = 0, open = 0, close = 0;
//     // Loop in forward direction 
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '(') {
//             open++;
//         } else if (str[i] == ')') {
//             close++;
//         }
//         if (close > open) {
//             close = 0;
//             open = 0;
//         }
//         else if (close == open) {
//             result = Math.max(result, open + close);
//         }
//     }
//     // Loop in backward direction 
//     for (let i = str.length; i >= 0; i--) {
//         if (str[i] == '(') {
//             open++;
//         } else if (str[i] == ')') {
//             close++;
//         }
//         if (open > close) {
//             close = 0;
//             open = 0;
//         }
//         else if (close == open) {
//             result = Math.max(result, open + close);
//         }
//     }

//     return result;
// }
console.log(longestValidParenthesis('()(())))()'));
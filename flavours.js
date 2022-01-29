function whatFlavors(cost, money) {
    // Write your code here
    let res = {};
    for (let i = 0; i < cost.length; i++) {
        let diff = money - cost[i];
        if (diff in res) {
            let op = i + 1
            console.log(res[diff] + ' ' + op);
            return;
        } else res[cost[i]] = i + 1;

    } return [];
}


let cost = [1, 4, 5, 3, 2];
let money = 4;
console.log(whatFlavors(cost, money));
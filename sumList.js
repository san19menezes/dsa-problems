class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Create a linked List
const a = new Node(2);
const b = new Node(7);
const c = new Node(4);
const d = new Node(3);

a.next = b;
b.next = c;
c.next = d;

// Iterative
//Time: O(n) | Space: O(1)
// const sumList = (head) => {
//     let sum = 0;
//     let current = head;
//     while (current !== null) {
//         sum += current.val;
//         current = current.next;
//     }
//     return sum;
// }

// Recursive
const sumListR = (head) => {
    if (head === null) return 0;
    return head.val + sumListR(head.next);
}


console.log(sumListR(a))
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Create a linked List
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

//Linked List Values in array - iterative

//Time: O(n) | Space: O(1)
// const linkedListValues = (head) => {
//     let current = head;
//     const values = [];
//     while (current !== null) {
//         values.push(current.val);
//         current = current.next;
//     }
//     return values;
// }

// console.log(linkedListValues(a));

//Time: O(n) | Space: O(1)
const linkedListValuesRecursive = (head) => {
    // since values is not a primitive type and will be passed by reference it can be accessed in recursive function. 
    // No need to create new array fpr every recursion
    const values = []; 
    fillvalues(head, values);
    return values;
}
const fillvalues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillvalues(head.next, values);
}

console.log(linkedListValuesRecursive(a));

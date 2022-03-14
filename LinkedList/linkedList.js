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

//Print all nodes in Linked List
//Time: O(n) | Space: O(n)
// const printLinkedList = (head) => {
//     let current = head;
//     while (current !== null) {
//         console.log(current.val);
//         current = current.next;
//     }
// }
// printLinkedList(a);

//Print all nodes in Linked List Recursively
const printAllNodesR = (head) => {
    if (head === null) return null;
    console.log(head.val);
    printAllNodesR(head.next);
}
printAllNodesR(a);
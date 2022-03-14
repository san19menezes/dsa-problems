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

//Iterative
//Time: O(n) | Space: O(1)

const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}

//Recursive
//Time: O(n) | Space: O(n)
const linkedListFindR = (head, target) => {
    if (head == null) return false;
    if (head.val == target) return true;
    return linkedListFindR(head.next, target);
}
var h = linkedListFindR(a, 'H');
console.log(h);
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
const nodeValueLL = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null) {
        if (count == index) return current.val;
        current = current.next;
        count++;
    }
    return null;//when index is greater than length of linked list
}

//Recursive
//Time: O(n) | Space: O(n)
const nodeValueLLR = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return nodeValueLLR(head.next, index - 1);
}

console.log(nodeValueLLR(a, 1));
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

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

//Recursive
//Time: O(n)| Space: O(n) 
const reverseLinkedListR = (head, prev = null) => {
    if (head === null) return prev;
    let next = head.next;
    head.next = prev;
    return reverseLinkedListR(next, head);
}

console.log(reverseLinkedListR(a));
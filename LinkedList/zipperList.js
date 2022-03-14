class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Create a linked List 1
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

//Create a linked List 2
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');

e.next = f;
//f.next = g;
//g.next = h;

//Iterative
//Time: O(n) | Space: O(1)
const zipperLL = (head1, head2) => {
    let current1 = head1.next; // since we always start the zipped LL with head1
    let current2 = head2;
    let tail = head1;
    let count = 0;
    while (current1 !== null && current2 !== null) {
        if (count % 2 == 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        count++;
        tail = tail.next;
    }
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    return head1;
}

//Recursive
//Time: O(n) | Space: O(n)
const zipperLLR = (head1, head2) => {
    if (head1 == null && head2 == null) return null;
    if (head1 == null) return head2;
    if (head2 == null) return head1;
    let next1 = head1.next;
    let next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLLR(next1, next2);
    return head1;
}

console.log(zipperLLR(a, e));
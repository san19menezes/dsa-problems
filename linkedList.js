class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printLinkedListR = (root) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedListR(head.next);
}

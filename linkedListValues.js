

linkedListValues = (head) => {
    let values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    } return values;
} 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;

    }
    append(value) {
        let node = new Node(value);
        if (this.size == 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    search(value) {
        if (this.size == 0) {
            return -1
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value == value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1 
    }
}
list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
console.log(list.search(30));
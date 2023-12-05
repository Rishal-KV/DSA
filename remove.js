class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null

    }
    nodeRemove(index) {
        if (index < 0 || index > this.size) {
            console.log("index out of bound");
            return
        } else {
            if (index == 0) {
                let deleteNode = this.head;
                this.head = deleteNode.next
                return deleteNode
            }
            let curr = this.head;
            let deleteNode;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            deleteNode = curr.next;
            curr.next = deleteNode.next
        }
        this.size--
    }
    append(value) {
        let node = new Node(value);
        if (this.size == 0) {

            this.head = node
            this.tail = node

        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    print() {
        let curr = this.head
        let listValue = "";
        while (curr) {
            listValue += ` ${curr.value}`;
            curr = curr.next
        }
        console.log(listValue);
    }
}

let list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.print()
list.nodeRemove(0);
list.print()
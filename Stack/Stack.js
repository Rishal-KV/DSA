class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
    }
    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node

    }
    delete() {
        this.top = this.top.next
    }
    print() {
        let curr = this.top;
        let val = ' ';
        while (curr) {
            val += curr.value + " "
            curr = curr.next;

        }
        console.log(val);

    }
    peak() {
        return this.top.value
    }
}
let stack = new Stack();
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
// let result = stack.peak()
// console.log(result);
stack.delete();
stack.print()
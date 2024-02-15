class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    append(value){
        let node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++
           
        }else{
            node.prev = this.tail;
            this.tail.next = node
            this.tail = node;
            this.size++;
        }


    }
    print(){
        let curr = this.head;
        let ele = " "
        while (curr) {
             ele += curr.value + " --> ";
             curr = curr.next
        }
        console.log(ele);
    }
}
let list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print()

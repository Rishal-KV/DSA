class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node
            this.size++
            return
        }
        this.tail.next = node
        this.tail = node
        this.size++;
    }

    prepend(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
            return
        }
        node.next = this.head;
        this.head = node;
        this.size++
    }

    delete(value) {
        if (this.head.value == value) {
            this.head = this.head.next;
            return
        }
        let curr = this.head;
        while (curr.next && curr.next.value !== value) {
            curr = curr.next
        }

        curr.next = curr.next.next;
        this.size--
    }


    //insert at any position -- o(N)
    insert(index, value) {
        if (index < 0 || index > this.size++) {
            console.log("invalid index");
            return
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            
            }
            node.next = prev.next;
            prev.next = node;
        }
    }
    deleteByIndex(index){
        if (index == 0) {
            this.head = this.head.next
            this.size--
        }else{
            let curr = this.head 
            for(let i = 0; i < index - 1; i++){
                 curr = curr.next
            }
            curr.next = curr.next.next;
            this.size--;
        }

    }

    reverse(){
        let prev = null;
        let curr = this.head;
        let nextNode = null;
        while (curr!==null) {
            nextNode = curr.next
            curr.next = prev;
            prev = curr;
            curr = nextNode
        }
        this.head = prev
    }
    reverse(){
        const reverseRecursive = (curr, prev) =>{
            if (curr === null) {
                this.head = prev;
                return 
            }
            let nextNode = curr.next;
            curr.next = prev;
            reverseRecursive(nextNode, curr)
        }
        reverseRecursive(this.head, null)
    }
    search(pos){
        console.log(pos);
        if (pos < 0 || pos > this.size) {
            return "invalid index!!"
        }
        let curr = this.head;
        for(let i = 1; i < pos ; i++){
            curr = curr.next
        }
        return curr;
    }
    print() {
        let curr = this.head;
        let ele = " "
        while (curr) {
            ele += curr.value + "-->"
            curr = curr.next
        }
        console.log(ele);

    }
}

// let list = new LinkedList();
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(2);
// list.insert(2, 43)
// list.delete(43)
// list.deleteByIndex(1)
// list.reverse()
// list.print()

module.exports = {LinkedList}
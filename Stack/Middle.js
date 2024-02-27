class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}

class Stack{
    constructor(){
        this.head = null;
        this.count = 0;
        this.mid = null;
    
    }

    push(value) {
        let newNode = new Node(value);
        if (this.count === 0) {
            this.head = newNode;
            this.mid = newNode;
        } else {
            this.head.next = newNode
            newNode.prev = this.head;
            this.head = newNode;
    
            if (this.count % 2 !== 0) {
                this.mid = this.mid.next;
            }
        }
        this.count += 1;
    }
    deleteMiddle(){
        if (this.count == 0) {
        console.log("stack is empty");
        return
        }
        this.count--
        let deleted = this.mid;
        this.mid.prev.next = this.mid.next

        
        this.mid.next.prev = this.mid.prev
        if (this.count % 2 !=0) {
            this.mid = this.mid.prev;
               
        
        }else{
            this.mid = this.mid.next
        }
        return deleted.value

    }

    getMiddle(){
        return this.mid.value
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.deleteMiddle()
console.log(stack.getMiddle())

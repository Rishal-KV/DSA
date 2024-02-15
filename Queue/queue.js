class Node {
    constructor(value) {
        this.value = value;
        this.next = null
        
    }

}

class Queue {
    constructor() {
        this.first = null;
        this.last = 0
        this.length = 0
    }
    enqueue(value) {
        let node = new Node(value)
        if (this.length == 0) {
            this.first = node;
            this.last = node;
            
         
            this.length++;
            return
        }
       this.last.next = node;
       this.last = node;

       
    }
   dequeue(){
      this.first = this.first.next
   }
    peek(){
        console.log(this.first.value);
        return this.first.value
    }
    print(){
        let curr = this.first;
        let val = ' ';
        while(curr){
         val += curr.value + " ";
         curr = curr.next
        }
        console.log(val);
    }
}
let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30)
// myQueue.print();
myQueue.peek()
myQueue.dequeue();
myQueue.print()
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.maxStack = []
    }
    enqueue(value){
        let node = new Node(value)

       this.rear == null ?  this.rear = node : this.rear.next = node
        this.rear = node;
      if(this.maxStack.length > 0){
          let max = this.maxStack[this.maxStack.length - 1];
            this.maxStack.push(max > value ? max : value)
      }else{
        this.maxStack.push(value)
      }
    }
    pop(){
        return this.maxStack[this.maxStack.length - 1]
    }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.pop())


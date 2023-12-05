const { linkedList } = require('./linkedList');


class linkedListQueue{
    constructor(){
        this.list = new linkedList()
    }

    endque(value){
        this.list.toFront(value)
    }
    print(){
        this.list.print()
    }

    peek (){
        return this.list.head.value
    }

    dequeue(){
        this.list.removeFromFront();
    }
}

let queue = new linkedListQueue();
queue.endque(10);
queue.endque(20);
queue.endque(30);
queue.print()
queue.dequeue();
queue.print
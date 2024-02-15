class myQueue {
    constructor() {
        this.array = []
    }
    push(value) {
        this.array.push(value)
    }
    pop() {
        this.array.pop();

    }
    peek() {
        console.log(this.array[this.array.length - 1]);
        return this.array[this.array.length - 1]
    }
}
let queue = new myQueue();
queue.push(10);
queue.push(10);
queue.push(10);
queue.peek();
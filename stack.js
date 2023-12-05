class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(ele){
        this.items[this.count] = ele;
        console.log(`${ele} added to ${this.count}`);
        this.count++

    }
    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1];
        console.log(deleteItem)
        this.count --
    }
}
let stack = new Stack();
stack.push(100)
stack.push(1200)
stack.push(300)
stack.pop()
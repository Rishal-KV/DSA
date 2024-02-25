class Stack{
 constructor(){
    this.stack = [];
    this.maxStack = []
 }
 push(ele){
    this.stack.push(ele);
    if(this.maxStack.length > 0){
      let max = this.maxStack[this.maxStack.length - 1];
      this.maxStack.push(ele > max ? ele : max)
    }else{
        this.maxStack.push(ele)
    }
 }
 pop(){
    return this.maxStack[this.maxStack.length - 1]
 }
}

let stack = new Stack();
stack.push(10)
stack.push(100)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.pop());
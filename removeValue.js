class Node{
    constructor(value){
        this.value = value;
        this.size = 0;
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.size = 0;
        
    }
    prepend(value){
  let node  = new Node(value)
  if (this.size == 0) {
       this.head = node
  }else{
      node.next = this.head;
      this.head = node;
  }
  this.size++;
    }
    print(){
        if (this.size == 0) {
            return null
        }else{
            let curr  = this.head;
         let listValue = ""
            while (curr) {
                listValue += ` ${curr.value}`;
                curr  = curr.next;
            }
            console.log(listValue)
        }
    }
    removeValue(value){
        if (this.head.value == value) {
             this.head = this.head.next
              this.size--
              return
        }else{
            let curr = this.head
            while(curr.next && curr.next.value != value){
                curr = curr.next;
            }
            if (curr.next) {
                let removeValue = curr.next;
                curr.next = removeValue.next;
                this.size--
                return
               
            }
            return null
        }
    }
}

let list = new linkedList();
list.prepend(10)
list.prepend(20);
list.prepend(30)
// list.print()

list.print()

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    append(value){
     let node = new Node(value);
     if (this.size === 0) {
         this.head = node
         this.tail = node
     }else{
           this.tail.next = node
            this.tail = node

     }
     this.size++;
    }
 print(){
  if (this.size == 0) {
      return null
  }else{
    let temp = this.head;
    let item = " "
    
      while(temp != null){
     item += temp.value + " --> ";
        temp = temp.next
        
      }
      console.log(item);
        
    
  }
 }
}

let list = new linkedList();
list.append(20)
list.append(30)
list.append(20)
list.append(30)
list.print()


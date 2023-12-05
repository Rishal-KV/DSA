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
        this.tail = null
    }
    insertToFirst(value){
        let node = new Node(value)
        if (this.size==0) {
            this.head = node
            this.head = node
            
        }else{
            node.next = this.head;
            this.head = node
        }
    this.size++
       
    }
    insertToLast(value){
        let node = new Node(value)
        if (this.size == 0) {
          this.head = node;
          this.tail = node

        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }

    insert(value,index){
        let node = new Node(value);
        if (index == 0) {
            this.insertToFirst(value)
            return
            
        }
        if (index === this.size) {
             this.insertToLast(value)
             return
        }
     
        let temp = this.head;
        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }
        node.next = temp.next
        temp.next = node
        this.size++
    }
    print(){
        let temp = this.head;
       while(temp!= null){
        console.log(temp.value);
        temp = temp.next
       }
       console.log("end");
    }
}
let list = new linkedList();

list.insertToLast(12);
list.insertToLast(10);
list.insertToLast(11);
list.insert(1,2)
list.print()

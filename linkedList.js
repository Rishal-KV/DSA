class Node {
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


    isEmpty(){
        return this.size  === 0
    }
    toFront(value){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
             node.next = this.head
            this.head = node


        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("is empty");
        }else{
            let curr = this.head
            let listVal = "";
            while (curr) {
                listVal += `${curr.value}`;
                curr = curr.next
            }
            console.log(listVal);
        }
        
    }
}
let list = new linkedList()
list.toFront(10)
list.print()
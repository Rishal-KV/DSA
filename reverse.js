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
        let node = new Node(value)
        if (this.size == 0) {
            this.head = node
            this.tail = node
            this.size++
            return
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
    display(){
        let temp = this.head;
        let listItem = ""
        while(temp != null){
           listItem += temp.value + " -> ";
           temp = temp.next
        }
        console.log(listItem);
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while (curr) {
         
           let  next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next

        }
        this.head = prev
    }
}
let list = new linkedList();
list.append(19)
list.append(20)
list.append(10)

list.reverse()
list.display()
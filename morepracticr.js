class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(value) {
        let node = new Node(value)
        if (this.size == 0) {
            this.head = node
            this.tail = node
            this.size++
            return
        } else {
            this.tail.next = node;
            this.tail = node

        }
        this.size++
    }

    search(postion) {
       let curr = this.head;
       for(let i = 0; i < this.size - postion; i++){
        curr = curr.next
       }

       return curr.value
    }
    searchMiddle(){
        let curr = this.head;
        for(let i = 1; i < this.size / 2 ; i++){
            curr = curr.next
        }
        return curr.value
    }

    reverse(){
        let prev = null;
        let curr = this.head
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev
    }
    print(){
        let curr = this.head
        let value = " "
        while(curr){
          value += curr.value + " "
          curr = curr.next
        }
        console.log(value);
    }

    

}

let list = new linkedList();
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(50)
// console.log(list.search(1));
list.reverse();
list.print()

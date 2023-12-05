class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
      
        }
        addToFront(value){
            let node  = new Node(value)
             if(this.size==0){
            this.head = node
            this.tail = node
            this.size++;
            return
             }else{
                node.next = this.head
                node.prev = null
                this.head.prev = node
                this.head = node

             }
             this.size++;
        }
        addtoBack(value){
                  let node = new Node(value)
            if (this.size == 0) {
                 this.head = node;
                 this.head.prev = null
                 this.tail = node
                 this.size++;
                 return 
            }else{
                this.tail.next = node
              
                node.prev = this.tail
                this.tail = node
            }
            this.size++
        }
        print(){
            if (this.size == 0 ) {
                console.log("list is empty");
                return
            }
            let temp = this.tail
          
            let listItem = ""
            while(temp!= null){
             listItem +=  temp.value + " -> "  
                temp = temp.next;

            }
            console.log(listItem);
        }
        reverse(){
            let curr = this.head;
            let prev = null
            while (curr) {
                let next = curr.next;
                curr.prev = next.next
            }
        }
        delete(index){
           let temp = this.head;
           for(let i = 0; i < index - 1; i++){
            temp = temp.next
           }
          
           temp.next = temp.next.next
           this.size--

    
           this.size--
        }
        search(value){
            let temp = this.head;
            let i = 0
            while(temp!= null){

                if (temp.value == value) {
                      return i;
                }
                i++;
                temp = temp.next
            }
        }
}
let list = new linkedList();
list.addtoBack(10);
list.addtoBack(20);
list.addtoBack(30);

list.print()




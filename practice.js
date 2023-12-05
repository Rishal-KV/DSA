class Node{
    constructor(value){
        this.value =  value
        this.next = null;
    }

}class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
        this.tail = null
    }


    prepend(value){
        let node = new Node(value)
        if (this.size == 0) {
            this.head = node;
            this.tail = node
            this.size++
            return
        }else{

            node.next = this.head;
            this.head = node
            
        }
        this.size++
    }

    merge(list){
        this.tail.next = list.head;
        this.tail = list.tail;
        this.size += list.size
    

    }

    delete(value){
        let curr = this.head;
        while(curr.next && curr.next.value != value){
            curr = curr.next
        }
        if (curr.next) {
            curr.next = curr.next.next
            this.size --
        }
    }

    insert(value,index){
        let curr = this.head;
        let node = new Node(value)
        for(let i = 0; i < index - 1 ; i ++ ){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node;
       
        this.size++
    }

    reverse(){
        let curr = this.head;
        let prev = null
        while (curr.next) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr  = next
            
        } 
         this.head = prev 
    }
    deleteDuplicate(){
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.value == curr.next.value) {
                 curr.next = curr.next.next
                 this.size--
            }else{
                curr = curr.next
            }
        }

    }
    print(){ 
        let curr = this.head;
        let item = ""
        while(curr!= null){
            item += curr.value + " "
            curr = curr.next
            
        }
        console.log(item);
    }
  
}






let list1 = new linkedList();
list1.prepend(10)
list1.prepend(5)
list1.prepend(5)
list1.prepend(30)
let list2 = new linkedList();
list2.prepend(1)
list2.prepend(2)
list2.prepend(3)
list2.prepend(4)
list1.merge(list2)
list1.print()


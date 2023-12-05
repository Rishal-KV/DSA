class Node {
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    append(value){
        let node = new Node(value);
        if (this.size == 0) {
            this.head = node;
            this.tail = node;

        }else{
            this.tail.next = node;
            this.tail =  node
        }
        this.size ++
    }
   
    sum(){
        let curr = this.head;
        let sum =  0
        let ele = " "
        while(curr){
            if ( isPrime(curr.value) == 0) {
               ele += curr.value + " "
            }
            curr = curr.next
        }
        console.log(ele);
    }
}
let list = new linkedList();
list.append(1)
list.append(4)
list.append(6)
list.append(5)
list.append(10)
list.sum()

function isPrime(value){
    let flag = 0;
    for(let i = 2; i <= value / 2; i++){
        if (value % i == 0) {
            flag = 1;
            break
        }else{
            flag = 0
        }
    }
    return flag
}
class Node{
	constructor(value){
		this.value = value;
		this.next = null
		this.prev = null
	}
	
}

class linkedList{
	constructor(){
		this.head = null;
		this.tail = null
		this.size = 0
	
	}
	append(value){
		let node = new Node(value)
       if (this.size == 0) {
		 this.head = node;
		 this.tail = node
	
		 this.size++;
		 return
	   }else{
		this.tail.next = node;
		node.prev = this.tail
		this.tail = node
	
	   }
	   this.size++;
	}
	prepend(value){
		let node = new Node(value)
		if (this.size == 0) {
			this.head = node
			this.tail = node
		
			this.size++;
			return
		}else{
			node.next = this.head;
			this.head.prev = node
			this.head = node
		}
		this.size++
	}
	delete(index){
		let curr = this.head
		for(let i = 0; i < index - 1; i++){
          curr = curr.next
		}
		curr.next = curr.next.next
		this.size--
	}
	deleteByValue(value){
		 let curr = this.head
		 while(curr.next && curr.next.value != value){
			curr = curr.next
		 }
		 if (curr.next) {
			curr.next = curr.next.next
			this.size--
		 }
	}
	search(value){
		let  i = 0
		let curr = this.head
          while(curr){
			if (curr.value == value) {
				return i
			}
			curr = curr.next
			i++
		  }
	}
	print(){
		let curr = this.head
		let item = "";
		while (curr) {
			item += curr.value + " ";
			curr = curr.next
		}
		console.log(item);
	}
	reverse(){
		let prev = null;
		let curr = this.head;
		while(curr){
			let next = curr.next;
			curr.next = prev;
			prev = curr
			curr = next;
			
		}
		this.head = prev
	}
}
let list = new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.reverse()
list.print()



function x(arr, value, start = 0, end = arr.length - 1) {
    let middle = Math.floor((start + end) / 2);

    if (start > end) {
        return -1;
    }

    if (value < arr[middle]) {
        return x(arr, value, start, middle - 1);
    } else if (value > arr[middle]) {
        return x(arr, value, middle + 1, end);
    }else{
		return middle
	}
}

console.log(x([1, 2, 3, 4, 5], 10));

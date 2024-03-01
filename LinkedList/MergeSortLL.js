class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0
    }
    append(value){
        let node = new Node(value);
        if (this.count == 0) {
            this.head = node;
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.count++
    }
}

let ll = new LL();
ll.append(2);
ll.append(-100);
ll.append(50);
ll.append(5);
function mid(head){
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
          slow = slow.next;
          fast = fast.next.next
  }
  return slow
}

function mergeSort(head){
    if(!head || !head.next){
        return head
    }

    let midd = mid(head);
    let right = midd.next;
    midd.next = null;

    let leftSorted = mergeSort(head);
    let RightSorted = mergeSort(right);
    
    return sort(leftSorted,RightSorted)
}

function sort(left, right){
    if(!right) return left;
    if(!left) return right;
    let result
    if (left.value < right.value) {
        result = left
        result.next = sort(left.next, right)
    }else{
        result = right
        result.next = sort(left, right.next)
    }
    return result
}
function print(curr){
    let ele = ''
    if (!curr) {
        return ''
    }

    return ele += curr.value + " " + print(curr.next);

}
ll.head = mergeSort(ll.head)
console.log(print(ll.head))
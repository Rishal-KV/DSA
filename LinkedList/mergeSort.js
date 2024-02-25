let LL = new require('../LinkedList/LinkedList')

let LinkedList = new LL.LinkedList();
LinkedList.append(10)
LinkedList.append(2)
LinkedList.append(1)
LinkedList.append(3)


// console.log(JSON.stringify(LinkedList))
 function middle(list){
    let fast = list.head;
    let slow = list.head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value
 }
console.log(middle(LinkedList))
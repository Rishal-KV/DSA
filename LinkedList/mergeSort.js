let LL = new require('../LinkedList/LinkedList')

let LinkedList = new LL.LinkedList();
LinkedList.append(10)
LinkedList.append(2)
LinkedList.append(1)
LinkedList.append(3)

getMiddle(LinkedList.head);
// console.log(JSON.stringify(LinkedList))
function getMiddle(headNode){
    let fast = headNode.next;
    let slow = headNode;
    while (fast != null) {
        fast = fast.next;
        if (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }
    }
    return slow;
}

function merge(head){
    if(!head || !head.next) {
        return head;
    }
    let mid  = getMiddle(head);
    let midRight = mid.next;
    mid.next = null;
    let left = merge(head);
    let right = merge(midRight);
    // console.log(JSON.stringify(left))
    // console.log(JSON.stringify(right))
    return sort(left, right)
};
merge(LinkedList.head)
function sort(left, right){
    let result;
    if(!left) return right;
    if(!right) return left;
   
    if(left.value <= right.value){
      result = left;
      
      result.next = sort(left.next, right);
    }else{
      result = right;
      console.log(JSON.stringify(result))
      result.next = sort(left, right.next);
    }
    return result;
  }
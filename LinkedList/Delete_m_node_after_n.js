let ll = require('../LinkedList/LinkedList');

let LinkedList = new ll.LinkedList();
 



LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);
LinkedList.append(4);
LinkedList.append(5);
LinkedList.append(6);
LinkedList.append(7);
LinkedList.append(8);
LinkedList.print()
function deleteMnode(head, n = 3, m = 2){
    
    
    let m_th = LinkedList.search(m)
    console.log(m_th);
    for(let i = 0 ; i < n; i++){
        m_th.next = m_th.next.next
    }

 }
 deleteMnode(LinkedList.head)
 LinkedList.print()
 
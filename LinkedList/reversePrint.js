let ll = require('../LinkedList/LinkedList');
let LinkedList = new ll.LinkedList();
LinkedList.append(10);
LinkedList.append(10)
LinkedList.append(10)
LinkedList.append(40)
function print(curr){
    let ele = ''
   if (!curr) {
       return ''
   }

   return  print(curr.next) + ele + curr.value + " " 
}
console.log(print(LinkedList.head))

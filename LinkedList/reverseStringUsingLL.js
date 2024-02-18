let ll = require('../LinkedList/LinkedList');

let LinkedList = new ll.LinkedList();
let str = "hello";
for(let i = 0; i < str.length; i++){
    LinkedList.prepend(str[i])
}
LinkedList.print()
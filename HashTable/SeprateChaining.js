class Node{
    constructor(key, value){
        this.key = key,
        this.value = value
        this.next = null
    }
}

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }
    hash(key){
        let hashValue = ''
        for (let index = 0; index < key.length; index++) {
               
             hashValue+=key.charCodeAt(index)
        }
        return Number(hashValue) % this.size;
    }
    insert(key, value){
        let node = new Node(key, value)
        let index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = node
        }else{
           node.next = this.table[index];
           this.table[index] = node    
            }
    }

    get(key){
        let index = this.hash(key);
        let curr = this.table[index];
        while (curr) {
            if (curr.key == key) {
                return curr.value
            }

            curr = curr.next
        }
        return undefined
    }
}

let table = new HashTable(10);
table.insert("name", "rishal");
table.insert("mane", "rishal");
console.log(table.get('mane'));
 
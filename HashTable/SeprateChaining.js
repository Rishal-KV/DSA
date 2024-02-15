class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(limit) {
        this.array = new Array(limit);
        this.size = limit
    }

    hash(key) {
        let hashValue = 0
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i)
        }
        return hashValue % this.size;
    }

    set(key, value) {
        let newNode = new Node(key, value)
        let index = this.hash(key);
        if (!this.array[index]) {
            this.array[index] = newNode
        } else {
            let curr = this.array[index]
            if (curr.key == key) {
                curr.value = value
                return
            }
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode
        }

    }

    search(key) {
        let index = this.hash(key);
        let curr = this.array[index];
        while (curr) {
            if (curr.key == key) {
                return curr.value
            }
            curr = curr.next
        }
        return null;
    }

}
let myTable = new HashTable(10);
myTable.set("fyguufyv", "rishal");
myTable.set("fyguufvy", "rishal");
myTable.set("name", "rishal");
myTable.set("eman", "hh");

console.log(myTable.array);
console.log(myTable.search("name"))
console.log(myTable.search("eman"))

 



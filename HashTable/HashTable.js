class HashTable {
    constructor(limit){
        this.array = new Array(limit);
        this.size = limit;
    }
    hash(key){
        let hashValue = 0;
        for(let i = 0; i < key.length; i++){
            hashValue += key.charAt(i)
        }
        return hashValue % this.size
    }

    set(key, value){
        let index = this.hash(key);
        if (!this.array[index]) {
            this.array[index] = [];
        }
        this.array[index].push({key, value})
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.array[index];
        for(let entry of bucket){
            if (entry.key == key) {
                return entry.value
            }
        }
        return "no value"
    }
}

let table = new HashTable(10);
table.set("name", "Rishal")
console.log(table.get("name"))

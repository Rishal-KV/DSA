class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false
    }

}

class TRIE{
    constructor(){
        this.root = new TrieNode();

    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true

    }

    search(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    preffix(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}
let trie = new TRIE();
trie.insert("rishal");
trie.insert("rinku");
console.log(trie.search("rishal"))
console.log(trie.preffix("ri"))
class Node{
    constructor(val){
        this.val = val;
        this.left = null
        this.right = null;
        
    }
}

function Serialize(root){
    if (!root) {
        return "#"
    }
    let SerializedString = root.val + ","
    SerializedString += Serialize(root.left) + "," + Serialize(root.right)
    return SerializedString

}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15)
console.log(Serialize(root))
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MyTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let node = new Node(value)
        if (this.root == null) {
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if (node.value < root.value) {
            if (!root.left ) {
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if (!root.right) {
                root.right = node;
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
        preOrder(root){
            if (root) {
                console.log(root.value);
                this.preOrder(root.left);
                this.preOrder(root.right)
            }
        }

levelOrder(){
    let queue = [];
    queue.push(this.root)
    while (queue.length) {
        let ele = queue.shift();
        console.log(ele.value);
        if (ele.left) {
            queue.push(ele.left)
        }
        if (ele.right) {
            queue.push(ele.right)
        }
    }
}

}

let tree = new MyTree();
tree.insert(10);
tree.insert(5);
tree.insert(4);
// tree.preOrder(tree.root)
tree.levelOrder()
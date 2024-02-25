class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value
    }
}

class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {

        return this.root === null
    }

    insert(value) {
        let node = new Node(value)
        if (this.isEmpty()) {

            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    preOrder(root){
        if (root) {
           console.log(root.value);
           this.preOrder(root.left);
           this.preOrder(root.right);
        }
    }

    indOrder(root){
        if (root) {
            this.indOrder(root.left);
            console.log(root.value);
            this.indOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value); 
        }
       
    }

    delete(value){
      this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if (!root) {
             return  root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if (!root.right){
               return root.left
            }
            root.value = this.min(root.right)
            this.right = this.deleteNode(root.right, root.value)
        }

       return root
     
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
      
        
    }
 
}

let bst = new BST();
bst.insert(30);
bst.insert(20);
bst.insert(15);
bst.insert(21);
bst.insert(50)
// bst.preOrder(bst.root)
// bst.indOrder(bst.root)
// bst.postOrder(bst.root);
// bst.delete(50)
// bst.indOrder(bst.root);
module.exports = {
    BST
}





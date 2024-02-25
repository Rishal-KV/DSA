let BST =   require('../Tree/BST');

let bst = new BST.BST();
bst.insert(30);
bst.insert(15);
bst.insert(40);
bst.insert(10);

function isBst(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
    if (!root) {
        return true
    }

    if (root.value <= min || root.value >= max) {
        return false
    }

    return (
        isBst(root.left, min, root.value)&&
        isBst(root.right, root.value, max)
    )
}

console.log(isBst())
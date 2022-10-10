class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result=[];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    let result=[];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result=[];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

class BST extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let compareToTree = this.root;
      const findHome = (compareToTree) => {
        if (node.value < compareToTree.value && compareToTree.left)
          findHome(compareToTree.left);
        else if(node.value < compareToTree.value)
          compareToTree.left = node;
        else if(node.value > compareToTree.value && compareToTree.right)
          findHome(compareToTree.right);
        else if(node.value > compareToTree.value)
          compareToTree.right = node;
      };
      return findHome(compareToTree);
    }
  }

  contains(value) {
    let isTrue=false;
    const traverse = (node) => {
      if(value===node.value){
        isTrue=true;
        return isTrue;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return isTrue;
  }
}

module.exports={Node,BinaryTree,BST};

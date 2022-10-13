class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode{
  constructor(value,k){
    this.value=value;
    this.k=k;
    this.children=[];
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
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
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  findMax() {
    let maxValue = null;
    const isMax = (node) => {
      if (node.value > maxValue) maxValue = node.value;
      if (node.left) isMax(node.left);
      if (node.right) isMax(node.right);
    };
    isMax(this.root);
    return maxValue;
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
        else if (node.value < compareToTree.value)
          compareToTree.left = node;
        else if (node.value > compareToTree.value && compareToTree.right)
          findHome(compareToTree.right);
        else if (node.value > compareToTree.value)
          compareToTree.right = node;
      };
      return findHome(compareToTree);
    }
  }

  contains(value) {
    let isTrue = false;
    const traverse = (node) => {
      if (value === node.value) {
        isTrue = true;
        return isTrue;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return isTrue;
  }
}

function traverseKTree(ktree, callback) {
  let newKtree = JSON.parse(JSON.stringify(ktree));
  // newKtree.root.value = callback(ktree.root.value);
  const traverse = (node) => {
    for (let i = 0; i < node.children.length; i++) {
      node.value = callback(node.value);
      if (node.children[i]) {
        traverse(node.children[i]);
      }
    }
  };
  traverse(newKtree.root);
  return newKtree;
}

function fizzBuzz(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    x = 'fizzbuzz';
  } else if (x % 5 === 0) {
    x = 'buzz';
  } else if (x % 3 === 0) {
    x = 'fizz';
  } else {
    x = `${x}`;
  }
  return x;
}
function fizzBuzzTree(tree) {
  return traverseKTree(tree, fizzBuzz);
}
function logTree(x) {
  console.log(x);
}
const newKTree = new BinaryTree();
// console.log(newKTree);
// console.log(newKTree.root);
newKTree.root = new KaryNode(2, 3);
newKTree.root.children.push(new KaryNode(5, 3));
newKTree.root.children.push(new KaryNode(3, 3));
newKTree.root.children.push(new KaryNode(15, 3));
newKTree.root.children[0].children.push(new KaryNode(11, 3));
newKTree.root.children[0].children.push(new KaryNode(12, 3));
newKTree.root.children[0].children.push(new KaryNode(10, 3));
newKTree.root.children[1].children.push(new KaryNode(17, 3));
// console.log(newKTree);
// console.log(fizzBuzzTree(newKTree))
let fizzTree = fizzBuzzTree(newKTree);
console.log('fizztree:',JSON.stringify(fizzTree));
traverseKTree(fizzTree, logTree);

module.exports = { Node, BinaryTree, BST };

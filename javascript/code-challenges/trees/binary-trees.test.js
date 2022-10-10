'use strict';

const { Node, BinaryTree, BST } = require('./binary-trees');

describe('Binary Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    expect(new BinaryTree()).toBeInstanceOf(BinaryTree);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    expect(new BinaryTree).toHaveProperty('root');
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let bsTree = new BST();
    bsTree.add(10);
    bsTree.add(5);
    bsTree.add(15);
    expect(bsTree.root.left.value).toBe(5);
    expect(bsTree.root.right.value).toBe(15);
  });

  it('Can successfully return a collection from pre/in/post order traversals', () => {
    let tree = new BinaryTree();
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right.left = new Node('F');
    expect(tree.preOrder()).toEqual(expect.arrayContaining(['A','B','D','E','C','F']));
    expect(tree.inOrder()).toEqual(expect.arrayContaining(['D','B','E','A','F','C']));
    expect(tree.postOrder()).toEqual(expect.arrayContaining(['D', 'E', 'B', 'F', 'C', 'A' ]));
  });

  it('Can successfully return a max value from a binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(42);
    tree.root.right = new Node(12);
    tree.root.left.left = new Node(35);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(9);
    tree.root.right.left = new Node(514);
    expect(tree.findMax()).toBe(514);
  });

  it('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    let bsTree = new BST();
    bsTree.add(10);
    bsTree.add(5);
    bsTree.add(15);
    bsTree.add(8);
    bsTree.add(25);
    bsTree.add(2);
    expect(bsTree.contains(8)).toBe(true);
    expect(bsTree.contains(99)).toBe(false);
  });
});

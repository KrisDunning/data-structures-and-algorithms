# Binary Trees and BST Implementation
<!-- Short summary or background information -->
Practice creating and traversing Binary trees and implement a Binary Search Tree.

## Challenge
<!-- Description of the challenge -->

- [x] Node
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- [x] Binary Tree
Create a Binary Tree class
Define a method for each of the depth first traversals:
- [x] pre order
- [x] in order
- [x] post order
which returns an array of the values, ordered appropriately.
- [x] findMax
Finds the largest value in the binary tree
- [x] Binary Search Tree
Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
- [x] Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
- [x] Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Big O should be 0(n).

[findMax() WhiteBoard](CodeChallenge16.png)

## API
<!-- Description of each method publicly available to your Linked List -->

- let binaryTree= new BinaryTree(); // to initialize a new binary tree.
- to fill out a standard binary tree

>binaryTree.root = new Node(20);
>binaryTree.root.left = new Node(7);
>binaryTree.root.right = new Node(15);
>binaryTree.root.left.left = new Node(66);
>binaryTree.root.left.right = new Node(17);
>binaryTree.root.right.left = new Node(4);

- binaryTree.preOrder() // to output array of tree values in a preOrder result
- binaryTree.inOrder() // to output array of tree values in a inOrder result
- binaryTree.postOrder() // to output array of tree values in a postOrder result
- binaryTree.findMax() // to find the max value in the binaryTree
- let bst = new BST() // new binary search tree as a extended class of binary tree
- bst.add(value) // adds a new node to the bst in its place. PS: first value entered will be the root.
- bst.contains(value) // returns true or false boolean if the bst contains the value

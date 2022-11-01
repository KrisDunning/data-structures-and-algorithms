'use strict';
const {Node, BinaryTree} = require('../trees/binary-trees');
const treeIntersection = require('./treeIntersection');

describe (' Tree Intersection ', ()=>{

  it('Can successfully return empty array when no repeated values',()=>{
    let treeA = new BinaryTree();
    treeA.root = new Node(1);
    treeA.root.left = new Node(2);
    treeA.root.right = new Node(3);
    treeA.root.left.left = new Node(4);
    treeA.root.left.right = new Node(5);
    treeA.root.left.right.left= new Node(6);
    let treeB = new BinaryTree();
    treeB.root = new Node(17);
    treeB.root.left = new Node(28);
    treeB.root.right = new Node(39);
    treeB.root.left.left = new Node(40);
    treeB.root.left.right = new Node(55);
    treeB.root.left.right.left= new Node(66);
    expect(treeIntersection(treeA,treeB)).toEqual([]);
  });

  it('Can successfully return array of repeated values',()=>{
    let treeA = new BinaryTree();
    treeA.root = new Node(1);
    treeA.root.left = new Node(2);
    treeA.root.right = new Node(3);
    treeA.root.left.left = new Node(4);
    treeA.root.left.right = new Node(5);
    treeA.root.left.right.left= new Node(6);
    let treeB = new BinaryTree();
    treeB.root = new Node(1);
    treeB.root.left = new Node(28);
    treeB.root.right = new Node(3);
    treeB.root.left.left = new Node(40);
    treeB.root.left.right = new Node(5);
    treeB.root.left.right.left= new Node(66);
    expect(treeIntersection(treeA,treeB)).toEqual([1,5,3]);
  });

  it('Can successfully return empty arra when passed 2 empty trees',()=>{
    let treeA = new BinaryTree();
    treeA.root = new Node();
    let treeB = new BinaryTree();
    treeB.root = new Node();
    expect(treeIntersection(treeA,treeB)).toEqual([]);
  });
});

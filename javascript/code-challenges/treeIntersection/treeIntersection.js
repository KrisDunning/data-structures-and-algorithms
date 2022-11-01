'use strict';

const {Node, BinaryTree} = require('../trees/binary-trees');

function treeIntersection(tree1,tree2){
  let theMap= new Map();
  let sharedValues=[];

  const setToMap = ((node)=>{
    (theMap.set(node.value,1));
  });

  const CompareToMap = ((node)=>{
    if(theMap.has(node.value)){
      sharedValues.push(node.value);
    }
  });

  const traverse = (node,callback) => {
    if(node.value)callback(node);
    if (node.left) traverse(node.left,callback);
    if (node.right) traverse(node.right,callback);
  };
  traverse(tree1.root,setToMap);
  traverse(tree2.root,CompareToMap);

  return sharedValues;
}
module.exports= treeIntersection;



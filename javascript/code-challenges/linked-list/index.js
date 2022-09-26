'use strict';

class Node {
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class LinkedList{
  constructor(){
    this.head=null;
  }

  insert(value){
    const node = new Node(value);
    if(!this.head){
      this.head=node;
      return;
    }
    let head=this.head;
    node.next=head;
    this.head=node;
  }

  includes(value){
    let current=this.head;
    while(current){
      if(current.value===value)
      {
        return true;
      }
      current=current.next;
    }
    return false;
  }

  toString(){
    let theString='';
    let current=this.head;
    while(current){
      theString=theString+`{${current.value}}->`;
      current=current.next;
    }
    theString=theString+'NULL';
    return theString;
  }

}

module.exports = {LinkedList};

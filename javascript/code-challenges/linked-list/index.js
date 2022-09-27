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

  append(newValue){
    let current=this.head;
    while(current.next){
      current=current.next;
    }
    let node=new Node(newValue);
    current.next=node;
  }

  insertBefore(value,newValue){
    let current=this.head;
    if(current.value===value){
      this.insert(newValue);
      return;
    }
    while(current.next){
      if(current.next.value===value){
        let holder=current.next;
        let newNode= new Node(newValue);
        current.next=newNode;
        newNode.next=holder;
        return;
      }
      current=current.next;
    }
    return ('Supplied Search Value Not Found');
  }

  insertAfter(value,newValue){
    let current=this.head;
    while(current){
      if (current.value===value){
        let newNode= new Node(newValue);
        newNode.next=current.next;
        current.next=newNode;
        return;
      }
      current=current.next;
    }
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

  kthFromEnd(k){
    let current = this.head;
    let length=0;
    let returnValue;
    while(current){
      length++;
      current=current.next;
    }
    length=length-k;
    if(length>0&&k>=0){
      current=this.head;
      for(let i=0;i<length;i++){
        returnValue=current.value;
        if(current.next){
          current=current.next;
        }else{
          return returnValue;
        }
      }
      return returnValue;
    }else{
      return null;
    }
  }

}

module.exports = {LinkedList};

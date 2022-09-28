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

  zipLists(list1,list2){
    let zippedList = new LinkedList();
    //validation
    // if list 1 or 2 is empty return other list as is
    let current1=list1.head;
    let current2=list2.head;
    let ableToZip1=true;
    let ableToZip2=true;

    while(ableToZip1||ableToZip2){
      if(!zippedList.head){
        zippedList.insert(current1.value);
      }
      else if(current1.value&& ableToZip1){
        zippedList.append(current1.value);
      }
      if (current2.value&&ableToZip2){
        zippedList.append(current2.value);
      }
      console.log('Zipped List: ',JSON.stringify(zippedList));
      if(current1.next){
        current1=current1.next;
      }
      else{
        ableToZip1=false;
      }
      if(current2.next){
        current2=current2.next;
      }else{
        ableToZip2=false;
      }
    }
    return zippedList;
  }
}

let list1= new LinkedList();
let list2= new LinkedList();
let combined= new LinkedList();
list1.insert(2);
list1.insert(3);
list1.insert(1);
list2.insert(4);
list2.insert(9);
list2.insert(5);

console.log((combined.zipLists(list1,list2)).toString());
module.exports = {LinkedList};

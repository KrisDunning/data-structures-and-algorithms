'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if(!this.top){
      this.top = node;
      return;
    }
    let current = node;
    current.next=this.top;
    this.top=current;
  }

  pop(){
    if(!this.top){
      console.error('RAISED EXCEPTION: Stack is empty.');
    }
    let popValue= this.top.value;
    this.top=this.top.next;
    return popValue;
  }

  peek(){
    if(!this.top){
      console.error('RAISED EXCEPTION: Stack is empty.');
    }
    return (this.top.value);
  }
  isEmpty(){
    if(!this.top){
      return true;
    }
    return false;
  }
}

class Queue{
  constructor(){
    this.front = null;
  }

  enqueue(value){
    let node= new Node(value);
    if(!this.front){
      this.front=node;
      return;
    }
    let current=this.front;
    while(current.next){
      current=current.next;
    }
    current.next=node;
  }

  dequeue(){
    if(!this.front){
      console.error('ERROR! Queue is empty.');
    }
    let dqValue=this.front.value;
    this.front=this.front.next;
    return dqValue;
  }

  peek(){
    if(!this.front){
      console.error('ERROR! Queue is empty.');
    }
    return this.front.value;
  }

  isEmpty(){
    if(!this.front){
      return true;
    }
    return false;
  }

}

module.exports = {Stack,Queue};

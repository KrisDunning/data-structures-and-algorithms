'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
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

// let queue = new Queue;
// console.log('queue: ',JSON.stringify(queue));
// queue.enqueue(1);
// console.log('The Queue1: ',JSON.stringify(queue));
// queue.enqueue(2);
// console.log('The Queue2: ',JSON.stringify(queue));
// queue.enqueue(3);
// console.log('The Queue3: ',JSON.stringify(queue));
// console.log('Deque(): ',queue.dequeue());
// console.log(JSON.stringify(queue));
// console.log('Deque(): ',queue.dequeue());
// console.log(JSON.stringify(queue));
// console.log(queue.isEmpty());
// console.log('peek: ',queue.peek());

// let stack= new Stack;
// console.log (stack);
// console.log(stack.isEmpty());
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// console.log('peek: ',stack.peek());
// console.log('popped Value: ',stack.pop());
// console.log(stack);
// console.log(stack.isEmpty());
// console.log('peek: ',stack.peek());

module.exports = {LinkedList,Stack,Queue};

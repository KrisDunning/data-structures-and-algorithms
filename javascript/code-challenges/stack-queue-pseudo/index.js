'use strict';
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new StackNode(value);
    if (!this.top) {
      this.top = node;
      return;
    }
    let current = node;
    current.next = this.top;
    this.top = current;
  }

  pop() {
    if (!this.top) {
      console.error('RAISED EXCEPTION: Stack is empty.');
    }
    let popValue = this.top.value;
    this.top = this.top.next;
    return popValue;
  }

  peek() {
    if (!this.top) {
      return (console.log('RAISED EXCEPTION: Stack is empty.'));
    }
    return (this.top.value);
  }
}

let stack1 = new Stack;
let stack2 = new Stack;

class PseudoQ {
  constructor() {
  }

  enqueue(value) {
    let node = new StackNode(value);
    if (!stack1.top) {
      stack1.top = node;
      return stack1;
    }
    let current = stack1.top;
    while (current) {
      stack2.push(stack1.pop());
      current = current.next;
    }
    stack1.push(value);
    current = stack2.top;
    while (current) {
      stack1.push(stack2.pop());
      current = current.next;
    }
  }
  dequeue() {
    return stack1.pop();
  }
}

module.exports={StackNode,Stack,PseudoQ};



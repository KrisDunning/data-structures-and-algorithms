'use strict';

let {Stack,Queue} = require ('./index');

// Calling pop or peek on empty stack raises exception

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

describe ('Stacks', ()=>{

  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack;
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.top).toBe(null);
  });

  it('Can successfully push onto a stack', ()=>{
    let stack= new Stack;
    stack.push(1);
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.top.value).toBe(1);
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let stack= new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
  });
  it('Can successfully pop off the stack',()=>{
    let stack= new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.top.value).toBe(1);
  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let stack= new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(() => {
      stack.pop();
    }).toThrow();
  });
  it('Can successfully peek the next item on the stack',()=>{
    let stack= new Stack;
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });


});


// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception








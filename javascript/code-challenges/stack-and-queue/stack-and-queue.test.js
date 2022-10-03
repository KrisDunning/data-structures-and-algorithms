'use strict';

let {Stack,Queue} = require ('./index');

describe ('Stacks', ()=>{

  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack;
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.top).toBe(null);
  });

  it('Can successfully call isEmpty',()=>{
    let stack = new Stack;
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
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
  it('Calling pop or peek on empty stack raises exception',()=>{
    let stack = new Stack;
    expect(() => {
      stack.peek();
    }).toThrow();
    expect(() => {
      stack.pop();
    }).toThrow();
  });
});

describe ('Queue', ()=>{

  it('Can successfully instantiate an empty queue',()=>{
    let queue = new Queue;
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.front).toBe(null);
  });

  it('Can successfully call isEmpty',()=>{
    let queue = new Queue;
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it('Can successfully enqueue into a queue',()=>{
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.front.value).toBe(1);
    expect(queue.front.next.value).toBe(2);
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.front.value).toBe(2);
  });

  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it('Can successfully empty a queue after multiple dequeues',()=>{
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.front).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let queue = new Queue;
    expect(() => {
      queue.peek();
    }).toThrow();
    expect(() => {
      queue.dequeue();
    }).toThrow();
  });
});





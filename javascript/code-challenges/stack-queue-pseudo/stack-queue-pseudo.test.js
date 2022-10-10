'use strict';

let {PseudoQ} = require ('./index');


// let Q = new PseudoQ;
// Q.Enqueue(5);
// Q.Enqueue(3);
// Q.Enqueue(12);
// console.log(JSON.stringify(stack1));
// console.log(Q.Dequeue());
// console.log(stack1);
// console.log(Q.Dequeue());
// console.log(stack1);
// console.log(Q.Dequeue());
// console.log(stack1);
// console.log(Q.Dequeue());
// console.log(stack1);

describe ('Pseudo Queue', ()=>{

  it('Can enqueue a value', ()=>{
    let Q = new PseudoQ;
    Q.enqueue(5);
    expect(Q).toBeInstanceOf(PseudoQ);
    expect(Q.dequeue()).toBe(5);
  });

  it('Can dequeue a value', ()=>{
    let Q = new PseudoQ;
    Q.enqueue(5);
    Q.enqueue(10);
    Q.dequeue();
    expect(Q).toBeInstanceOf(PseudoQ);
    expect(Q.dequeue()).toBe(10);
  });


});

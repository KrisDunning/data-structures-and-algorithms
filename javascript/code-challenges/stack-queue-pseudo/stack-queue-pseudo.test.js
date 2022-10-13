'use strict';

let {PseudoQ} = require ('./index');

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

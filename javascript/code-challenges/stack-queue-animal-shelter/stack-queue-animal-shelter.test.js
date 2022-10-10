'use strict';
let {AnimalShelter} = require ('./index');

describe ('Animal Shelter', ()=>{

  it('Can successfully instantiate an empty queue',()=>{
    let shelter = new AnimalShelter;
    expect(shelter).toBeInstanceOf(AnimalShelter);
    expect(shelter.front).toBe(null);
  });

  it('Can successfully enqueue in a first in first out manner',()=>{
    let shelter = new AnimalShelter;
    shelter.enqueue('Dog');
    shelter.enqueue('Cat');
    expect(shelter.front.value).toBe('Dog');
    expect(shelter.front.next.value).toBe('Cat');
  });

  it('Can successfully reject a non cat/dog entry',()=>{
    let shelter = new AnimalShelter;
    expect(shelter.enqueue('Snake')).toBe(console.log('Cat and Dog only'));
  });

  it('Can successfully dequeue in a first in first out manner with regards to dog/cat pref',()=>{
    let shelter = new AnimalShelter;
    shelter.enqueue('Dog');
    shelter.enqueue('Cat');
    expect(shelter.dequeue('Cat')).toBe('Cat');
    expect(shelter.dequeue('Dog')).toBe('Dog');
  });
});

'use strict';
let mergeSort = require ('./index');

describe ('Merge Sort', ()=>{

  it('Can successfully sort an array lowest to highest',()=>{
    let theArray= [8,4,23,42,16,15];
    mergeSort(theArray);
    expect(theArray).toEqual([4,8,15,16,23,42]);
  });
  it('Can successfully return "TypeError" if not passed an array',()=>{
    expect((()=>{
      mergeSort('3f342c');
    }
    )).toThrow(TypeError);
  });
  it('Can successfully respond to 0/1 length array',()=>{
    let theArray= [8];
    let theArray2= [];
    mergeSort(theArray);
    expect(theArray).toEqual([8]);
    expect(theArray2).toEqual([]);
  });

});

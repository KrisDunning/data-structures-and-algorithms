'use strict';
let insertion_sort = require ('./index');

describe ('Insertion Sort', ()=>{

  it('Can successfully sort an array lowest to highest',()=>{
    let sort = insertion_sort([8,4,23,42,16,15]);
    expect(sort).toEqual([4,8,15,16,23,42]);
  });
  it('Can successfully return "TypeError" if not passed an array',()=>{
    expect((()=>{
      insertion_sort('3f342c');
    }
    )).toThrow(TypeError);
  });
  it('Can successfully respond to 0/1 length array',()=>{
    let sort = insertion_sort([8]);
    expect(sort).toEqual([8]);
    expect(insertion_sort([])).toEqual([]);
  });

});

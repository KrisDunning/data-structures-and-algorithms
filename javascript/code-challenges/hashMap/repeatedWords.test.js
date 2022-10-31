'use strict';
const {repeatedWords} = require('./hashmapRepeatedWord');

describe (' HashMap', ()=>{

  it('Can successfully return "No repeated words" when string contains no repeated words',()=>{
    expect(repeatedWords('no words here are repeated ya know')).toEqual('No repeated words');
  });

  it('Can successfully return the first repeated word from input string (1 repeated word)',()=>{
    expect(repeatedWords('the thing about repeated words are the numbers')).toBe('the');
  });

  it('Can successfully return the first repeated word from input string(3 repeated words)',()=>{
    expect(repeatedWords('the thing about thing about the')).toBe('thing');
  });


});

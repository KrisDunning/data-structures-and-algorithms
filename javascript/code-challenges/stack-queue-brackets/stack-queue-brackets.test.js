'use strict';

let {validateBrackets} = require('./index');


describe ('Validate Brackets', ()=>{

  it('Can return false for a single bracket', ()=>{

    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets('{')).toBe(false);
  });

  it('Can return true for a pair of matching brackets', ()=>{

    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{)')).toBe(false);
  });

  it('Can return true for a pair of matching brackets with filler characters', ()=>{

    expect(validateBrackets('[fefe]wef4543')).toBe(true);
    expect(validateBrackets('324323432423(432fdv)')).toBe(true);
    expect(validateBrackets('a2a32{fefee}9ol')).toBe(true);
    expect(validateBrackets('{298fdsk)v43kofle')).toBe(false);
  });

  it('Can return true for nested brackets', ()=>{

    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{298fd(sk}v4]3k)ofle')).toBe(false);
  });

});
